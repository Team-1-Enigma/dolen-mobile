import React, { useEffect } from "react";
import { YStack, XStack, H4, View, Image, H5, Text } from "tamagui";
import { FlatList, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { getAllTripByTravelIdAction } from "../../app/Features/trip/TripSlice";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const TravelManagementPage = () => {
    const route = useRoute();
    const navigation = useNavigation(); // useNavigation should be used here
    const dispatch = useDispatch();
    const userTravelDetailFromUserId = useSelector((state) => state.travel.travelDetailFromUser);
    const trips = useSelector((state) => state.trip.tripTravel); // assuming your trips data is stored in this way

    useEffect(() => {
        if (userTravelDetailFromUserId) {
            dispatch(getAllTripByTravelIdAction(userTravelDetailFromUserId.id));
        }
    }, [dispatch, userTravelDetailFromUserId]);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("TravelManagementDetail", { itemId: item.id })}>
            <XStack
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#07C9F0",
                    width: 355,
                    borderRadius: 20,
                    marginTop: 15,
                    padding: 10,
                }}
            >
                <Image
                    style={{
                        width: 110,
                        height: 103,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                    }}
                    source={{ uri: item.imageTripResponseList[0].imageUrl }}
                />
                <XStack
                    flexDirection="column"
                    width={170}
                    paddingVertical={15}
                    paddingHorizontal={5}
                >
                    <H5 fontWeight={700} color={"white"}>
                        {item.destination}
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
                            {item.locationDTO.city}, {item.locationDTO.province}
                        </Text>
                    </View>
                </XStack>
                <MaterialCommunityIcons
                    style={{
                        position: "absolute",
                        right: 0,
                        top: 65,
                        paddingVertical: 8,
                        paddingHorizontal: 15,
                        backgroundColor: "white",
                        color: "#07C9F0",
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                    }}
                    size={22}
                    name="arrow-right"
                />
            </XStack>
        </TouchableOpacity>
    );

    return (
        <YStack marginVertical={50}>
            <H4>{userTravelDetailFromUserId ? userTravelDetailFromUserId.name : ''}</H4>
            <View style={{ borderColor: "lightgray", marginVertical: 5, justifyContent:'center', alignItems:'center'}}>
                <FlatList
                    data={trips}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </YStack>
    );
};

export default TravelManagementPage;
