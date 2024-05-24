import { useState } from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { Button, H2, Input, XStack, YStack, Text } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import images from "../../../../assets/images";
import { useNavigation } from "@react-navigation/native";

const RegisterFormSchema = yup
    .object({
        fullName: yup.string().required("Fullname is Required"),
        phoneNumber: yup.number().required("Phone number is Required"),
        email: yup
            .string()
            .email("Invalid Email")
            .required("Email is Required"),
        password: yup
            .string()
            .min(8, "Password must be at least 8 characters")
            .required("Password must be filled"),
    })
    .required();

const Register = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        getValues,
        getFieldState,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullName: "",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        resolver: yupResolver(RegisterFormSchema),
    });

    const onPasswordToggle = () => {
        // setIsShowPassword(!setIsShowPassword);
        setIsShowPassword((previousIsShowPassword) => {
            return !previousIsShowPassword;
        });
    };

    const onSubmit = () => {
        console.log("Debug Form", {
            "getValues()": getValues(),
            "getFieldState('email')": getFieldState("email"),
        });
        const { fullName, phoneNumber, email, password } = getValues();
        // @ts-ignore
        navigation.navigate("Verify", { fullName, phoneNumber, email, password, isFromLogin: true });
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
                        source={images.register}
                    />
                </XStack>

                {/** Title (2nd Item) */}
                <H2 textAlign="center">Dolen Account Registration</H2>
                <Text style={{ color: "grey" }}>
                    Enter details to create your Travel Pulse account
                </Text>

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
                                    placeholder={`Fullname`}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={{
                                        position: "relative",
                                        paddingLeft: 35,
                                    }}
                                />
                            )}
                            name="fullName"
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
                                name="account"
                            />
                        </TouchableOpacity>
                        {errors.fullName && (
                            <Text marginTop={1} color={"red"}>
                                {errors.fullName.message}
                            </Text>
                        )}
                    </YStack>

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
                                    placeholder={`Phone number`}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={{
                                        position: "relative",
                                        paddingLeft: 35,
                                    }}
                                    keyboardType="numeric"
                                    maxLength={13}
                                />
                            )}
                            name="phoneNumber"
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
                                name="phone"
                            />
                        </TouchableOpacity>
                        {errors.phoneNumber && (
                            <Text marginTop={1} color={"red"}>
                                {errors.phoneNumber.message}
                            </Text>
                        )}
                    </YStack>

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
                                    placeholder={`Email`}
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
                        <XStack
                            alignItems="center"
                            // backgroundColor={"green"}
                        >
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
                                            console.log("event", event);
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
                                    size={20}
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
                >
                    Register
                </Button>
                <Text color={"grey"} marginTop={10}>
                    Enjoy your day!
                </Text>
            </YStack>
        </ScrollView>
    );
};

export default Register;
