import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { Button, H3, H5, Image, XStack, YStack } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchTravelById } from "../../app/Features/travel/TravelSlice";
import { getAllTripByTravelIdAction } from "../../app/Features/trip/TripSlice";
import TravelReview from "./components/TravelReview";

const TravelDetails = () => {
  const [showMenu, setShowMenu] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const travelDetail = useSelector((state) => state.travel.travelDetail);
  const travelTrips = useSelector((state) => state.trip.tripTravel);
  const loading = useSelector((state) => state.travel.loading);
  const error = useSelector((state) => state.travel.error);

  const route = useRoute();
  const { travelId } = route.params;

  useEffect(() => {
    dispatch(fetchTravelById(travelId));
    dispatch(getAllTripByTravelIdAction(travelId));
  }, [dispatch, travelId]);

  const toTravelList = () => {
    navigation.navigate("Travel");
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (!travelDetail) {
    return <Text>No travel detail found.</Text>;
  }

  const ListTripOrderItem = ({ item }) => {
    return (
      <YStack marginTop={15}>
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
              source={{ uri: item.imageTripResponseList[0].imageUrl }}
            />
            <XStack
              flexDirection="column"
              gap={3}
              width={170}
              paddingVertical={15}
              paddingHorizontal={5}
            >
              <H5 fontWeight={700} color={"white"}>
                {item.destination}
              </H5>
              <View style={{ flexDirection: "row", marginTop: 4 }}>
                <MaterialCommunityIcons
                  style={{ color: "red", marginLeft: -4 }}
                  size={17}
                  name="map-marker"
                />
                <Text style={{ color: "white" }}>{item.locationDTO.city}</Text>
              </View>
            </XStack>
          </XStack>
          <MaterialCommunityIcons
            style={{
              position: "absolute",
              right: 0,
              top: 60,
              padding: 10,
              backgroundColor: "white",
              color: "#07C9F0",
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 20,
            }}
            size={22}
            name="arrow-right"
          />
        </XStack>
      </YStack>
    );
  };

  const ListTripOrder = () => {
    return (
      <>
        <YStack paddingVertical={10} marginLeft={5}>
          <H3>({travelTrips.length}) Trip available</H3>
          <Text style={{ color: "gray" }}>Total Trip Available...</Text>
        </YStack>
        <FlatList
          data={travelTrips}
          renderItem={({ item }) => <ListTripOrderItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </>
    );
  };

  const Review = () => {
    return (
      <View>
        <YStack paddingVertical={10} marginLeft={5}>
          <H3>2 Reviews</H3>
          <Text style={{ color: "gray" }}>Ask travelers to you...</Text>
        </YStack>
        <TravelReview />
      </View>
    );
  };

  const TravelDetailPage = () => {
    return (
      <YStack justifyContent="center" alignItems="start" padding={20}>
        <XStack
          width={"100%"}
          justifyContent="space-between"
          alignItems="center"
          paddingVertical={15}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons
              style={{ color: "black" }}
              size={25}
              name="arrow-left"
              onPress={toTravelList}
            />
          </TouchableOpacity>
        </XStack>

        <YStack alignItems="center" justifyContent="center">
          <XStack width="30%" marginTop={10}>
            <Image
              style={{ aspectRatio: 1, width: "100%", borderRadius: 100 }}
              source={{ uri: travelDetail.imageTravelResponseList[0].imageUrl }}
            />
          </XStack>
        </YStack>

        <YStack marginTop={10} alignItems="center" gap={5}>
          <XStack alignItems="center" gap={5}>
            <H3>{travelDetail.name}</H3>
          </XStack>
          <Text>{travelDetail.contactInfo}</Text>
          <Text>{travelDetail.address}</Text>
        </YStack>

        <View
          style={{
            borderWidth: 1,
            borderColor: "gray",
            marginTop: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 5,
          }}
        >
          <Button onPress={() => setShowMenu(true)}>
            <MaterialCommunityIcons
              style={{ color: "black" }}
              size={25}
              name="clipboard-list-outline"
            />
            List Trip
          </Button>
          <Text style={{ fontSize: 35, marginTop: -7, color: "gray" }}>|</Text>
          <Button onPress={() => setShowMenu(false)}>
            <MaterialCommunityIcons
              style={{ color: "black" }}
              size={25}
              name="account-details-outline"
            />
            Review
          </Button>
        </View>

        {showMenu ? (
          <ListTripOrder />
        ) : (
          <Review />
        )}
      </YStack>
    );
  };

  return <TravelDetailPage />;
};

export default TravelDetails;
