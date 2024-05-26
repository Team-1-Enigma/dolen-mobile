import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { H2, H3, H5, Image, ScrollView, XStack, YStack } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import images from "../../../../assets/images";

const TravelReview = () => {
    return (
        <>
            <YStack justifyContent="center" marginTop={10}>
                <XStack
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#07C9F0",
                        width: 355,
                        borderRadius: 15,
                    }}
                >
                    <YStack padding={20}>
                        <XStack marginBottom={15} gap={20}>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={images.login}
                            />
                            <YStack>
                                <H5 fontWeight={800} color={"white"}>TravelReview Page</H5>
                                <Text style={{ color: "white" }}>16.07.2024</Text>
                            </YStack>
                        </XStack>

                        <View>
                            <Text style={{ lineHeight: 25, fontWeight: 600, color: "white" }}>
                                Luar biasa! Perjalanan kami sangat menyenangkan
                                dan penuh petualangan. Panduannya profesional
                                dan ramah, serta destinasi yang dikunjungi
                                sangat indah dan berkesan. Sangat
                                direkomendasikan!
                            </Text>
                        </View>
                    </YStack>
                </XStack>
            </YStack>

            <YStack justifyContent="center" marginTop={10}>
                <XStack
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#07C9F0",
                        width: 355,
                        borderRadius: 15,
                    }}
                >
                    <YStack padding={20}>
                        <XStack marginBottom={15} gap={20}>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={images.login}
                            />
                            <YStack>
                                <H5 fontWeight={800} color={"white"}>TravelReview Page</H5>
                                <Text style={{ color: "white" }}>16.07.2024</Text>
                            </YStack>
                        </XStack>

                        <View>
                            <Text style={{ lineHeight: 25, fontWeight: 600, color: "white" }}>
                                Luar biasa! Perjalanan kami sangat menyenangkan
                                dan penuh petualangan. Panduannya profesional
                            </Text>
                        </View>
                    </YStack>
                </XStack>
            </YStack>
        </>
    );
};

export default TravelReview;
