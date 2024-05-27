import { useState } from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { Button, H2, Input, XStack, YStack, Text } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import images from "../../../../assets/images";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../app/Features/auth/AuthSlice";

const loginFormSchema = yup
    .object({
        email: yup
            .string()
            .email("Invalid Email")
            .required("Email is required"),
        password: yup
            .string()
            .min(8, "Password must be at least 8 characters")
            .required("Password must be filled"),
    })
    .required();

const Login = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(loginFormSchema),
    });

    const onPasswordToggle = () => {
        setIsShowPassword((previousIsShowPassword) => {
            return !previousIsShowPassword;
        });
    };

    const onSubmit = async (data) => {
        console.log("Data from form", data);
        try {
            console.log(data);
            const response = await dispatch(loginAction(data)).unwrap()
            console.log(data);
            console.log("response: ", response);
            if (response) {
                navigation.navigate("Verify")
            } else {
                setError(true)
            }
        } catch (error) {
            console.log("test");
            console.log(error)
            setError(true)
        }
    };

    const toRegistration = () => {
        navigation.navigate("Register");
    };

    return (
        <ScrollView
            alignItems="center"
            justifyContent={"center"}
            padding={20}
            width={"100%"}
        >
            <YStack
                flex={1}
                alignItems="center"
                gap={15}
            >
                <XStack width="50%">
                    <Image
                        style={{ aspectRatio: 1, width: "100%" }}
                        source={images.login}
                    />
                </XStack>

                <H2 textAlign="center">Welcome to Dolen</H2>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: "grey" }}>
                        Continue with login to enhance
                    </Text>
                    <Text style={{ color: "grey" }}>
                        your traveling experience
                    </Text>
                </View>

                <YStack width={"100%"}>
                    <YStack width={"100%"} marginTop={10}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <Input
                                    size={16}
                                    placeholder={`Email Address`}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={{
                                        position: "relative",
                                        paddingLeft: 35,
                                    }}
                                />
                            )}
                            name="email"
                        />
                        <TouchableOpacity>
                            <MaterialCommunityIcons
                                style={{
                                    position: "absolute",
                                    marginTop: -40,
                                    padding: 10,
                                    color: "grey",
                                }}
                                size={17}
                                name="email"
                            />
                        </TouchableOpacity>
                        {errors.email && (
                            <Text marginTop={1} color={"red"}>
                                {errors.email.message}
                            </Text>
                        )}
                    </YStack>

                    <YStack width={"100%"} marginTop={15}>
                        <XStack alignItems="center">
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({
                                    field,
                                    field: { onChange, onBlur, value },
                                }) => (
                                    <Input
                                        secureTextEntry={!isShowPassword}
                                        size={16}
                                        placeholder={`Password`}
                                        width={"100%"}
                                        onBlur={onBlur}
                                        onChangeText={(event) => {
                                            // console.log("event", event);
                                            onChange(event);
                                        }}
                                        value={value}
                                        style={{
                                            position: "relative",
                                            paddingLeft: 35,
                                        }}
                                    />
                                )}
                                name="password"
                            />
                            <TouchableOpacity>
                                <MaterialCommunityIcons
                                    style={{
                                        position: "absolute",
                                        marginTop: -20,
                                        padding: 10,
                                        color: "grey",
                                        left: -352,
                                    }}
                                    size={17}
                                    name="lock"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    position: "absolute",
                                    right: 16,
                                    // backgroundColor: "yellow",
                                }}
                                onPress={onPasswordToggle}
                            >
                                <MaterialCommunityIcons
                                    name={isShowPassword ? "eye" : "eye-off"}
                                />
                            </TouchableOpacity>
                        </XStack>
                        {errors.password && (
                            <Text marginTop={1} color={"red"}>
                                {errors.password.message}
                            </Text>
                        )}
                    </YStack>
                </YStack>

                <Button
                    marginTop={10}
                    size={"$5"}
                    width={"100%"}
                    onPress={handleSubmit(onSubmit)}
                    backgroundColor={"#07C9F0"}
                    color={"white"}
                    fontWeight={800}
                    borderRadius={50}
                >
                    Log In
                </Button>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text>Don't Have an account yet?</Text>
                    <TouchableOpacity>
                        <Text
                            onPress={toRegistration}
                            style={{
                                color: "#07C9F0",
                                fontWeight: "800",
                                paddingLeft: 2,
                            }}
                        >
                            Create an account
                        </Text>
                    </TouchableOpacity>
                </View>
            </YStack>
        </ScrollView>
    );
};

export default Login;
