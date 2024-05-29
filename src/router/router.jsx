import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

// Import your screens
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../screens/Home/Home";
import Verify from "../components/Auth/Verify";
import Welcome from "../screens/Welcome";
import User from "../screens/User/User";
import EditUser from "../screens/User/EditUser";
import Travel from "../screens/Travel/Travel";
import TravelDetails from "../screens/Travel/TravelDetails";
import TravelReview from "../screens/Travel/components/TravelReview";
import Trip from "../screens/Trip/Trip";
import TripDetails from "../screens/Trip/TripDetails";
import CreateTrip from "../screens/Trip/CreateTrip";

// icons
import Octicons from "@expo/vector-icons/Octicons";
import Order from "../screens/Order/Order"
import OrderConfirmation from "../screens/Order/OrderConfirmation";
import OrdersList from "../screens/Order/MyOrder";
import TravelManagementPage from "../screens/Travel/TravelManagement";
import CreateTravel from "../screens/Travel/CreateTravel";

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
        tabBarIcon: ({ focused, color, size }) => (
          <Octicons name="home" size={24} color={!focused ? color : "#07C9F0"} />
        ),
      }}
    />
    {/* <Tabs.Screen
      name="Order"
      component={Order}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Octicons name="person" size={24} color={!focused ? color : "#07C9F0"} />
        ),
      }}
    /> */}
    <Tabs.Screen
      name="User"
      component={User}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Octicons name="person" size={24} color={!focused ? color : "#07C9F0"} />
        ),
      }}
    />
  </Tabs.Navigator>
);

const Router = () => {
  const [initialRoute, setInitialRoute] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        
        setInitialRoute(token ? 'App' : 'Login');
      } catch (error) {
        console.error('Error while checking token:', error);
        setInitialRoute('Login');
      } finally {
        setLoading(false); // Finished loading
      }
    };

    checkToken();
  }, []);

  if (loading) {
    return null; // or a loading spinner, etc.
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={initialRoute}
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
        <Stack.Screen name="CreateTravel" component={CreateTravel} />
        <Stack.Screen name="Trip" component={Trip} />
        <Stack.Screen name="TripDetails" component={TripDetails} />
        <Stack.Screen name="CreateTrip" component={CreateTrip} />
        <Stack.Screen name="Order" component={Order}/>
        <Stack.Screen name="OrderConfirmation" component={OrderConfirmation}/>
        <Stack.Screen name="MyOrderList" component={OrdersList}/>
        <Stack.Screen name="TravelManagement" component={TravelManagementPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
