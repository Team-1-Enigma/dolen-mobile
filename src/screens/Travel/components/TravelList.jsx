import {
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { H5, Image, XStack, YStack } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import images from "../../../../assets/images";
import { useNavigation } from "@react-navigation/native";

const TravelList = () => {
    const navigation = useNavigation()
    const toDetails = () => {
        navigation.navigate("TravelDetails")
    }

    return (
        <>
            <YStack marginTop={15}>
                <XStack>
                    <TouchableOpacity onPress={toDetails}>
                        <XStack
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                backgroundColor: "#07C9F0",
                                width: 355,
                                borderRadius: 20,
                            }}
                        >
                            <XStack gap={10}>
                                <Image
                                    style={{
                                        width: 110,
                                        height: 103,
                                        borderTopLeftRadius: 10,
                                        borderBottomLeftRadius: 10,
                                    }}
                                    source={images.bromo}
                                />
                                <XStack
                                    flexDirection="column"
                                    gap={3}
                                    width={170}
                                    paddingVertical={15}
                                    paddingHorizontal={5}
                                >
                                    <H5 fontWeight={700} color={"white"}>
                                        My Favorit Travel
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
                                            Malang
                                        </Text>
                                    </View>
                                </XStack>
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
                </XStack>
            </YStack>
        </>
    );
};

export default TravelList;
