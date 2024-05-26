import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { H2, H3, Image, ScrollView, XStack, YStack, Button, H5 } from "tamagui";
import images from "../../assets/images";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
                            marginTop: 150,
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
                            marginTop: 250,
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
                        marginTop={430}
                        size={"$5"}
                        width={"100%"}
                        onPress={toHomepage}
                        backgroundColor={"#07C9F0"}
                        borderRadius={50}
                        position="absolute"
                        alignItems="center"
                    >
                        <Text 
                            style={{
                                color: "white",
                                fontSize: 19,
                                fontWeight: 800
                            }}
                        >
                            Get Started
                        </Text>

                        <TouchableOpacity>
                            <MaterialCommunityIcons
                                style={{
                                    color: "white",
                                }}
                                size={23}
                                name="arrow-right"
                            />
                        </TouchableOpacity>
                    </Button>
                </View>
            </YStack>
        </>
    );
};

export default Welcome;
