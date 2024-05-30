import {
    FlatList,
    Text,
    TouchableOpacity,
    TextInput,
    View,
    Pressable,
    Platform,
    ScrollView,
    Image,
} from "react-native";
import {
    H3,
    H4,
    H5,
    Input,
    XStack,
    YStack,
    Button,
    // Image,
    Label,
} from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";

const createTripSchema = yup
    .object({
        openTripName: yup.string().required("Opentrip name is required"),
        departureDate: yup
            .string()
            .transform(function (value, originalValue) {
                if (this.isType(value)) {
                    return value;
                }
                const parsedDate = parse(
                    originalValue,
                    "dd.MM.yyyy",
                    new Date()
                );

                const formattedDate = format(parsedDate, "yyyy-MM-dd");
                return formattedDate;
            })
            .required()
            .matches(
                /^\d{4}-\d{2}-\d{2}$/,
                "Date must be in the format yyyy-MM-dd"
            ),
        returnDate: yup
            .string()
            .transform(function (value, originalValue) {
                if (this.isType(value)) {
                    return value;
                }
                const parsedDate = parse(
                    originalValue,
                    "dd.MM.yyyy",
                    new Date()
                );

                const formattedDate = format(parsedDate, "yyyy-MM-dd");
                return formattedDate;
            })
            .required()
            .matches(
                /^\d{4}-\d{2}-\d{2}$/,
                "Date must be in the format yyyy-MM-dd"
            ),
        // location
        destination: yup.string().required("Destination is a required"),
        city: yup.string().required("City is a required"),
        province: yup.string().required("Province is a required"),
        // price
        price: yup
            .number()
            .test("is-decimal", "invalid decimal", (value) =>
                (value + "").match(/^\d{1,3}(?:\.\d{3})*(?:,00)?$/)
            )
            .required("Price is required"),
        quota: yup.number().required("Quota is required"),
        description: yup.string().required(),
    })
    .required();

const CreateTrip = () => {
    const [departureDate, setDepartureDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [showDeparturePicker, setShowDeparturePicker] = useState(false);
    const [showReturnPicker, setShowReturnPicker] = useState(false);
    const [formattedDepartureDate, setFormattedDepartureDate] = useState("");
    const [formattedReturnDate, setFormattedReturnDate] = useState("");
    const today = new Date().toISOString().split("T")[0];
    // image
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [image, setImage] = useState("");

    const [itineraries, setItineraries] = useState([
        { day: 1, activities: [{ time: "", description: "" }] },
    ]);
    const [showItenary, setShowItenary] = useState(true);
    const addMoreActions = (dayIndex) => {
        const updatedItineraries = itineraries.map((itinerary, index) => {
            if (index === dayIndex) {
                return {
                    ...itinerary,
                    activities: [
                        ...itinerary.activities,
                        { time: "", description: "" },
                    ],
                };
            }
            return itinerary;
        });
        setItineraries(updatedItineraries);
    };

    const addMoreDay = () => {
        const newDay = itineraries.length + 1;
        const newDayData = itineraries[0]; // Copying the structure of Day 1
        setItineraries([
            ...itineraries,
            { day: newDay, activities: [...newDayData.activities] },
        ]);
    };

    const onSubmit = (data) => {
        console.log("dddd")
        const formData = {
            departureDate: formattedDepartureDate,
            returnDate: formattedReturnDate,
            itineraryDTOList : itineraries
            // Tambahkan nilai inputan lainnya di sini sesuai kebutuhan
        };
        console.log("Form Data: ", data)
    };

    const toggleItenary = () => {
        setShowItenary((prevState) => !prevState);
    };

    useEffect(() => {
        (async () => {
            const galleryStatus =
                await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === "granted");
        })();
    }, []);

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                multiple: true,
            });

            console.log("Image Picker Result:", result);

            if (!result.canceled) {
                // setImage(result.assets[0].uri)
                if (result.assets.length > 0) {
                    let selectedImages = [];
                    result.assets.forEach((asset) => {
                        console.log("Selected Image URI: ", asset.uri);
                        selectedImages.push(asset.uri);
                    });

                    setImage(selectedImages);
                } else {
                    console.log("No images selected");
                }
            } else {
                console.log("Image picking cancelled");
            }
        } catch (e) {
            console.error("Error picking image:", e);
        }
    };

    const handleImageError = (error) => {
        console.error("Failed to load image", error);
    };

    if (hasGalleryPermission === false) {
        return <Text>No access to Internal Storage</Text>;
    }

    // date format
    const formatDate = (dates) => {
        let date = new Date(dates);

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        return `${year}-${month}-${day}`;
    };

    const toggleDatePicker = (type) => {
        if (type === "departure") {
            setShowDeparturePicker(!showDeparturePicker);
        } else if (type === "return") {
            setShowReturnPicker(!showReturnPicker);
        }
    };

    const handleDateChange = (event, selectedDate, type) => {
        if (selectedDate) {
            if (type === "departure") {
                setDepartureDate(selectedDate);
                setFormattedDepartureDate(formatDate(selectedDate));
                if (Platform.OS === "android") {
                    setShowDeparturePicker(false);
                }
            } else if (type === "return") {
                setReturnDate(selectedDate);
                setFormattedReturnDate(formatDate(selectedDate));
                if (Platform.OS === "android") {
                    setShowReturnPicker(false);
                }
            }
        } else {
            if (type === "departure") {
                setShowDeparturePicker(false);
            } else if (type === "return") {
                setShowReturnPicker(false);
            }
        }
    };

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            openTripName: "",
            departureDate: "",
            returnDate: "",
            destination: "",
            city: "",
            province: "",
            price: "",
            quota: "",
        },
        resolver: yupResolver(createTripSchema),
    });
    const CreateTripPage = () => {
        return (
            <>
                <YStack flex={1} justifyContent="center" padding={20}>
                    <YStack>
                        <H5 lineHeight={30}>
                            Fill All form below correctly to create your Open
                            Trip
                        </H5>
                        <YStack>
                            <YStack width={"100%"} marginTop={10}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <Input
                                            size={16}
                                            placeholder={`Opentrip name`}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            style={{
                                                position: "relative",
                                                paddingLeft: 35,
                                                backgroundColor: "white",
                                            }}
                                        />
                                    )}
                                    name="openTripName"
                                />
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        style={{
                                            position: "absolute",
                                            marginTop: -40,
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={17}
                                        name="clipboard-account"
                                    />
                                </TouchableOpacity>
                            </YStack>
                            <YStack width={"100%"} marginTop={10}>
                                <View
                                    style={{
                                        backgroundColor: "white",
                                        paddingVertical: 8,
                                        borderRadius: 10,
                                        borderWidth: 0.3,
                                        borderColor: "gray",
                                    }}
                                >
                                    {showDeparturePicker && (
                                        <DateTimePicker
                                            mode="date"
                                            display="spinner"
                                            value={departureDate}
                                            onChange={(event, selectedDate) =>
                                                handleDateChange(
                                                    event,
                                                    selectedDate,
                                                    "departure"
                                                )
                                            }
                                            minimumDate={new Date(today)}
                                        />
                                    )}
                                    {!showDeparturePicker && (
                                        <Pressable
                                            onPress={() =>
                                                toggleDatePicker("departure")
                                            }
                                        >
                                            <TextInput
                                                placeholder="Departure Date (2024-08-23)"
                                                value={formattedDepartureDate}
                                                onChangeText={
                                                    setFormattedDepartureDate
                                                }
                                                style={{
                                                    position: "relative",
                                                    paddingLeft: 35,
                                                    color: "black",
                                                }}
                                                editable={false}
                                            />
                                        </Pressable>
                                    )}
                                </View>
                                <TouchableOpacity
                                    onPress={() =>
                                        toggleDatePicker("departure")
                                    }
                                >
                                    <MaterialCommunityIcons
                                        style={{
                                            position: "absolute",
                                            marginTop: -40,
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={17}
                                        name="calendar-blank"
                                    />
                                </TouchableOpacity>
                            </YStack>
                            <YStack width={"100%"} marginTop={10}>
                                <View
                                    style={{
                                        backgroundColor: "white",
                                        paddingVertical: 8,
                                        borderRadius: 10,
                                        borderWidth: 0.3,
                                        borderColor: "gray",
                                    }}
                                >
                                    {showReturnPicker && (
                                        <DateTimePicker
                                            mode="date"
                                            display="spinner"
                                            value={returnDate}
                                            onChange={(event, selectedDate) =>
                                                handleDateChange(
                                                    event,
                                                    selectedDate,
                                                    "return"
                                                )
                                            }
                                            minimumDate={new Date(today)}
                                        />
                                    )}
                                    {!showReturnPicker && (
                                        <Pressable
                                            onPress={() =>
                                                toggleDatePicker("return")
                                            }
                                        >
                                            <TextInput
                                                placeholder="Return Date (2024-08-23)"
                                                value={formattedReturnDate}
                                                onChangeText={
                                                    setFormattedReturnDate
                                                }
                                                style={{
                                                    position: "relative",
                                                    paddingLeft: 35,
                                                    color: "black",
                                                }}
                                                editable={false}
                                            />
                                        </Pressable>
                                    )}
                                </View>
                                <TouchableOpacity
                                    onPress={() => toggleDatePicker("return")}
                                >
                                    <MaterialCommunityIcons
                                        style={{
                                            position: "absolute",
                                            marginTop: -40,
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={17}
                                        name="calendar-blank"
                                    />
                                </TouchableOpacity>
                            </YStack>
                        </YStack>

                        <YStack marginTop={20}>
                            <H4 marginLeft={2}>Location</H4>
                            <YStack width={"100%"} marginTop={10}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <Input
                                            size={16}
                                            placeholder={`Destination`}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            style={{
                                                position: "relative",
                                                paddingLeft: 35,
                                                backgroundColor: "white",
                                            }}
                                        />
                                    )}
                                    name="destination"
                                />
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        style={{
                                            position: "absolute",
                                            marginTop: -40,
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={17}
                                        name="map-legend"
                                    />
                                </TouchableOpacity>
                                {/* {errors.email && (
                                    <Text marginTop={1} color={"red"}>
                                        {errors.email.message}
                                    </Text>
                                )} */}
                            </YStack>
                            <YStack width={"100%"} marginTop={10}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <Input
                                            size={16}
                                            placeholder={`City`}
                                            onBlur={onBlur}
                                            onChangeText={(value) => onChange(value)}
                                            value={value}
                                            style={{
                                                position: "relative",
                                                paddingLeft: 35,
                                                backgroundColor: "white",
                                            }}
                                        />
                                    )}
                                    name="city"
                                />
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        style={{
                                            position: "absolute",
                                            marginTop: -40,
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={17}
                                        name="city"
                                    />
                                </TouchableOpacity>
                                {/* {errors.email && (
                                    <Text marginTop={1} color={"red"}>
                                        {errors.email.message}
                                    </Text>
                                )} */}
                            </YStack>
                            <YStack width={"100%"} marginTop={10}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <Input
                                            size={16}
                                            placeholder={`Province`}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            style={{
                                                position: "relative",
                                                paddingLeft: 35,
                                                backgroundColor: "white",
                                            }}
                                        />
                                    )}
                                    name="province"
                                />
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        style={{
                                            position: "absolute",
                                            marginTop: -40,
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={17}
                                        name="home-city"
                                    />
                                </TouchableOpacity>
                                {/* {errors.email && (
                                    <Text marginTop={1} color={"red"}>
                                        {errors.email.message}
                                    </Text>
                                )} */}
                            </YStack>
                        </YStack>

                        <YStack marginTop={20}>
                            <H4 marginLeft={2}>Price</H4>
                            <YStack width={"100%"} marginTop={10}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <Input
                                            size={16}
                                            placeholder={`Price`}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            style={{
                                                position: "relative",
                                                paddingLeft: 35,
                                                backgroundColor: "white",
                                            }}
                                        />
                                    )}
                                    name="price"
                                />
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        style={{
                                            position: "absolute",
                                            marginTop: -40,
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={17}
                                        name="cash"
                                    />
                                </TouchableOpacity>
                                {/* {errors.email && (
                                    <Text marginTop={1} color={"red"}>
                                        {errors.email.message}
                                    </Text>
                                )} */}
                            </YStack>
                            <YStack width={"100%"} marginTop={10}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <Input
                                            size={16}
                                            placeholder={`Quota`}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            style={{
                                                position: "relative",
                                                paddingLeft: 35,
                                                backgroundColor: "white",
                                            }}
                                        />
                                    )}
                                    name="quota"
                                />
                                <TouchableOpacity>
                                    <MaterialCommunityIcons
                                        style={{
                                            position: "absolute",
                                            marginTop: -40,
                                            padding: 10,
                                            color: "grey",
                                        }}
                                        size={17}
                                        name="account-multiple"
                                    />
                                </TouchableOpacity>
                                {/* {errors.email && (
                                    <Text marginTop={1} color={"red"}>
                                        {errors.email.message}
                                    </Text>
                                )} */}
                            </YStack>
                        </YStack>

                        <YStack marginTop={20}>
                            <H4>Photos</H4>
                            <View style={{ flex: 1, justifyContent: "center" }}>
                                <Button
                                    backgroundColor={"#07C9F0"}
                                    color={"white"}
                                    marginTop={20}
                                    fontWeight={800}
                                    onPress={() => pickImage()}
                                >
                                    Pick Images
                                </Button>
                                {image && image.length > 0 ? (
                                    <FlatList
                                        data={image}
                                        horizontal={true}
                                        renderItem={({ item }) => (
                                            <Image
                                                source={{ uri: item }}
                                                style={{
                                                    width: 100,
                                                    height: 100,
                                                    margin: 5,
                                                    marginTop: 10
                                                }}
                                                onError={handleImageError}
                                            />
                                        )}
                                        keyExtractor={(item, index) =>
                                            index.toString()
                                        }
                                        contentContainerStyle={{
                                            alignItems: "center",
                                        }}
                                    />
                                ) : (
                                    <View
                                        style={{
                                            alignItems: "center",
                                            marginVertical: 10,
                                        }}
                                    >
                                        <Text>No Image Available</Text>
                                    </View>
                                )}
                            </View>
                        </YStack>

                        <Button
                            backgroundColor={"#07C9F0"}
                            color={"white"}
                            marginTop={20}
                            fontWeight={800}
                        >
                            Next
                        </Button>
                    </YStack>

                    {showItenary && (
                        <ScrollView>
                            <YStack marginVertical={20}>
                                <H4 marginBottom={10}>Itenary</H4>
                                {itineraries.map((itinerary, dayIndex) => (
                                    <YStack
                                        key={dayIndex}
                                        backgroundColor={"lightgray"}
                                        padding={20}
                                        borderRadius={20}
                                        marginVertical={10}
                                    >
                                        <Label
                                            style={{
                                                paddingTop: 10,
                                                marginTop: 10,
                                            }}
                                        >
                                            <H5
                                                color={"black"}
                                                fontWeight={800}
                                            >
                                                Day {itinerary.day}
                                            </H5>
                                        </Label>
                                        {itinerary.activities.map(
                                            (activity, index) => (
                                                <XStack gap={5} key={index}>
                                                    <YStack
                                                        width={"40%"}
                                                        marginTop={10}
                                                        marginLeft={-3}
                                                    >
                                                        <Controller
                                                            control={control}
                                                            rules={{
                                                                required: true,
                                                            }}
                                                            render={({
                                                                field: {
                                                                    onChange,
                                                                    onBlur,
                                                                    value,
                                                                },
                                                            }) => (
                                                                <Input
                                                                    size={16}
                                                                    placeholder={`06.00 - 09.00`}
                                                                    onBlur={
                                                                        onBlur
                                                                    }
                                                                    onChangeText={
                                                                        onChange
                                                                    }
                                                                    value={
                                                                        value
                                                                    }
                                                                    style={{
                                                                        position:
                                                                            "relative",
                                                                    }}
                                                                />
                                                            )}
                                                            name={`day${dayIndex}_time${index}`}
                                                        />
                                                    </YStack>
                                                    <YStack
                                                        width={"60%"}
                                                        marginTop={10}
                                                    >
                                                        <Controller
                                                            control={control}
                                                            rules={{
                                                                required: true,
                                                            }}
                                                            render={({
                                                                field: {
                                                                    onChange,
                                                                    onBlur,
                                                                    value,
                                                                },
                                                            }) => (
                                                                <Input
                                                                    size={16}
                                                                    placeholder={`Description`}
                                                                    onBlur={
                                                                        onBlur
                                                                    }
                                                                    onChangeText={
                                                                        onChange
                                                                    }
                                                                    value={
                                                                        value
                                                                    }
                                                                    style={{
                                                                        position:
                                                                            "relative",
                                                                    }}
                                                                />
                                                            )}
                                                            name={`day${dayIndex}_description${index}`}
                                                        />
                                                    </YStack>
                                                </XStack>
                                            )
                                        )}
                                        <View
                                            style={{
                                                alignItems: "center",
                                                flexDirection: "row",
                                                gap: 10,
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Button
                                                onPress={() =>
                                                    addMoreActions(dayIndex)
                                                }
                                                backgroundColor={"#07C9F0"}
                                                color="white"
                                                style={{
                                                    marginTop: 20,
                                                    width: "45%",
                                                }}
                                            >
                                                Add more action
                                            </Button>

                                            {/* <Button
                                                backgroundColor={"#07C9F0"}
                                                color="white"
                                                style={{
                                                    marginTop: 20,
                                                    width: "45%",
                                                }}
                                            >
                                                Save
                                            </Button> */}
                                        </View>
                                    </YStack>
                                ))}
                                <View
                                    style={{
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Button
                                        onPress={addMoreDay}
                                        backgroundColor={"#07C9F0"}
                                        color="white"
                                        style={{ marginTop: 20, width: "45%" }}
                                    >
                                        Add more day
                                    </Button>
                                    <Button
                                        onPress={handleSubmit(onSubmit)}
                                        backgroundColor={"#07C9F0"}
                                        color="white"
                                        style={{ marginTop: 20, width: "45%" }}
                                    
                                    >
                                        Save
                                    </Button>
                                </View>
                            </YStack>
                        </ScrollView>
                    )}
                </YStack>
            </>
        );
    };
    return <FlatList data={[{}]} renderItem={CreateTripPage} />;
};

export default CreateTrip;
