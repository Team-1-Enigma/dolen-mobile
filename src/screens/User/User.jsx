import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Button, H2, H3, H4, H5, H6, Image, View, XStack, YStack } from "tamagui";
import images from "../../../assets/images";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const User = () => {
    const navigation = useNavigation()

    const toHomepage = () => {
        navigation.navigate("Home");
    };
    const toEditpage = () => {
        navigation.navigate("EditUser");
    };

    return (
        <>
            <YStack
                flex={1}
                alignItems="start"
                justifyContent="center"
                padding={20}
            >
                <XStack
                    justifyContent="space-between"
                    alignItems="center"
                    width={"61%"}
                >
                    <TouchableOpacity>
                        <MaterialCommunityIcons
                            style={{
                                padding: 10,
                                color: "grey",
                            }}
                            size={30}
                            name="arrow-left"
                            onPress={toHomepage}
                        />
                    </TouchableOpacity>
                    <H2>Profile</H2>
                </XStack>
                <YStack alignItems="center" justifyContent="center">
                    <XStack width="30%" marginTop={20}>
                        <Image
                            style={{
                                aspectRatio: 1,
                                width: "100%",
                                borderRadius: 100,
                            }}
                            source={images.profile}
                        />
                    </XStack>
                </YStack>

                <YStack marginTop={20} alignItems="center" gap={5}>
                    <H3>Mohammad Adib</H3>
                    <Text
                        style={{
                            fontSize: 16,
                            color: "grey",
                        }}
                    >
                        @mohammad.adib
                    </Text>
                    <Button
                        marginTop={15}
                        size={"$3"}
                        width={"50%"}
                        onPress={toEditpage}
                        backgroundColor={"#07C9F0"}
                        color={"white"}
                        fontWeight={800}
                        borderRadius={20}
                    >
                        Edit Profile
                    </Button>
                </YStack>

                <View
                    style={{
                        borderWidth: 0.5,
                        borderColor: "grey",
                        marginTop: 30,
                    }}
                ></View>

                <YStack marginVertical={15} gap={5}>
                    <TouchableOpacity>
                        <YStack
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <XStack alignItems="center">
                                <MaterialCommunityIcons
                                    style={{
                                        padding: 10,
                                        color: "grey",
                                    }}
                                    size={22}
                                    name="clipboard-text-clock"
                                />
                                <H5 fontWeight={700}>My Orders</H5>
                            </XStack>
                            <TouchableOpacity>
                                <MaterialCommunityIcons
                                    style={{
                                        padding: 10,
                                        color: "grey",
                                    }}
                                    size={22}
                                    name="arrow-right"
                                />
                            </TouchableOpacity>
                        </YStack>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <YStack
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <XStack alignItems="center">
                                <MaterialCommunityIcons
                                    style={{
                                        padding: 10,
                                        color: "grey",
                                    }}
                                    size={22}
                                    name="airplane-marker"
                                />
                                <H5 fontWeight={700}>My Trip</H5>
                            </XStack>
                            <TouchableOpacity>
                                <MaterialCommunityIcons
                                    style={{
                                        padding: 10,
                                        color: "grey",
                                    }}
                                    size={22}
                                    name="arrow-right"
                                />
                            </TouchableOpacity>
                        </YStack>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <YStack
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <XStack alignItems="center">
                                <MaterialCommunityIcons
                                    style={{
                                        padding: 10,
                                        color: "grey",
                                    }}
                                    size={22}
                                    name="lock"
                                />
                                <H5 fontWeight={700}>Change password</H5>
                            </XStack>
                            <TouchableOpacity>
                                <MaterialCommunityIcons
                                    style={{
                                        padding: 10,
                                        color: "grey",
                                    }}
                                    size={22}
                                    name="arrow-right"
                                />
                            </TouchableOpacity>
                        </YStack>
                    </TouchableOpacity>
                </YStack>

                <View
                    style={{
                        borderWidth: 0.5,
                        borderColor: "grey",
                        marginBottom: 15,
                    }}
                ></View>

                <YStack>
                    <TouchableOpacity>
                        <YStack
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <XStack alignItems="center">
                                <MaterialCommunityIcons
                                    style={{
                                        padding: 10,
                                        color: "grey",
                                    }}
                                    size={22}
                                    name="help-circle"
                                />
                                <H5 fontWeight={700}>Help & Support</H5>
                            </XStack>
                            <TouchableOpacity>
                                <MaterialCommunityIcons
                                    style={{
                                        padding: 10,
                                        color: "grey",
                                    }}
                                    size={22}
                                    name="arrow-right"
                                />
                            </TouchableOpacity>
                        </YStack>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <YStack
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <XStack alignItems="center">
                                <MaterialCommunityIcons
                                    style={{
                                        padding: 10,
                                        color: "grey",
                                    }}
                                    size={22}
                                    name="logout"
                                />
                                <H5 fontWeight={700}>Logout</H5>
                            </XStack>
                        </YStack>
                    </TouchableOpacity>
                </YStack>

                <TouchableOpacity>
                    <YStack
                        style={{
                            marginTop: 25,
                            borderWidth: 1,
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 8,
                            borderColor: "gray",
                            backgroundColor: "lightgray",
                            shadowOpacity: 10
                        }}
                    >
                        <YStack
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "auto",
                            }}
                        >
                            <XStack width="13%">
                                <Image
                                    style={{
                                        aspectRatio: 1,
                                        width: "100%",
                                        borderRadius: 10,
                                    }}
                                    source={images.bromo1}
                                />
                            </XStack>
                            <H5 fontWeight={700} width={200} paddingHorizontal={10}>My Travel</H5>
                            <MaterialCommunityIcons
                                style={{
                                    padding: 10,
                                    color: "grey",
                                }}
                                size={22}
                                name="arrow-right"
                            />
                        </YStack>
                    </YStack>
                </TouchableOpacity>
                
                <YStack alignItems="center" marginTop={40}>
                    <H6 style={{ color: "gray" }}>2024 &copy;Copyright</H6>
                    <Text style={{ color: "gray", fontSize: 16 }}>Dolen</Text>
                </YStack>
            </YStack>
        </>
    );
};

export default User;
