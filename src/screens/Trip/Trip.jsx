import React from "react";
import {
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { H3, H4, H5, Image, XStack, YStack, Button } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import images from "../../../assets/images";
import TripList from "./components/TripList";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTripAction } from "../../app/Features/trip/TripSlice";
import { useSelector } from "react-redux";

const Trip = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const trips = useSelector((state) => state.trip.trips);

    const backToHome = () => {
        navigation.navigate("App")
    }

    const createTrip = () => {
        navigation.navigate("CreateTrip")
    }

    const toHomepage = () => {
        navigation.navigate("App")
    }

    useEffect(() =>{
        dispatch(getAllTripAction())
    }, [dispatch])
    const TripPage = () => {
        return (
            <>
                <Header />
                <YStack justifyContent="center" alignItems="start" padding={15}>
                    <XStack
                        width={"100%"}
                        justifyContent="space-between"
                        alignItems="center"
                        paddingBottom={15}
                    >
                        <XStack alignItems="center" gap={10}>
                            <TouchableOpacity onPress={toHomepage}>
                                <MaterialCommunityIcons
                                    style={{
                                        color: "black",
                                        marginTop: 3,
                                    }}
                                    size={22}
                                    name="arrow-left"
                                />
                            </TouchableOpacity>
                            <H4>Trip</H4>
                        </XStack>

                        {/* <Image
                        style={{
                            aspectRatio: 1,
                            width: "10%",
                            borderRadius: 100,
                        }}
                        source={images.login}
                    /> */}

                        <TouchableOpacity>
                            <Button backgroundColor={"#07C9F0"} color={"white"} onPress={createTrip}>
                                <MaterialCommunityIcons
                                    style={{
                                        color: "white",
                                        marginTop: 3,
                                    }}
                                    size={22}
                                    name="plus"
                                />
                            </Button>
                        </TouchableOpacity>
                    </XStack>

                    <YStack marginTop={10}>
                        <YStack
                            width={"100%"}
                            borderWidth={1}
                            borderRadius={10}
                            paddingVertical={5}
                            borderColor={"gray"}
                        >
                            <TextInput
                                size={20}
                                placeholder={`Search`}
                                style={{
                                    paddingLeft: 40,
                                    paddingVertical: 1,
                                }}
                            />
                            <TouchableOpacity>
                                <MaterialCommunityIcons
                                    style={{
                                        marginTop: -33,
                                        position: "absolute",
                                        padding: 10,
                                        color: "grey",
                                    }}
                                    size={20}
                                    name="magnify"
                                />
                            </TouchableOpacity>
                        </YStack>

                        <H5 fontWeight={800} marginBottom={10} marginTop={20}>
                            Choose your favorite trip
                        </H5>
                        <XStack
                            marginBottom={20}
                            justifyContent="space-between"
                            gap={5}
                        >
                            <YStack
                                backgroundColor={"white"}
                                padding={5}
                                borderRadius={10}
                            >
                                <Image
                                    style={{
                                        height: 200,
                                        width: 170,
                                        borderRadius: 10,
                                    }}
                                    source={images.bromo}
                                />
                                <XStack
                                    flexDirection="column"
                                    gap={5}
                                    width={170}
                                    padding={5}
                                >
                                    <H5 fontWeight={700} color={"black"}>
                                        Bromo Tengger Semeru
                                    </H5>
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
                                        <Text
                                            style={{
                                                color: "black",
                                                marginTop: 1,
                                            }}
                                        >
                                            Malang, Jawa Timur
                                        </Text>
                                    </View>
                                </XStack>
                            </YStack>

                            <YStack
                                backgroundColor={"white"}
                                padding={5}
                                borderRadius={10}
                            >
                                <Image
                                    style={{
                                        height: 200,
                                        width: 170,
                                        borderRadius: 10,
                                    }}
                                    source={images.bromo1}
                                />
                                <XStack
                                    flexDirection="column"
                                    gap={5}
                                    width={170}
                                    padding={5}
                                >
                                    <H5 fontWeight={700} color={"black"}>
                                        Bromo Tengger Semeru
                                    </H5>
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
                                        <Text style={{ color: "black" }}>
                                            Malang, Jawa Timur
                                        </Text>
                                    </View>
                                </XStack>
                            </YStack>
                        </XStack>

                        <View flexDirection={"row"}>
                            <H4>Available Open Trips</H4>
                            <View
                                borderWidth={0.5}
                                width={190}
                                height={0.5}
                                marginTop={16}
                                marginLeft={10}
                            ></View>
                        </View>
                        <FlatList
                            data = {trips}
                            renderItem={({item}) => <TripList item={item}/>}
                        />
                        
                    </YStack>
                </YStack>
            </>
        );
    };

    return <FlatList data={[{}]} renderItem={TripPage} />;
};

export default Trip;
