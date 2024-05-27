import {
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { H3, H4, H5, H6, Image, Input, XStack, YStack } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import images from "../../../assets/images";
import { useNavigation } from "@react-navigation/native";
import TravelList from "./components/TravelList";

const Travel = () => {
    const navigation = useNavigation();
    const toHomepage = () => {
        navigation.navigate("App");
    };
    const TravelPage = () => {
        return (
            <>
                <YStack
                    flex={1}
                    justifyContent="center"
                    alignItems="start"
                    padding={20}
                    width={"100%"}
                >
                    <XStack
                        width={"100%"}
                        justifyContent="space-between"
                        alignItems="center"
                        paddingBottom={15}
                        marginTop={-15}
                    >
                        <XStack alignItems="center" gap={10}>
                            <TouchableOpacity>
                                <MaterialCommunityIcons
                                    style={{
                                        color: "black",
                                        marginTop: 3
                                    }}
                                    size={23}
                                    name="arrow-left"
                                    onPress={toHomepage}
                                />
                            </TouchableOpacity>
                            <H5 fontWeight={800}>Travel</H5>
                        </XStack>

                        {/* <Image
                            style={{
                                aspectRatio: 1,
                                width: "11%",
                                borderRadius: 100,
                            }}
                            source={images.login}
                        /> */}
                    </XStack>

                    <YStack>
                        <H3>Travel List</H3>
                        <H5 color={"gray"}>Choose your favorite travel</H5>
                        <YStack
                            width={"100%"}
                            marginTop={10}
                            borderWidth={1}
                            borderRadius={10}
                            paddingVertical={5}
                            borderColor={"gray"}
                        >
                            <TextInput
                                size={20}
                                placeholder={`Search`}
                                style={{
                                    paddingLeft: 35,
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
                    </YStack>

                    <YStack marginVertical={15}>
                        <XStack width="100%">
                            <Image
                                style={{
                                    width: "100%",
                                    height: 200,
                                    borderRadius: 25,
                                }}
                                source={images.suitcase}
                            />
                        </XStack>
                    </YStack>

                    <XStack margin="auto" marginTop={-40}>
                        <YStack
                            backgroundColor={"#07C9F0"}
                            opacity={0.9}
                            style={{
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                                borderRadius: 20,
                                width: 300,
                            }}
                        >
                            <H5
                                textAlign="center"
                                color={"white"}
                                fontWeight={800}
                            >
                                Choose your favorite travel
                            </H5>
                        </YStack>
                    </XStack>

                    <YStack marginVertical={20}>
                        <H4>Recommended</H4>
                        <View style={{ borderWidth: 1, borderColor: "lightgray", marginVertical: 5 }}></View>
                        <TravelList />
                        <TravelList />
                        <TravelList />
                        <TravelList />
                        <TravelList />
                    </YStack>
                </YStack>
            </>
        );
    };

    return <FlatList data={[{}]} renderItem={TravelPage} />;
};

export default Travel;
