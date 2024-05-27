import React, { useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Button, H2, H3, H4, H5, H6, Image, XStack, YStack } from "tamagui";
import images from "../../../assets/images";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const TripDetails = () => {
    const [map, setMap] = useState({
        latitude: -7.942965,
        longitude: 112.953186,
        latitudeDelta: 0.4,
        longitudeDelta: 0.8,
    });
    const navigation = useNavigation();
    const backToTrip = () => {
        navigation.navigate("Trip");
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(price);
    };

    const TripDetailPage = () => {
        return (
            <>
                <YStack flex={1} justifyContent="center" alignItems="start">
                    <XStack width="100%">
                        <Image
                            style={{ width: 400, height: 500 }}
                            source={images.bromo}
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
                            <H2 color={"white"}>Bromo Tengger Semeru</H2>
                            <View
                                style={{ flexDirection: "row", marginTop: 10 }}
                            >
                                <MaterialCommunityIcons
                                    style={{
                                        color: "red",
                                        marginLeft: -3,
                                    }}
                                    size={17}
                                    name="map-marker"
                                />
                                <Text
                                    style={{ color: "white", fontWeight: 700 }}
                                >
                                    Cemoro Lawang, Malang, Jawa Timur
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
                            <H5
                                fontWeight={700}
                                borderBottomWidth={1}
                                width={95}
                                paddingBottom={5}
                            >
                                Overview
                            </H5>
                            <Text style={{ lineHeight: 25, marginTop: 10 }}>
                                Gunung Bromo, terletak di Jawa Timur, adalah
                                salah satu destinasi wisata paling terkenal di
                                Indonesia. Gunung berapi aktif ini berada dalam
                                Taman Nasional Bromo Tengger Semeru dan terkenal
                                dengan pemandangan matahari terbitnya yang
                                menakjubkan. Wisatawan sering mengunjungi kawah
                                Bromo, yang dapat dicapai dengan mendaki atau
                                naik kuda. Pemandangan di sekitar Gunung Bromo
                                meliputi lautan pasir yang luas dan latar
                                belakang Gunung Semeru, gunung tertinggi di
                                Jawa. Suhu di kawasan ini cukup dingin, jadi
                                pengunjung disarankan untuk membawa pakaian
                                hangat.
                            </Text>
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <MapView
                                style={{ width: 355, height: 200 }}
                                region={map}
                            >
                                <Marker coordinate={map} title="marker" />
                            </MapView>
                        </View>
                        <View flexDirection={"row"} justifyContent={"space-between"} paddingHorizontal={5} alignItems={"center"}>
                            <View>
                                <View
                                    flexDirection={"row"}
                                    alignItems={"center"}
                                    gap={5}
                                >
                                    <MaterialCommunityIcons
                                        style={{
                                            color: "black",
                                            marginTop: 3,
                                        }}
                                        size={25}
                                        name="cash"
                                    />
                                    <Text
                                        style={{
                                            fontWeight: 800,
                                            fontSize: 18,
                                        }}
                                    >
                                        Rp. 35.000
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
            </>
        );
    };

    return <FlatList data={[{}]} renderItem={TripDetailPage} />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "60%",
    },
});

export default TripDetails;
