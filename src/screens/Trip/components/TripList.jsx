import React from "react";
import { Text } from "react-native";
import { H4, H5, Image, View, XStack, YStack } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import images from "../../../../assets/images";

const TripList = () => {
    return (
        <>
            <YStack
                backgroundColor={"white"}
                padding={10}
                borderRadius={10}
                marginTop={15}
            >
                <Image
                    style={{
                        height: 200,
                        width: 345,
                        borderRadius: 10,
                    }}
                    source={images.balaikambang}
                />
                <XStack
                    flexDirection="column"
                    gap={5}
                    width={330}
                    paddingHorizontal={5}
                    paddingVertical={10}
                >
                    <H4 fontWeight={700} color={"black"}>
                        Balaikambang Beach
                    </H4>
                    <Text style={{ lineHeight: 20, color: "gray" }}>
                        Balekambang Beach in Malang, East Java, is famous for
                        its natural beauty and temple on a rock in the middle of
                        the sea.
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
                        <Text style={{ color: "black", fontWeight: 700 }}>
                            Bantur, Kabupaten Malang, Jawa Timur
                        </Text>
                    </View>
                </XStack>
            </YStack>
        </>
    );
};

export default TripList;
