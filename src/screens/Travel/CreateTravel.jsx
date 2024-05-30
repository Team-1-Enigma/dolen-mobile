import React, { useState, useEffect } from "react";
import { Button, H4, H5, Input, Text, YStack } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";

const CreateSchema = yup.object().shape({
  travelName: yup.string().required("Travel name is required"),
  contactInfo: yup.string().required("Contact info is required"),
  address: yup.string().required("Address is required"),
  bankAccounts: yup.array().of(
    yup.object().shape({
      bankName: yup.string().required("Bank name is required"),
      nameAccount: yup.string().required("Name account is required"),
      aliasName: yup.string().required("Alias name is required"),
      accountNumber: yup.string().required("Account number is required"),
    })
  ),
});

const CreateTravel = () => {
  const [images, setImages] = useState([]);
  const [userId, setUserId] = useState("");

  // Fetch User ID from AsyncStorage
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const id = await AsyncStorage.getItem("userId");
        if (id) {
          setUserId(id);
        }
      } catch (error) {
        console.error("Failed to get userId from AsyncStorage", error);
      }
    };

    fetchUserId();
  }, []);

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
      bankAccounts: [{ bankName: "", nameAccount: "", aliasName: "", accountNumber: "" }],
    },
    resolver: yupResolver(CreateSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "bankAccounts",
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("name", data.travelName);
      formData.append("contactInfo", data.contactInfo);
      formData.append("address", data.address);

      // Append bank accounts
      data.bankAccounts.forEach((account, index) => {
        formData.append(`bankAccounts[${index}].bankName`, account.bankName);
        formData.append(`bankAccounts[${index}].nameAccount`, account.nameAccount);
        formData.append(`bankAccounts[${index}].aliasName`, account.aliasName);
        formData.append(`bankAccounts[${index}].accountNumber`, account.accountNumber);
      });

      // Append images
      images.forEach((image, index) => {
        formData.append("files", {
          uri: image,
          name: `image_${index}.jpg`,
          type: "image/jpeg",
        });
      });

      const token = await AsyncStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      const response = await axios.post('http://10.10.102.98:8080/api/travels', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });

      console.log(response.data);
      // Handle successful response
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  // Image Picker Logic
  const pickImages = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        allowsMultipleSelection: true,
      });

      if (!result.cancelled) {
        setImages(result.assets.map(asset => asset.uri));
      }
    } catch (e) {
      console.error("Error picking image:", e);
    }
  };

  return (
    <FlatList
      data={[{}]}
      renderItem={() => (
        <YStack marginTop={30} justifyContent="center" alignItems="center" padding={20}>
          <YStack width={"100%"} gap={5}>
            <H5>Fill All form below correctly to create your Open Trip</H5>

            {/* Images */}
            <YStack marginTop={20}>
              <H4 textAlign={"center"}>Photos</H4>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                {images.length > 0 ? (
                  <FlatList
                    data={images}
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
                        onError={console.error}
                      />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{ alignItems: "center" }}
                  />
                ) : (
                  <View style={{ alignItems: "center", marginTop: 20, marginBottom: 10 }}>
                    <Text>No Image Available, Click button below</Text>
                  </View>
                )}
                <Button
                  backgroundColor={"#07C9F0"}
                  color={"white"}
                  marginTop={20}
                  fontWeight={800}
                  onPress={pickImages}
                >
                  Pick Images
                </Button>
              </View>
            </YStack>

            {/* Travel Name */}
            <YStack width={"100%"} marginTop={20}>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    size={16}
                    placeholder={`Travel name`}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={{ position: "relative", paddingLeft: 35 }}
                  />
                )}
                name="travelName"
              />
              <TouchableOpacity>
                <MaterialCommunityIcons
                  style={{ position: "absolute", marginTop: -40, padding: 10, color: "grey" }}
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

            {/* Contact Info */}
            <YStack width={"100%"} marginTop={10}>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    size={16}
                    placeholder={`Contact Info`}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={{ position: "relative", paddingLeft: 35 }}
                    keyboardType="numeric"
                    maxLength={13}
                  />
                )}
                name="contactInfo"
              />
              <TouchableOpacity>
                <MaterialCommunityIcons
                  style={{ position: "absolute", marginTop: -40, padding: 10, color: "grey" }}
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
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    size={16}
                    placeholder={`Address`}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={{ position: "relative", paddingLeft: 35 }}
                  />
                )}
                name="address"
              />
              <TouchableOpacity>
                <MaterialCommunityIcons
                  style={{ position: "absolute", marginTop: -40, padding: 10, color: "grey" }}
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

            {/* Bank Accounts */}
            {fields.map((field, index) => (
              <View key={field.id}>
                <YStack width={"100%"} marginTop={10}>
                  <Controller
                    control={control}
                    name={`bankAccounts[${index}].bankName`}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        size={16}
                        placeholder={`Bank name`}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={{ position: "relative", paddingLeft: 35 }}
                      />
                    )}
                  />
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      style={{ position: "absolute", marginTop: -40, padding: 10, color: "grey" }}
                      size={17}
                      name="credit-card"
                    />
                  </TouchableOpacity>
                  {errors.bankAccounts?.[index]?.bankName && (
                    <Text marginTop={1} color={"red"}>
                      {errors.bankAccounts[index].bankName.message}
                    </Text>
                  )}
                </YStack>

                <YStack width={"100%"} marginTop={10}>
                  <Controller
                    control={control}
                    name={`bankAccounts[${index}].nameAccount`}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        size={16}
                        placeholder={`Name account`}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={{ position: "relative", paddingLeft: 35 }}
                      />
                    )}
                  />
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      style={{ position: "absolute", marginTop: -40, padding: 10, color: "grey" }}
                      size={17}
                      name="account"
                    />
                  </TouchableOpacity>
                  {errors.bankAccounts?.[index]?.nameAccount && (
                    <Text marginTop={1} color={"red"}>
                      {errors.bankAccounts[index].nameAccount.message}
                    </Text>
                  )}
                </YStack>

                <YStack width={"100%"} marginTop={10}>
                  <Controller
                    control={control}
                    name={`bankAccounts[${index}].aliasName`}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        size={16}
                        placeholder={`Alias name`}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={{ position: "relative", paddingLeft: 35 }}
                      />
                    )}
                  />
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      style={{ position: "absolute", marginTop: -40, padding: 10, color: "grey" }}
                      size={17}
                      name="rename-box"
                    />
                  </TouchableOpacity>
                  {errors.bankAccounts?.[index]?.aliasName && (
                    <Text marginTop={1} color={"red"}>
                      {errors.bankAccounts[index].aliasName.message}
                    </Text>
                  )}
                </YStack>

                <YStack width={"100%"} marginTop={10}>
                  <Controller
                    control={control}
                    name={`bankAccounts[${index}].accountNumber`}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        size={16}
                        placeholder={`Account number`}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={{ position: "relative", paddingLeft: 35 }}
                        keyboardType="numeric"
                      />
                    )}
                  />
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      style={{ position: "absolute", marginTop: -40, padding: 10, color: "grey" }}
                      size={17}
                      name="numeric"
                    />
                  </TouchableOpacity>
                  {errors.bankAccounts?.[index]?.accountNumber && (
                    <Text marginTop={1} color={"red"}>
                      {errors.bankAccounts[index].accountNumber.message}
                    </Text>
                  )}
                </YStack>

                {/* Remove Bank Account Button */}
                <Button
                  backgroundColor={"red"}
                  color={"white"}
                  marginTop={10}
                  onPress={() => remove(index)}
                >
                  Remove Bank Account
                </Button>
              </View>
            ))}

            {/* Add Bank Account Button */}
            <Button
              backgroundColor={"#07C9F0"}
              color={"white"}
              marginTop={10}
              onPress={() => append({ bankName: "", nameAccount: "", aliasName: "", accountNumber: "" })}
            >
              Add Bank Account
            </Button>

            {/* Submit Button */}
            <Button
              backgroundColor={"#07C9F0"}
              color={"white"}
              marginTop={20}
              fontWeight={800}
              onPress={handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </YStack>
        </YStack>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default CreateTravel;
