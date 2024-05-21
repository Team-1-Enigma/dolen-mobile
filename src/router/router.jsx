import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Verify from "../components/Auth/Verify";
// import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

// icons
// import Octicons from "@expo/vector-icons/Octicons";

const Stack = createNativeStackNavigator(); 
// const Tabs = AnimatedTabBarNavigator();

// const BottomTab = () => (
//     <Tabs.Navigator
//         tabBarOptions={{
//             activeBackgroundColor: "#007DFF",
//             inactiveTintColor: "#007DFF",
//             activeTintColor: "white",
//         }}
//         appearance={{
//             floating: true,
//         }}
//     >
//         <Tabs.Screen
//             name="Home"
//             component={Home}
//             options={{
//                 tabBarIcon: ({ focus, color, size }) => (
//                     <Octicons
//                         name="home"
//                         size={24}
//                         color={!focus ? color : "#007DFF"}
//                     />
//                 ),
//             }}
//         />
//         <Tabs.Screen
//             name="Product"
//             component={Product}
//             options={{
//                 tabBarIcon: ({ focus, color, size }) => (
//                     <Octicons
//                         name="list-unordered"
//                         size={24}
//                         color={!focus ? color : "#007DFF"}
//                     />
//                 ),
//             }}
//         />
//     </Tabs.Navigator>
// );


const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Register"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Verify" component={Verify} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
