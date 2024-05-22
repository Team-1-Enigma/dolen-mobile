import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { H2, H3, Image, ScrollView, XStack, YStack } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import images from "../../../assets/images";

const Home = () => {
    return (
        <>
            <ScrollView>
                <YStack
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    <XStack width="210%">
                        <Image
                            style={{ aspectRatio: 1, width: "100%" }}
                            source={images.bromo}
                        />
                    </XStack>

                    <View
                        style={{
                            position: "absolute",
                            zIndex: 5,
                            width: 250,
                            justifyContent: "space-between",
                            display: "flex",
                            flexDirection: "row",
                            gap: 15,
                        }}
                    >
                        <H2
                            style={{
                                color: "white",
                                marginTop: 560,
                                marginLeft: -55,
                                lineHeight: 45,
                            }}
                        >
                            Why you should reconsider The Bromo Mountain?
                        </H2>
                    </View>
                </YStack>

                <YStack padding={20} gap={10} marginTop={20}>
                    <View gap={5} marginBottom={10} paddingLeft={2}>
                        <Text style={{ fontSize: 31, fontWeight: 700 }}>Plan Your Best Travel Ever </Text>
                        <Text>Making the Most of Your Travel Experience in 2024</Text>
                    </View>
                    <XStack width="100%">
                        <Image
                            style={{ aspectRatio: 1, width: "100%", borderRadius: 20 }}
                            source={images.bromo1}
                        />
                    </XStack>
                    <H3 paddingLeft={2}>Bromo</H3>
                </YStack>
            </ScrollView>
        </>
    );
};

export default Home;
