import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Button, H2, H3, H4, H5, H6, Image, XStack, YStack } from "tamagui";
import images from "../../../assets/images";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import TravelReview from "./components/TravelReview";

const TravelDetails = () => {
    const [showMenu, setShowMenu] = useState(true);
    const navigation = useNavigation();
    const toTravelList = () => {
        navigation.navigate("Travel");
    };

    const ListTripOrder = () => {
        return (
            <>
                <YStack paddingVertical={10} marginLeft={5}>
                    <H3>1 Travel List</H3>
                    <Text style={{ color: "gray" }}>Total your travel...</Text>
                </YStack>
                <YStack marginTop={15}>
                    <XStack>
                        <XStack
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                backgroundColor: "#07C9F0",
                                width: 355,
                                borderRadius: 20,
                            }}
                        >
                            <XStack gap={10}>
                                <Image
                                    style={{
                                        width: 110,
                                        height: 103,
                                        borderTopLeftRadius: 10,
                                        borderBottomLeftRadius: 10,
                                    }}
                                    source={images.bromo}
                                />
                                <XStack
                                    flexDirection="column"
                                    gap={3}
                                    width={170}
                                    paddingVertical={15}
                                    paddingHorizontal={5}
                                >
                                    <H5 fontWeight={700} color={"white"}>
                                        My Favorit Travel
                                    </H5>
                                    <Text
                                        style={{
                                            color: "white",
                                        }}
                                    >
                                        Travel yang paling laris
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            marginTop: 4,
                                        }}
                                    >
                                        <MaterialCommunityIcons
                                            style={{
                                                color: "red",
                                                marginLeft: -4,
                                            }}
                                            size={17}
                                            name="map-marker"
                                        />
                                        <Text style={{ color: "white" }}>
                                            Malang
                                        </Text>
                                    </View>
                                </XStack>
                            </XStack>
                            <MaterialCommunityIcons
                                style={{
                                    position: "absolute",
                                    right: 0,
                                    top: 60,
                                    padding: 10,
                                    backgroundColor: "white",
                                    color: "#07C9F0",
                                    borderBottomRightRadius: 20,
                                    borderTopLeftRadius: 20,
                                }}
                                size={22}
                                name="arrow-right"
                            />
                        </XStack>
                    </XStack>
                </YStack>
            </>
        );
    };

    const Review = () => {
        return (
            <View>
                <YStack paddingVertical={10} marginLeft={5}>
                    <H3>2 Reviews</H3>
                    <Text style={{ color: "gray" }}>
                        Ask travelers to you...
                    </Text>
                </YStack>
                <TravelReview />
            </View>
        );
    };

    const TravelDetailPage = () => {
        return (
            <>
                <YStack justifyContent="center" alignItems="start" padding={20}>
                    <XStack
                        width={"100%"}
                        justifyContent="space-between"
                        alignItems="center"
                        paddingVertical={15}
                    >
                        <TouchableOpacity>
                            <MaterialCommunityIcons
                                style={{
                                    color: "black",
                                }}
                                size={25}
                                name="arrow-left"
                                onPress={toTravelList}
                            />
                        </TouchableOpacity>
                    </XStack>

                    <YStack alignItems="center" justifyContent="center">
                        <XStack width="30%" marginTop={10}>
                            <Image
                                style={{
                                    aspectRatio: 1,
                                    width: "100%",
                                    borderRadius: 100,
                                }}
                                source={images.login}
                            />
                        </XStack>
                    </YStack>

                    <YStack marginTop={10} alignItems="center" gap={5}>
                        <XStack alignItems="center" gap={5}>
                            <H3>Mohammad Adib</H3>
                            <Text style={{ color: "gray", fontSize: 14 }}>
                                ( Gender )
                            </Text>
                        </XStack>
                        <Text
                            style={{
                                fontSize: 16,
                                color: "grey",
                            }}
                        >
                            @mohammad.adib
                        </Text>
                        <Text>08123634789</Text>
                        <Text>12 Januari 2018</Text>
                    </YStack>

                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: "gray",
                            marginTop: 30,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingBottom: 5,
                        }}
                    >
                        <Button
                            margin={"auto"}
                            // backgroundColor={"#07C9F0"}
                            // color={"white"}
                            // paddingHorizontal={25}
                            // fontWeight={800}
                            // borderRadius={20}
                            onPress={() => setShowMenu(true)}
                        >
                            <MaterialCommunityIcons
                                style={{
                                    color: "black",
                                }}
                                size={25}
                                name="clipboard-list-outline"
                            />
                            List Trip
                        </Button>
                        <Text
                            style={{
                                fontSize: 35,
                                marginTop: -7,
                                color: "gray",
                            }}
                        >
                            |
                        </Text>
                        <Button
                            margin={"auto"}
                            // backgroundColor={"#07C9F0"}
                            // color={"white"}
                            // paddingHorizontal={25}
                            // fontWeight={800}
                            // borderRadius={20}
                            onPress={() => setShowMenu(false)}
                        >
                            <MaterialCommunityIcons
                                style={{
                                    color: "black",
                                }}
                                size={25}
                                name="account-details-outline"
                            />
                            Review
                        </Button>
                    </View>

                    {showMenu ? (
                        <FlatList data={[{}]} renderItem={ListTripOrder} />
                    ) : (
                        <FlatList data={[{}]} renderItem={Review} />
                    )}
                </YStack>
            </>
        );
    };

    return <FlatList data={[{}]} renderItem={TravelDetailPage} />;
};

export default TravelDetails;
