import React from "react";
import { Image, Text, View } from "react-native";
import { H1, Button, XStack, YStack, H2 } from "tamagui";
import images from "../../../../assets/images";
import { useNavigation } from "@react-navigation/native";

const Verify = () => {
    const navigation = useNavigation()

    const toHomepage = () => {
        navigation.navigate("Home");
    };

    return (
        <YStack
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
            }}
        >
            <H1>Check Your Email</H1>
            <XStack width="70%" marginVertical={25}>
                <Image
                    style={{ aspectRatio: 1, width: "100%" }}
                    source={images.verify}
                />
            </XStack>

            <H2>Hello, Enigmanians</H2>
            <View
                style={{
                    width: 320,
                    justifyContent: "center",
                    alignItems: "center",
                    marginVertical: 20
                }}
            >
                <Text
                    style={{
                        fontSize: 17,
                        textAlign: "center",
                        lineHeight: 28,
                    }}
                >
                    We're happy your signed up for Dolen.
                </Text>
                <Text
                    style={{
                        fontSize: 17,
                        textAlign: "center",
                        lineHeight: 28,
                    }}
                >
                    To start exploring the Dolen please confirm your email address
                </Text>
            </View>

            <Button
                size={"$5"}
                width={"100%"}
                backgroundColor={"#07C9F0"}
                color={"white"}
                fontWeight={800}
                borderRadius={50}
                onPress={toHomepage}
            >
                Confirm Email
            </Button>
        </YStack>
    );
};

export default Verify;
