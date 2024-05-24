import React from "react";
import { Text, View } from "react-native";
import { H2, H3, Image, ScrollView, XStack, YStack, Button, H5 } from "tamagui";
import images from "../../assets/images";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
    const navigation = useNavigation()

    const toHomepage = () => {
        navigation.navigate("App");
    };

    return (
        <>
            <YStack
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                }}
            >
                <XStack width="220%">
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
                        alignItems: "center",
                        // display: "flex",
                        // flexDirection: "row",
                        gap: 15,
                    }}
                >
                    <H2
                        style={{
                            color: "white",
                            marginTop: 200,
                            lineHeight: 50,
                            textAlign: "center",
                            width: 320,
                        }}
                    >
                        Let's discover the beauty of Malang
                    </H2>
                    <Text
                        style={{
                            color: "white",
                            marginTop: 300,
                            lineHeight: 30,
                            position: "absolute",
                            width: 340,
                            textAlign: "center",
                            fontWeight: 700
                        }}
                    >
                        Malang is like a hidden pearl in East Java, waiting to
                        be explored. Here, you'll find the perfect blend of
                        natural beauty, rich culture and friendly people.
                        Experience the thrill of adventure, discover fascinating
                        culture and savor culinary delights. Malang is not just
                        a tourist destination, but an unforgettable experience
                        that will always remain in your heart.
                    </Text>
                    <Button
                        marginTop={480}
                        size={"$5"}
                        width={"100%"}
                        onPress={toHomepage}
                        backgroundColor={"#07C9F0"}
                        color={"white"}
                        fontWeight={800}
                        borderRadius={50}
                        position="absolute"
                    >
                        Get Started
                    </Button>
                </View>
            </YStack>
        </>
    );
};

export default Welcome;
