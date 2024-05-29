import React, { useState, useEffect } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
} from "react-native";
import { Button, H2, H3, H4, H5, H6, Image, XStack, YStack } from "tamagui";
import images from "../../../assets/images";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { useSelector, useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { getTripDetailAction } from "../../app/Features/trip/TripSlice";
import { fetchTravelById } from "../../app/Features/travel/TravelSlice";


const TripItinerary = ({tripDetail})=>{
    console.log(tripDetail)
    const startDateTime = tripDetail.itineraryDetailDTOList[0].startTime;
    const startTime = startDateTime.split("T")[1];
    const endDateTime = tripDetail.itineraryDetailDTOList[0].startTime;
    const endTime = endDateTime.split("T")[1];
    return(
        <>
            <H5
                fontWeight={700}
                width={95}
                paddingBottom={5}
            >
                Day {tripDetail.dayNumber}
            </H5>
            <Text>{startTime} - {endTime} : {tripDetail.itineraryDetailDTOList[0].activityDesc}</Text>
           
        </>
    )
}

const TripDetails = () => {
    const [map, setMap] = useState({
        latitude: -7.942965,
        longitude: 112.953186,
        latitudeDelta: 0.4,
        longitudeDelta: 0.8,
    });
    const [loading, setLoading] = useState(true); // State for loading status
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();
    const { tripId } = route.params;
    const tripDetail = useSelector((state) => state.trip.tripDetail);
    const travelDetail = useSelector((state) => state.travel.travelDetail);
 

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Set loading state to true
            await dispatch(getTripDetailAction(tripId));
            setLoading(false); // Set loading state to false after data is fetched
        };

        fetchData();
    }, [dispatch, tripId]);

    const backToTrip = () => {
        navigation.navigate("Trip");
    };

    // Conditionally render content based on loading state and data availability
    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (!tripDetail) {
        return (
            <View style={styles.container}>
                <Text>Data tidak tersedia</Text>
            </View>
        );
    }

    const TripDetailPage = () => {
        return (
            <YStack flex={1} justifyContent="center" alignItems="start">
                <XStack width="100%">
                    <Image
                        style={{ width: 400, height: 500 }}
                        source={{ uri: tripDetail.imageTripResponseList[0].imageUrl }}
                    />
                </XStack>

                <TouchableOpacity>
                    <MaterialCommunityIcons
                        style={{
                            color: "white",
                            marginLeft: -4,
                            marginTop: -480,
                            marginLeft: 20,
                        }}
                        size={25}
                        name="arrow-left"
                        onPress={backToTrip}
                    />
                </TouchableOpacity>

                <YStack
                    style={{
                        padding: 20,
                        borderWidth: 1,
                        borderColor: "white",
                        width: 300,
                    }}
                >
                    <View marginTop={-180}>
                        <H2 color={"white"}>{tripDetail.destination}</H2>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <MaterialCommunityIcons
                                style={{
                                    color: "red",
                                    marginLeft: -3,
                                }}
                                size={17}
                                name="map-marker"
                            />
                            <Text style={{ color: "white", fontWeight: 700 }}>
                               {tripDetail.locationDTO.city}, {tripDetail.locationDTO.province}
                            </Text>
                        </View>
                    </View>
                </YStack>
                
                <YStack
                    borderTopLeftRadius={30}
                    borderTopRightRadius={30}
                    backgroundColor={"#e8eaed"}
                    marginTop={-80}
                    width={400}
                    paddingVertical={25}
                    paddingHorizontal={20}
                    gap={10}
                >
                    <View>
                        <XStack>
                            <H3>{tripDetail.travelDTO.name}</H3>
                        </XStack>
                        <H5
                            fontWeight={700}
                            borderBottomWidth={1}
                            width={95}
                            paddingBottom={5}
                        >
                            Overview
                        </H5>
                        <Text style={{ lineHeight: 25, marginTop: 10 }}>
                            Trip Start Date : {tripDetail.departureDate}
                        </Text>
                        <Text style={{ lineHeight: 25, marginTop: 10 }}>
                            Trip End Date : {tripDetail.returnDate}
                        </Text>
                        <Text style={{ lineHeight: 25, marginTop: 10 }}>
                            Quota Avaliable : {tripDetail.tripPriceResponse.quota}
                        </Text>
                    </View>
                    <View>
                        <XStack>
                            <H3>Itinerary</H3>
                        </XStack>
                        <FlatList
                            data={tripDetail.itineraryDTOList}
                            renderItem={({ item }) => <TripItinerary tripDetail={item} />}
                        />
                    </View>
                    
                    <View flexDirection={"row"} justifyContent={"space-between"} paddingHorizontal={5} alignItems={"center"}>
                        <View>
                            <View flexDirection={"row"} alignItems={"center"} gap={5}>
                                <MaterialCommunityIcons
                                    style={{
                                        color: "black",
                                        marginTop: 3,
                                    }}
                                    size={25}
                                    name="cash"
                                />
                                <Text style={{ fontWeight: 800, fontSize: 18 }}>
                                    {tripDetail.tripPriceResponse.price}
                                </Text>
                            </View>
                            <Text>One time entry</Text>
                        </View>
                        <Button backgroundColor={"#07C9F0"} color={"white"} paddingHorizontal={35}>
                            Order
                        </Button>
                    </View>
                </YStack>
            </YStack>
        );
    };

    return <FlatList data={[{}]} renderItem={TripDetailPage} />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    map: {
        width: "100%",
        height: "60%",
    },
});

export default TripDetails;
