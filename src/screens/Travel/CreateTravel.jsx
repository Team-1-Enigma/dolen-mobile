import React, { useState } from "react";
import { Button, H3, H4, H5, Input, Text, YStack } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const CreateSchema = yup
    .object({
        travelName: yup.string().required("Travel name is required"),
        contactInfo: yup.number().required("Contact info is required"),
        address: yup.string().required("Address is required"),
        bankName: yup.string().required("Bank name is required"),
        nameAccount: yup.string().required("Name account is required"),
        aliasName: yup.string().required("Alias name is required"),
        accountNumber: yup.number().required("Account number is required"),
    })
    .required();

const CreateTravel = () => {
    // image
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [image, setImage] = useState("");
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {
            travelName: "",
            contactInfo: "",
            address: "",
            bankName: "",
            nameAccount: "",
            aliasName: "",
            accountNumber: "",
        },
        resolver: yupResolver(CreateSchema),
    });

    const onSubmit = () => {
        console.log("Debug Form", {
            "getValues()": getValues(),
            "getFieldState('travelName')": getFieldState("travelName"),
        });
        const {
            travelName,
            contactInfo,
            address,
            bankName,
            nameAccount,
            aliasName,
            accountNumber,
        } = getValues();
        navigation.navigate("Travel", {
            travelName,
            contactInfo,
            address,
            bankName,
            nameAccount,
            aliasName,
            accountNumber,
            isFromLogin: true,
        });
    };

    // Image
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
                multiple: true,
            });

            console.log("Image Picker Result:", result);

            if (!result.canceled) {
                // setImage(result.assets[0].uri)
                if (result.assets.length > 0) {
                    let selectedImages = [];
                    result.assets.forEach((asset) => {
                        console.log("Selected Image URI: ", asset.uri);
                        selectedImages.push(asset.uri);
                    });

                    setImage(selectedImages);
                } else {
                    console.log("No images selected");
                }
            } else {
                console.log("Image picking cancelled");
            }
        } catch (e) {
            console.error("Error picking image:", e);
        }
    };

    const handleImageError = (error) => {
        console.error("Failed to load image", error);
    };

    if (hasGalleryPermission === false) {
        return <Text>No access to Internal Storage</Text>;
    }

    const CreateTravelPage = () => {
        return (
            <>
                <YStack
                    marginTop={30}
                    justifyContent="center"
                    alignItems="center"
                    padding={20}
                >
                    <YStack width={"100%"} gap={5}>
                        <H5>
                            Fill All form below correctly to create your Open
                            Trip
                        </H5>
                        {/* Images */}
                        <YStack marginTop={20}>
                            <H4 textAlign={"center"}>Photos</H4>
                            <View
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {image && image.length > 0 ? (
                                    <FlatList
                                        data={image}
                                        horizontal={true}
                                        renderItem={({ item }) => (
                                            <Image
                                                source={{ uri: item }}
                                                style={{
                                                    width: 300,
                                                    height: 300,
                                                    margin: 5,
                                                    marginTop: 10,
                                                }}
                                                onError={handleImageError}
                                            />
                                        )}
                                        keyExtractor={(item, index) =>
                                            index.toString()
                                        }
                                        contentContainerStyle={{
                                            alignItems: "center",
                                        }}
                                    />
                                ) : (
                                    <View
                                        style={{
                                            alignItems: "center",
                                            marginTop: 20,
                                            marginBottom: 10,
                                        }}
                                    >
                                        <Text>
                                            No Image Available, Click button
                                            bellow
                                        </Text>
                                    </View>
                                )}
                                <Button
                                    backgroundColor={"#07C9F0"}
                                    color={"white"}
                                    marginTop={20}
                                    fontWeight={800}
                                    onPress={() => pickImage()}
                                >
                                    Pick Images
                                </Button>
                            </View>
                        </YStack>

                        <YStack width={"100%"} marginTop={20}>
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
                                        placeholder={`Travel name`}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            position: "relative",
                                            paddingLeft: 35,
                                        }}
                                    />
                                )}
                                name="travelName"
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
                                    name="account-box-outline"
                                />
                            </TouchableOpacity>
                            {errors.travelName && (
                                <Text marginTop={1} color={"red"}>
                                    {errors.travelName.message}
                                </Text>
                            )}
                        </YStack>

                        {/* Contact info */}
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
                                        placeholder={`Contact Info`}
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
                                name="contactInfo"
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
                            {errors.contactInfo && (
                                <Text marginTop={1} color={"red"}>
                                    {errors.contactInfo.message}
                                </Text>
                            )}
                        </YStack>

                        {/* Address */}
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
                                        placeholder={`Address`}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            position: "relative",
                                            paddingLeft: 35,
                                        }}
                                    />
                                )}
                                name="address"
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
                                    name="home"
                                />
                            </TouchableOpacity>
                            {errors.address && (
                                <Text marginTop={1} color={"red"}>
                                    {errors.address.message}
                                </Text>
                            )}
                        </YStack>

                        {/* Bank name */}
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
                                        placeholder={`Bank name`}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            position: "relative",
                                            paddingLeft: 35,
                                        }}
                                    />
                                )}
                                name="bankName"
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
                                    name="credit-card"
                                />
                            </TouchableOpacity>
                            {errors.bankName && (
                                <Text marginTop={1} color={"red"}>
                                    {errors.bankName.message}
                                </Text>
                            )}
                        </YStack>

                        {/* Name account bank */}
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
                                        placeholder={`Account bank name`}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            position: "relative",
                                            paddingLeft: 35,
                                        }}
                                    />
                                )}
                                name="nameAccount"
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
                                    name="card-account-details"
                                />
                            </TouchableOpacity>
                            {errors.nameAccount && (
                                <Text marginTop={1} color={"red"}>
                                    {errors.nameAccount.message}
                                </Text>
                            )}
                        </YStack>

                        {/* Alias Name */}
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
                                        placeholder={`Alias name`}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            position: "relative",
                                            paddingLeft: 35,
                                        }}
                                    />
                                )}
                                name="aliasName"
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
                                    name="card-account-details"
                                />
                            </TouchableOpacity>
                            {errors.aliasName && (
                                <Text marginTop={1} color={"red"}>
                                    {errors.aliasName.message}
                                </Text>
                            )}
                        </YStack>

                        {/* Account bank number */}
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
                                        placeholder={`Account bank number`}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            position: "relative",
                                            paddingLeft: 35,
                                        }}
                                        keyboardType="numeric"
                                    />
                                )}
                                name="accountNumber"
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
                                    name="card-account-details"
                                />
                            </TouchableOpacity>
                            {errors.accountNumber && (
                                <Text marginTop={1} color={"red"}>
                                    {errors.bankName.message}
                                </Text>
                            )}
                        </YStack>
                    </YStack>

                    <Button
                        marginVertical={10}
                        size={"$5"}
                        width={"100%"}
                        onPress={handleSubmit(onSubmit)}
                        backgroundColor={"#07C9F0"}
                        color={"white"}
                    >
                        Save
                    </Button>
                </YStack>
            </>
        );
    };

    return (
        <>
            <FlatList data={[{}]} renderItem={CreateTravelPage} />
        </>
    );
};

export default CreateTravel;
