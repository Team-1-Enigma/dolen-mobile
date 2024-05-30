import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import {
    Button,
    H2,
    H3,
    H4,
    H5,
    H6,
    Image,
    View,
    XStack,
    YStack,
} from "tamagui";
import images from "../../../assets/images";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../app/Features/auth/UserSlice";
import { useState } from "react";
import { getTravelDataByUserIdAction } from "../../app/Features/travel/TravelSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const User = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { user, status, error } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(userAction());
        dispatch(getTravelDataByUserIdAction(user.credentialId))
        
      }, [dispatch]);

    const toHomepage = () => {
        navigation.navigate("App");
    };
    const toEditpage = () => {
        navigation.navigate("EditUser");
    };

    const toOrderList = () =>{
        navigation.navigate("MyOrderList", {userId : user.id})
    }

    const toTravelManagement = () =>{
        navigation.navigate("TravelManagement",{userCredential : user.credentialId})
    }
    const UserPage = () => {
        const userData = JSON.stringify(user)
        console.log(`user role ${user.credentialId}`)
        return (
            <>
                <YStack alignItems="start" justifyContent="center" padding={20} marginTop={25}>
                    <XStack
                        marginTop={10}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <H2>Profile</H2>
                    </XStack>
                    <YStack alignItems="center" justifyContent="center">
                        <XStack width="30%" marginTop={10}>
                            <Image
                                style={{
                                    aspectRatio: 1,
                                    width: "100%",
                                    borderRadius: 100,
                                }}
                                source={user.photoUrl  == null? images.profile : user.photoUrl}
                            />
                        </XStack>
                    </YStack>

                    <YStack marginTop={10} alignItems="center" gap={5}>
                        <H3>{user.fullName}</H3>
                        <Text
                            style={{
                                fontSize: 16,
                                color: "grey",
                            }}
                        >
                            {user.email}
                        </Text>
                        <Button
                            marginTop={15}
                            size={"$3"}
                            width={"50%"}
                            onPress={toEditpage}
                            backgroundColor={"#07C9F0"}
                            color={"white"}
                            fontWeight={800}
                            borderRadius={20}
                        >
                            Edit Profile
                        </Button>
                    </YStack>

                    <View
                        style={{
                            borderWidth: 0.5,
                            borderColor: "grey",
                            marginTop: 30,
                        }}
                    ></View>

                    <YStack marginVertical={15} gap={5}>
                        <TouchableOpacity onPress={toOrderList}>
                            <YStack
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <XStack alignItems="center">
                                    <MaterialCommunityIcons
                                        style={{
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={22}
                                        name="clipboard-text-clock"
                                    />
                                    <H5 fontWeight={700}>My Orders</H5>
                                </XStack>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        style={{
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={22}
                                        name="arrow-right"
                                    />
                                </TouchableOpacity>
                            </YStack>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <YStack
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <XStack alignItems="center">
                                    <MaterialCommunityIcons
                                        style={{
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={22}
                                        name="airplane-marker"
                                    />
                                    <H5 fontWeight={700}>My Trip</H5>
                                </XStack>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        style={{
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={22}
                                        name="arrow-right"
                                    />
                                </TouchableOpacity>
                            </YStack>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <YStack
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <XStack alignItems="center">
                                    <MaterialCommunityIcons
                                        style={{
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={22}
                                        name="lock"
                                    />
                                    <H5 fontWeight={700}>Change password</H5>
                                </XStack>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        style={{
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={22}
                                        name="arrow-right"
                                    />
                                </TouchableOpacity>
                            </YStack>
                        </TouchableOpacity>
                        {user.role == "TRAVEL_OWNER" ?(<TouchableOpacity onPress={toTravelManagement}>
                            <YStack
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <XStack alignItems="center">
                                    <MaterialCommunityIcons
                                        style={{
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={22}
                                        name="lock"
                                    />
                                    <H5 fontWeight={700}>Travel Management</H5>
                                </XStack>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        style={{
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={22}
                                        name="arrow-right"
                                    />
                                </TouchableOpacity>
                            </YStack>
                        </TouchableOpacity>) : (<></>)  }
                        
                    </YStack>

                    <View
                        style={{
                            borderWidth: 0.5,
                            borderColor: "grey",
                            marginBottom: 15,
                        }}
                    ></View>
                    <YStack>
                        
                    </YStack>

                    <YStack>
                        <TouchableOpacity>
                            <YStack
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <XStack alignItems="center">
                                    <MaterialCommunityIcons
                                        style={{
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={22}
                                        name="help-circle"
                                    />
                                    <H5 fontWeight={700}>Help & Support</H5>
                                </XStack>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        style={{
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={22}
                                        name="arrow-right"
                                    />
                                </TouchableOpacity>
                            </YStack>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={async() =>{
                                await AsyncStorage.clear();
                                navigation.navigate("login")
                            }}
                        >
                            <YStack
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <XStack alignItems="center">
                                    <MaterialCommunityIcons
                                        style={{
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={22}
                                        name="logout"
                                    />
                                    <H5 fontWeight={700}>Logout</H5>
                                </XStack>
                            </YStack>
                        </TouchableOpacity>
                    </YStack>

                    {/* <TouchableOpacity>
                    <YStack
                        style={{
                            marginTop: 25,
                            borderWidth: 1,
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 8,
                            borderColor: "gray",
                            backgroundColor: "lightgray",
                            shadowOpacity: 10
                        }}
                    >
                        <YStack
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "auto",
                            }}
                        >
                            <XStack width="13%">
                                <Image
                                    style={{
                                        aspectRatio: 1,
                                        width: "100%",
                                        borderRadius: 10,
                                    }}
                                    source={images.bromo1}
                                />
                            </XStack>
                            <H5 fontWeight={700} width={200} paddingHorizontal={10}>My Travel</H5>
                            <MaterialCommunityIcons
                                style={{
                                    padding: 10,
                                    color: "grey",
                                }}
                                size={22}
                                name="arrow-right"
                            />
                        </YStack>
                    </YStack>
                </TouchableOpacity> */}

                    <YStack alignItems="center" marginTop={40}>
                        <H6 style={{ color: "gray" }}>2024 &copy;Copyright</H6>
                        <Text style={{ color: "gray", fontSize: 16 }}>
                            Dolen
                        </Text>
                    </YStack>
                </YStack>
            </>
        );
    };

    return <FlatList data={[{}]} renderItem={UserPage} />;
};

export default User;
