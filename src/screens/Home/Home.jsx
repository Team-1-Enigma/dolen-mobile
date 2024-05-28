import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { H2, H3, H4, H5, H6, Image, ScrollView, XStack, YStack } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import images from "../../../assets/images";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/layout/Header";
// import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation()

    const toTravel = () => {
        navigation.navigate("Travel")
    }
    const toTrip = () => {
        navigation.navigate("Trip")
    }

    const TripList = () => {
        return (
            <XStack gap={10}>
                <YStack
                    backgroundColor={"white"}
                    padding={10}
                    borderRadius={10}
                >
                    <Image
                        style={{
                            height: 200,
                            width: 300,
                            borderRadius: 10,
                        }}
                        source={images.balaikambang}
                    />
                    <XStack
                        flexDirection="column"
                        gap={5}
                        width={300}
                        paddingHorizontal={5}
                        paddingVertical={10}
                    >
                        <H4 fontWeight={700} color={"black"}>
                            Balaikambang Beach
                        </H4>
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
                            <Text style={{ color: "black", fontWeight: 700 }}>
                                Bantur, Kabupaten Malang, Jawa Timur
                            </Text>
                        </View>
                    </XStack>
                </YStack>

                <YStack
                    backgroundColor={"white"}
                    padding={10}
                    borderRadius={10}
                >
                    <Image
                        style={{
                            height: 200,
                            width: 300,
                            borderRadius: 10,
                        }}
                        source={images.bromo1}
                    />
                    <XStack
                        flexDirection="column"
                        gap={5}
                        width={300}
                        paddingHorizontal={5}
                        paddingVertical={10}
                    >
                        <H4 fontWeight={700} color={"black"}>
                            Bromo Tengger Semeru
                        </H4>
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
                            <Text style={{ color: "black", fontWeight: 700 }}>
                                Lawang, Malang, Jawa Timur
                            </Text>
                        </View>
                    </XStack>
                </YStack>
            </XStack>
        );
    };

    const TravelList = () => {
        return (
            <XStack gap={10}>
                <YStack backgroundColor={"white"} padding={5} borderRadius={10}>
                    <Image
                        style={{
                            height: 200,
                            width: 170,
                            borderRadius: 10,
                        }}
                        source={images.login}
                    />
                    <XStack
                        flexDirection="column"
                        gap={5}
                        width={170}
                        padding={5}
                    >
                        <H5 fontWeight={700} color={"black"}>
                            Darussalam
                        </H5>

                        <View
                            style={{
                                flexDirection: "row",
                                marginTop: 4,
                                gap: 4,
                            }}
                        >
                            <MaterialCommunityIcons
                                style={{
                                    color: "red",
                                    marginLeft: -4,
                                }}
                                size={15}
                                name="phone"
                            />
                            <Text style={{ color: "gray" }}>081232342324</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                marginTop: 4,
                                gap: 4,
                            }}
                        >
                            <MaterialCommunityIcons
                                style={{
                                    color: "red",
                                    marginLeft: -4,
                                }}
                                size={15}
                                name="map-marker"
                            />
                            <Text
                                style={{
                                    color: "gray",
                                }}
                            >
                                Malang, Jawa Timur
                            </Text>
                        </View>
                    </XStack>
                </YStack>

                <YStack backgroundColor={"white"} padding={5} borderRadius={10}>
                    <Image
                        style={{
                            height: 200,
                            width: 170,
                            borderRadius: 10,
                        }}
                        source={images.login}
                    />
                    <XStack
                        flexDirection="column"
                        gap={5}
                        width={170}
                        padding={5}
                    >
                        <H5 fontWeight={700} color={"black"}>
                            Darussalam
                        </H5>

                        <View
                            style={{
                                flexDirection: "row",
                                marginTop: 4,
                                gap: 4,
                            }}
                        >
                            <MaterialCommunityIcons
                                style={{
                                    color: "red",
                                    marginLeft: -4,
                                }}
                                size={15}
                                name="phone"
                            />
                            <Text style={{ color: "gray" }}>081232342324</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                marginTop: 4,
                                gap: 4,
                            }}
                        >
                            <MaterialCommunityIcons
                                style={{
                                    color: "red",
                                    marginLeft: -4,
                                }}
                                size={15}
                                name="map-marker"
                            />
                            <Text
                                style={{
                                    color: "gray",
                                }}
                            >
                                Malang, Jawa Timur
                            </Text>
                        </View>
                    </XStack>
                </YStack>

                <YStack backgroundColor={"white"} padding={5} borderRadius={10}>
                    <Image
                        style={{
                            height: 200,
                            width: 170,
                            borderRadius: 10,
                        }}
                        source={images.login}
                    />
                    <XStack
                        flexDirection="column"
                        gap={5}
                        width={170}
                        padding={5}
                    >
                        <H5 fontWeight={700} color={"black"}>
                            Darussalam
                        </H5>

                        <View
                            style={{
                                flexDirection: "row",
                                marginTop: 4,
                                gap: 4,
                            }}
                        >
                            <MaterialCommunityIcons
                                style={{
                                    color: "red",
                                    marginLeft: -4,
                                }}
                                size={15}
                                name="phone"
                            />
                            <Text style={{ color: "gray" }}>081232342324</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                marginTop: 4,
                                gap: 4,
                            }}
                        >
                            <MaterialCommunityIcons
                                style={{
                                    color: "red",
                                    marginLeft: -4,
                                }}
                                size={15}
                                name="map-marker"
                            />
                            <Text
                                style={{
                                    color: "gray",
                                }}
                            >
                                Malang, Jawa Timur
                            </Text>
                        </View>
                    </XStack>
                </YStack>
            </XStack>
        );
    };

    const homePageView = () => {
        return (
            <>
                <Header />
                <View
                    style={{
                        backgroundColor: "#07C9F0",
                        height: 280,
                        borderBottomRightRadius: 70,
                        borderBottomLeftRadius: 100,
                    }}
                ></View>
                <YStack justifyContent="center" padding={20} marginTop={-280}>
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
                            <Text style={{ color: "white" }}>Welcome</Text>
                            <H3 color={"white"}>Jonathan</H3>
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
                    <XStack
                        paddingVertical={20}
                        gap={50}
                        justifyContent="center"
                    >
                        <YStack gap={5} alignItems="center">
                            <TouchableOpacity onPress={toTravel}>
                                <MaterialCommunityIcons
                                    style={{
                                        padding: 10,
                                        color: "white",
                                        backgroundColor: "#07C9F0",
                                        borderRadius: 15,
                                    }}
                                    size={35}
                                    name="train-car"
                                />
                            </TouchableOpacity>
                            <H6 fontWeight={800}>Travel</H6>
                        </YStack>
                        <YStack gap={5} alignItems="center">
                            <TouchableOpacity onPress={toTrip}>
                                <MaterialCommunityIcons
                                    style={{
                                        padding: 10,
                                        color: "white",
                                        backgroundColor: "#07C9F0",
                                        borderRadius: 15,
                                    }}
                                    size={35}
                                    name="caravan"
                                />
                            </TouchableOpacity>
                            <H6 fontWeight={800}>Trip</H6>
                        </YStack>
                        <YStack gap={5} alignItems="center">
                            <TouchableOpacity>
                                <MaterialCommunityIcons
                                    style={{
                                        padding: 10,
                                        color: "white",
                                        backgroundColor: "#07C9F0",
                                        borderRadius: 15,
                                    }}
                                    size={35}
                                    name="account"
                                />
                            </TouchableOpacity>
                            <H6 fontWeight={800}>Profile</H6>
                        </YStack>
                    </XStack>

                    {/* Trip List */}
                    <View
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 15,
                            backgroundColor: "white",
                            borderRadius: 25,
                            marginVertical: 10,
                        }}
                    >
                        <Image
                            source={images.map}
                            style={{ width: 100, height: 100 }}
                        />
                        <YStack width={200} gap={10} marginTop={-10}>
                            <Text
                                style={{
                                    fontWeight: 800,
                                    fontSize: 16,
                                    lineHeight: 25,
                                }}
                            >
                                discover destinations that spoil the eyes with
                                their natural beauty
                            </Text>
                            <Text style={{ color: "gray" }}>
                                that can only be found in Malang
                            </Text>
                        </YStack>
                    </View>
                    <View style={{ paddingVertical: 10, gap: 10 }}>
                        <H4 marginLeft={5}>Most Popular Destination</H4>
                        <FlatList
                            data={[{}]}
                            renderItem={TripList}
                            horizontal
                        />
                    </View>

                    {/* Travel List */}
                    <View
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 15,
                            backgroundColor: "white",
                            borderRadius: 25,
                            marginVertical: 10,
                        }}
                    >
                        <Image
                            source={images.ticket}
                            style={{ width: 100, height: 100 }}
                        />
                        <YStack width={200} gap={5} marginTop={-10}>
                            <Text
                                style={{
                                    fontWeight: 800,
                                    fontSize: 16,
                                    lineHeight: 25,
                                }}
                            >
                                it's time to find a safe journey with your
                                trusted travel
                            </Text>
                            <Text style={{ color: "gray" }}>
                                discover safe and enjoyable travel
                            </Text>
                        </YStack>
                    </View>
                    <View style={{ paddingVertical: 10, gap: 10 }}>
                        <H4 marginLeft={5}>Most Popular Travel</H4>
                        <FlatList
                            data={[{}]}
                            renderItem={TravelList}
                            horizontal
                        />
                    </View>
                </YStack>
            </>
        );
    };
    return <FlatList data={[{}]} renderItem={homePageView} />;
};

export default Home;
