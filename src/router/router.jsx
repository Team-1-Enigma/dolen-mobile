import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../screens/Home/Home";
import Verify from "../components/Auth/Verify";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

// icons
import Octicons from "@expo/vector-icons/Octicons";

// Menus
import Welcome from "../screens/Welcome";

import User from "../screens/User/User";
import EditUser from "../screens/User/EditUser";

import Travel from "../screens/Travel/Travel";
import TravelDetails from "../screens/Travel/TravelDetails";
import TravelReview from "../screens/Travel/components/TravelReview";

import Trip from "../screens/Trip/Trip";
import TripDetails from "../screens/Trip/TripDetails";

const Stack = createNativeStackNavigator();
const Tabs = AnimatedTabBarNavigator();

const BottomTab = () => (
    <Tabs.Navigator
        tabBarOptions={{
            activeBackgroundColor: "#07C9F0",
            inactiveTintColor: "#07C9F0",
            activeTintColor: "white",
        }}
        appearance={{
            floating: false,
        }}
    >
        <Tabs.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ focus, color, size }) => (
                    <Octicons
                        name="home"
                        size={24}
                        color={!focus ? color : "#07C9F0"}
                    />
                ),
            }}
        />
        <Tabs.Screen
            name="User"
            component={User}
            options={{
                tabBarIcon: ({ focus, color, size }) => (
                    <Octicons
                        name="person"
                        size={24}
                        color={!focus ? color : "#07C9F0"}
                    />
                ),
            }}
        />
    </Tabs.Navigator>
);

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="App"
            >
                <Stack.Screen name="App" component={BottomTab} />

                {/* Auth */}
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Verify" component={Verify} />

                {/* Screens */}
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="User" component={User} />
                <Stack.Screen name="EditUser" component={EditUser} />
                
                <Stack.Screen name="Travel" component={Travel} />
                <Stack.Screen name="TravelDetails" component={TravelDetails} />
                <Stack.Screen name="TravelReview" component={TravelReview} />
                
                <Stack.Screen name="Trip" component={Trip} />
                <Stack.Screen name="TripDetails" component={TripDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
