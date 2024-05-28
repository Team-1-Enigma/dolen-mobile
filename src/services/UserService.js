import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SlideOutDown } from 'react-native-reanimated';

export const UserService = ()=>{
    const parseJwt = (token) => {
        try {
          return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
          return null;
        }
      };
    const getUserData = async() =>{
        
        // const token = await AsyncStorage.getItem('token');
        // const { sub } = parseJwt(token); // extract userId from the token
        // const response = await axios.get(`http://localhost:8080/api/user/${userId}`);
        // return response.data.data;
    }

    return {getUserData};
}