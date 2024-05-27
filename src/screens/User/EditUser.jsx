import React from "react";
import {
    FlatList,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { Button, H2, H3, Image, Label, View, XStack, YStack } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import images from "../../../assets/images";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const userProfileSchema = yup.object({
    fullName: yup.string().required("Fullname is Required"),
    phoneNumber: yup.number().required("Phone number is Required"),
    email: yup.string().email("Invalid Email").required("Email is Required"),
    gender: yup.string().required("Gender is Required"),
    birthDate: yup.date(),
    address: yup.string().required("Address is Required"),
});

const EditUser = () => {
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        getValues,
        getFieldState,
        formState: { errors },
    } = useForm({
        defaultValues: {
            gender: "",
            birthDate: "",
            address: "",
        },
        resolver: yupResolver(userProfileSchema),
    });

    const onSubmit = () => {
        console.log("Debug Form", {
            "getValues()": getValues(),
            "getFieldState('email')": getFieldState("email"),
        });
        const { fullName, phoneNumber, email, gender, birthDate, address } =
            getValues();
        // @ts-ignore
        navigation.navigate("User", {
            fullName,
            phoneNumber,
            email,
            gender,
            birthDate,
            address,
            isFromLogin: true,
        });
    };

    const toProfile = () => {
        navigation.navigate("User");
    };

    const editProfileComponent = () => {
        return (
            <YStack
                flex={1}
                alignItems="start"
                justifyContent="center"
                padding={20}
                marginVertical={20}
            >
                <XStack
                    justifyContent="space-between"
                    alignItems="center"
                    width={"68%"}
                >
                    <TouchableOpacity>
                        <MaterialCommunityIcons
                            style={{
                                padding: 10,
                                color: "grey",
                            }}
                            size={30}
                            name="arrow-left"
                            onPress={toProfile}
                        />
                    </TouchableOpacity>
                    <H2>Edit Profile</H2>
                </XStack>
                <YStack alignItems="center" justifyContent="center">
                    <TouchableOpacity>
                        <XStack width="30%" marginTop={15}>
                            <Image
                                style={{
                                    aspectRatio: 1,
                                    width: "100%",
                                    borderRadius: 100,
                                }}
                                source={images.profile}
                            />

                            <MaterialCommunityIcons
                                style={{
                                    padding: 5,
                                    color: "white",
                                    position: "absolute",
                                    backgroundColor: "black",
                                    borderRadius: 100,
                                    marginTop: 70,
                                    marginLeft: 65,
                                }}
                                size={20}
                                name="camera-outline"
                                // onPress={toProfile}
                            />
                        </XStack>
                    </TouchableOpacity>
                </YStack>

                <YStack marginTop={20} alignItems="center" gap={5}>
                    <H3>Mohammad Adib</H3>
                    <Text
                        style={{
                            fontSize: 16,
                            color: "grey",
                        }}
                    >
                        @mohammad.adib
                    </Text>
                </YStack>

                <View
                    style={{
                        borderWidth: 0.5,
                        borderColor: "grey",
                        marginTop: 30,
                    }}
                ></View>

                {/* Fullname */}
                <YStack
                    style={{
                        borderWidth: 0.5,
                        borderColor: "gray",
                        marginTop: 20,
                        paddingVertical: 5,
                        paddingHorizontal: 15,
                        borderRadius: 20,
                    }}
                >
                    <Label style={{ color: "grey" }}>Full name</Label>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                editable
                                multiline
                                numberOfLines={1.5}
                                size={16}
                                placeholder={`Input text here`}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                marginTop={-8}
                            />
                        )}
                        name="fullName"
                    />
                    {errors.fullName && (
                        <Text marginTop={1} color={"red"}>
                            {errors.fullName.message}
                        </Text>
                    )}
                </YStack>

                {/* Gender and Birthday */}
                <YStack
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 15,
                    }}
                >
                    <YStack
                        style={{
                            borderWidth: 0.5,
                            borderColor: "gray",
                            marginTop: 20,
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            borderRadius: 20,
                            width: "48%",
                        }}
                    >
                        <Label style={{ color: "grey" }}>Gender</Label>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    editable
                                    multiline
                                    numberOfLines={1.5}
                                    size={16}
                                    placeholder={`Input your gender`}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    marginTop={-8}
                                />
                            )}
                            name="gender"
                        />
                        {errors.gender && (
                            <Text marginTop={1} color={"red"}>
                                {errors.gender.message}
                            </Text>
                        )}
                    </YStack>
                    <YStack
                        style={{
                            borderWidth: 0.5,
                            borderColor: "gray",
                            marginTop: 20,
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            borderRadius: 20,
                            width: "48%",
                        }}
                    >
                        <Label style={{ color: "grey" }}>Birthday</Label>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    editable
                                    multiline
                                    numberOfLines={1.5}
                                    size={16}
                                    placeholder={`Input your birthday`}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    marginTop={-8}
                                />
                            )}
                            name="birthDate"
                        />
                        {errors.birthDate && (
                            <Text marginTop={1} color={"red"}>
                                {errors.birthDate.message}
                            </Text>
                        )}
                    </YStack>
                </YStack>

                {/* Phone number */}
                <YStack
                    style={{
                        borderWidth: 0.5,
                        borderColor: "gray",
                        marginTop: 20,
                        paddingVertical: 5,
                        paddingHorizontal: 15,
                        borderRadius: 20,
                    }}
                >
                    <Label style={{ color: "grey" }}>Phone number</Label>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                editable
                                multiline
                                numberOfLines={1.5}
                                size={16}
                                placeholder={`Input phone number here`}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                marginTop={-8}
                                keyboardType="numeric"
                                maxLength={13}
                            />
                        )}
                        name="phoneNumber"
                    />
                    {errors.phoneNumber && (
                        <Text marginTop={1} color={"red"}>
                            {errors.phoneNumber.message}
                        </Text>
                    )}
                </YStack>

                {/* Email */}
                <YStack
                    style={{
                        borderWidth: 0.5,
                        borderColor: "gray",
                        marginTop: 20,
                        paddingVertical: 5,
                        paddingHorizontal: 15,
                        borderRadius: 20,
                    }}
                >
                    <Label style={{ color: "grey" }}>Email</Label>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                editable
                                multiline
                                numberOfLines={1.5}
                                size={16}
                                placeholder={`Input email here`}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                marginTop={-8}
                            />
                        )}
                        name="email"
                    />
                    {errors.email && (
                        <Text marginTop={1} color={"red"}>
                            {errors.email.message}
                        </Text>
                    )}
                </YStack>

                {/* Address */}
                <YStack
                    style={{
                        borderWidth: 0.5,
                        borderColor: "gray",
                        marginTop: 20,
                        paddingVertical: 5,
                        paddingHorizontal: 15,
                        borderRadius: 20,
                    }}
                >
                    <Label style={{ color: "grey" }}>Address</Label>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                editable
                                multiline
                                numberOfLines={4}
                                size={16}
                                placeholder={`Input address here`}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}   
                                marginTop={-8}
                            />
                        )}
                        name="address"
                    />
                    {errors.address && (
                        <Text marginTop={1} color={"red"}>
                            {errors.address.message}
                        </Text>
                    )}
                </YStack>

                <Button
                    marginTop={20}
                    size={"$5"}
                    width={"100%"}
                    backgroundColor={"#07C9F0"}
                    color={"white"}
                    onPress={handleSubmit(onSubmit)}
                >
                    Save
                </Button>
            </YStack>
        );
    };

    return <FlatList data={[{}]} renderItem={editProfileComponent} />;
};

export default EditUser;
