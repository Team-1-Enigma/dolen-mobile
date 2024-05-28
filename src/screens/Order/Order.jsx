import React, { useState } from "react";
import { Button, H2, H3, H4, H5, Image, XStack, YStack } from "tamagui";
import images from "../../../../assets/images";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Order = () => {
    const [count, setCount] = useState(2);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);
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
                            <H4>Nama Trip</H4>
                            <View
                                style={{
                                    alignItems: "flex-end",
                                    marginVertical: 5,
                                }}
                            >
                                <H4>Rp. 20.000</H4>
                            </View>
                            <YStack gap={15} marginTop={10}>
                                <View gap={5}>
                                    <H5>Tanggal Berangkat :</H5>
                                    <Text
                                        style={{
                                            fontWeight: 800,
                                            fontSize: 16,
                                        }}
                                    >
                                        2024-07-20
                                    </Text>
                                </View>
                                <View gap={5}>
                                    <H5>Tanggal Kembali :</H5>
                                    <Text
                                        style={{
                                            fontWeight: 800,
                                            fontSize: 16,
                                        }}
                                    >
                                        2024-07-22
                                    </Text>
                                </View>
                            </YStack>
                        </YStack>
                        <YStack marginTop={20}>
                            <H4>Itenary</H4>
                            <YStack
                                gap={5}
                                marginTop={15}
                                borderWidth={1}
                                padding={10}
                                borderRadius={10}
                            >
                                <H5 fontWeight={800}>Day 1</H5>
                                <View style={{ gap: 5 }}>
                                    <Text style={{ fontSize: 16 }}>
                                        09.00 - 10.00
                                    </Text>
                                    <Text style={{ fontSize: 16 }}>
                                        <Text style={{ fontWeight: 800 }}>
                                            Description :
                                        </Text>{" "}
                                        Berenang
                                    </Text>
                                </View>
                            </YStack>
                            <YStack
                                gap={5}
                                marginTop={15}
                                borderWidth={1}
                                padding={10}
                                borderRadius={10}
                            >
                                <H5 fontWeight={800}>Day 2</H5>
                                <View style={{ gap: 5 }}>
                                    <Text style={{ fontSize: 16 }}>
                                        09.00 - 10.00
                                    </Text>
                                    <Text
                                        style={{ fontSize: 16, lineHeight: 30 }}
                                    >
                                        <Text style={{ fontWeight: 800 }}>
                                            Description :
                                        </Text>{" "}
                                        Bakar rumah warga 115ms
                                        C:\Users\Lenovo\Project\enigma-FE\final-project\dolen-mobile\node_modules\expo\AppEntry.js
                                        (1 module)
                                    </Text>
                                </View>
                            </YStack>
                        </YStack>
                    </YStack>
                </YStack>
            </>
        );
    };

    return (
        <>
            <FlatList data={[{}]} renderItem={OrderPage} />
            <XStack                 marginVertical={20}
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
                >
                    Order
                </Button>
            </XStack>
        </>
    );
};

export default Order;