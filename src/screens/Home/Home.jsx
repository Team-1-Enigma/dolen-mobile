import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { H2, H3, Image, ScrollView, XStack, YStack } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import images from "../../../assets/images";

const Home = () => {
    return (
        <>
            <YStack
                flex={1}
                justifyContent="center"
                alignItems="center"
                padding={20}
            >
                <XStack>
                    <H3>Home Page</H3>
                </XStack>
            </YStack>
        </>
    );
};

export default Home;
