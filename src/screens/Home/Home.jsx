import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { H3, Image, ScrollView, XStack, YStack } from "tamagui";
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
                        position: 'relative'
                    }}
                >
                    <XStack width="210%">
                        <Image
                            style={{ aspectRatio: 1, width: "100%" }}
                            source={images.bromo}
                        />
                    </XStack>

                    <View style={{ position: 'absolute', zIndex: 5, width: 250, justifyContent: 'space-between', display: 'flex', flexDirection: 'row', gap: 15 }}>
                        <H3 style={{ color: 'white', marginTop: 650, marginLeft: -55, lineHeight: 40 }}>
                            Why you should reconsider The Bromo Mountain?
                        </H3>
                    </View>
                </YStack>
            </ScrollView>
        </>
    );
};

export default Home;
