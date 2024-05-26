import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { H2, H3, H5, Image, ScrollView, XStack, YStack } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import images from "../../../assets/images";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    // const navigation = useNavigation()

    const homePageView = () => {
        return (
            <>
                <YStack justifyContent="center" padding={20} marginTop={20}>
                    <XStack alignItems="center" marginBottom={20} gap={10}>
                        <Image
                            style={{
                                width: 45,
                                height: 45,
                                borderRadius: 100,
                            }}
                            source={images.login}
                        />
                        <YStack>
                            <Text style={{ color: "gray" }}>Welcome</Text>
                            <H3>Jonathan</H3>
                        </YStack>
                    </XStack>

                    <View>
                        <Image
                            style={{
                                width: 350,
                                height: 200,
                                borderRadius: 10,
                            }}
                            source={images.bromo}
                        />
                    </View>

                    {/* Button */}
                    <XStack paddingVertical={15} gap={50} justifyContent="center">
                        <YStack gap={10} alignItems="center">
                            <MaterialCommunityIcons
                                style={{
                                    padding: 10,
                                    color: "white",
                                    backgroundColor: "#07C9F0",
                                    borderRadius: 15,
                                }}
                                size={30}
                                name="email"
                            />
                            <H5>Travel</H5>
                        </YStack>
                        <YStack gap={10} alignItems="center">
                            <MaterialCommunityIcons
                                style={{
                                    padding: 10,
                                    color: "white",
                                    backgroundColor: "#07C9F0",
                                    borderRadius: 15,
                                }}
                                size={30}
                                name="email"
                            />
                            <H5>Trip</H5>
                        </YStack>
                        <YStack gap={10} alignItems="center">
                            <MaterialCommunityIcons
                                style={{
                                    padding: 10,
                                    color: "white",
                                    backgroundColor: "#07C9F0",
                                    borderRadius: 15,
                                }}
                                size={30}
                                name="email"
                            />
                            <H5>Travel</H5>
                        </YStack>
                    </XStack>
                </YStack>
            </>
        );
    };
    return <FlatList data={[{}]} renderItem={homePageView} />;
};

export default Home;
