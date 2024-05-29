import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Button, H2, H3, H4, H5, Image, XStack, YStack, Input, Label } from "tamagui";
import images from "../../../assets/images";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { createOrderAction } from "../../app/Features/order/orderSlice";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Order = () => {
    const [count, setCount] = useState(1);
    const [participants, setParticipants] = useState([{ name: "", contact: "" }]);
    const tripDetail = useSelector((state) => state.trip.tripDetail);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [orderId, setOrderId] = useState(null); // State untuk menyimpan orderId
    

    const increment = () => {
        setCount(count + 1);
        setParticipants([...participants, { name: "", contact: "" }]);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
            setParticipants(participants.slice(0, -1));
        }
    };

    const handleParticipantChange = (index, field, value) => {
        const updatedParticipants = participants.map((participant, i) =>
            i === index ? { ...participant, [field]: value } : participant
        );
        setParticipants(updatedParticipants);
    };

    const handleSubmit = async () => {
        const userId = await AsyncStorage.getItem("userId")
        const orderData = {
            quantity: count,
            tripId: "0c73d1e7-f314-4ada-b0fc-3705bae8486f", 
            userId: userId, 
            orderDetailRequests: participants.map((p) => ({
                participantName: p.name,
                contact: p.contact,
            })),
        };

        try {
            dispatch(createOrderAction(orderData));
            
            setTimeout(()=>{

                navigation.navigate("OrderConfirmation"); 
            }, 5000)
        } catch (error) {
            console.error("Failed to create order:", error.message);
        }
    };

    const OrderPage = () => {
        return (
            <>
                <YStack justifyContent="center" padding={20}>
                    <YStack>
                        <H3>Order</H3>
                        <View style={{ marginTop: 20, marginLeft: -20 }}>
                            <Image
                                source={images.bromo}
                                style={{ width: 400, height: 300 }}
                            />
                        </View>
                        <YStack marginTop={20}>
                            <H4>{tripDetail.destination}</H4>
                            <View
                                style={{
                                    alignItems: "flex-end",
                                    marginVertical: 5,
                                }}
                            >
                                <H4>RP. {tripDetail.tripPriceResponse.price}</H4>
                            </View>
                            <YStack gap={15} marginTop={10}>
                                <View gap={5}>
                                    <H5>Departure Date :</H5>
                                    <Text
                                        style={{
                                            fontWeight: 800,
                                            fontSize: 16,
                                        }}
                                    >
                                        {tripDetail.departureDate}
                                    </Text>
                                </View>
                                <View gap={5}>
                                    <H5>Return Date :</H5>
                                    <Text
                                        style={{
                                            fontWeight: 800,
                                            fontSize: 16,
                                        }}
                                    >
                                        {tripDetail.returnDate}
                                    </Text>
                                </View>
                            </YStack>
                        </YStack>
                        <YStack marginTop={20}>
                            <H4>Detail Pemesan</H4>
                            {participants.map((participant, index) => (
                                <YStack
                                    gap={5}
                                    marginTop={15}
                                    borderWidth={1}
                                    padding={10}
                                    borderRadius={10}
                                    key={index}
                                >
                                    <YStack gap={15} marginTop={20}>
                                        <H4>Participant {index + 1}</H4>
                                        <YStack gap={15}>
                                            <YStack>
                                                <Label>Participant Name</Label>
                                                <Input
                                                    value={participant.name}
                                                    onChangeText={(text) =>
                                                        handleParticipantChange(
                                                            index,
                                                            "name",
                                                            text
                                                        )
                                                    }
                                                    borderColor="$borderColor"
                                                    borderWidth={1}
                                                    borderRadius={4}
                                                    padding={10}
                                                />
                                            </YStack>
                                            <YStack>
                                                <Label>Participant contact</Label>
                                                <Input
                                                    value={participant.contact}
                                                    onChangeText={(text) =>
                                                        handleParticipantChange(
                                                            index,
                                                            "contact",
                                                            text
                                                        )
                                                    }
                                                    borderColor="$borderColor"
                                                    borderWidth={1}
                                                    borderRadius={4}
                                                    padding={10}
                                                />
                                            </YStack>
                                        </YStack>
                                    </YStack>
                                </YStack>
                            ))}
                        </YStack>
                    </YStack>
                </YStack>
            </>
        );
    };

    return (
        <>
            <FlatList data={[{}]} renderItem={OrderPage} />
            <XStack
                marginVertical={20}
                alignItems="center"
                justifyContent="space-between"
                paddingHorizontal={20}
            >
                <TouchableOpacity onPress={decrement}>
                    <MaterialCommunityIcons
                        style={{
                            padding: 10,
                            color: "white",
                            backgroundColor: "#07C9F0",
                            borderRadius: 20,
                        }}
                        size={17}
                        name="minus"
                    />
                </TouchableOpacity>
                <H2>{count}</H2>
                <TouchableOpacity onPress={increment}>
                    <MaterialCommunityIcons
                        style={{
                            padding: 10,
                            color: "white",
                            backgroundColor: "#07C9F0",
                            borderRadius: 20,
                        }}
                        size={17}
                        name="plus"
                    />
                </TouchableOpacity>
                <Button
                    backgroundColor={"#07C9F0"}
                    color="white"
                    style={{ width: "45%", fontSize: 18 }}
                    onPress={handleSubmit}
                >
                    Order
                </Button>
            </XStack>
        </>
    );
};

export default Order;
