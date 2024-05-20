import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../components/Auth/Login"


const Stack = createNativeStackNavigator();



const AppNavigator = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     const checkToken = async () => {
//       try {
//         const token = await AsyncStorage.getItem('token');
//         console.log(token);
//         if (token) {
//           navigation.navigate('Home');
//         } else {
//           navigation.navigate('Login');
//         }
//       } catch (error) {
//         console.error('Error while checking token:', error);
//       }
//     };

//     checkToken();
//   }, [navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Router;
