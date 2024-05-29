import { YStack, H4, View } from "tamagui";
import { FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Text } from "tamagui";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTripByTravelIdAction } from "../../app/Features/travel/TravelSlice";

const TravelManagementPage = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const userTravelDetailFromUserId = useSelector((state) => state.travel.travelDetailFromUser);
    const travelId = userTravelDetailFromUserId ? userTravelDetailFromUserId.travelId : null;
    const trips = useSelector((state) => state.trip.tripTravel); // assuming your trips data is stored in this way


    useEffect(() => {
        if (travelId) {
            dispatch(getAllTripByTravelIdAction(userTravelDetailFromUserId.id));
        }
    }, [dispatch, travelId]);
    console.log(trips)
    return (
        <>
            <YStack marginVertical={50}>
                <H4>{userTravelDetailFromUserId.name}</H4>
                <View style={{ borderWidth: 1, borderColor: "lightgray", marginVertical: 5 }}></View>
                <FlatList
                    data={trips}
                    renderItem={({ item }) => <Text>{item.name}</Text>} // adjust with the actual property of your trip object
                    keyExtractor={(item) => item.id.toString()} // adjust with a unique key for your trip object
                />
            </YStack>
        </>
    );
};

export default TravelManagementPage;
