import React, { useEffect } from "react";
import { YStack, XStack, Text } from "tamagui";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getAllParticipantActioon } from "../../app/Features/trip/TripSlice";

const TravelManagementDetail = ({ route }) => {
    const { itemId } = route.params;
    const dispatch = useDispatch();
    const participants = useSelector((state) => state.trip.participant); // Selecting participants from Redux store

    useEffect(() => {
       
        dispatch(getAllParticipantActioon(itemId));
        
    }, [dispatch, itemId]);

    const renderItem = ({ item }) => (
        <XStack
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#F0F0F0",
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: "lightgray",
            }}
        >
            <Text>{item.participantName}</Text>
            <Text>{item.contact}</Text>
        </XStack>
    );

    return (
        <YStack height={"100%"} width={"100%"} padding={10} marginTop={"10%"}>
            <Text fontSize={20} fontWeight={700} marginBottom={10}>
                Participants
            </Text>
            <FlatList
                data={participants} // Use participants data
                renderItem={renderItem}
                keyExtractor={(item) => item.id} // Adjust with a unique key for your item
            />
        </YStack>
    );
};

export default TravelManagementDetail;
