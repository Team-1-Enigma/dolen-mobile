import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "./axiosInstance";
// import axios from "axios";

export const AuthService = () => {
    const login = async (payload) => {
        const response = await axiosInstance.post("/auth/login", payload);
        console.log("response: ", response);
        if (response.status == 200) {
            const token = response.data.data.token;
            console.log("token: ", token);
            await AsyncStorage.setItem("token", token);
            await AsyncStorage.setItem("userId", response.data.data.credentialId)
            
           
            return response.data.data;
        } else {
            throw new Error("Unexpected response status: " + response.status);
        }
    };

    const register = async (payload) => {
        console.log("data payload : ", payload);
        const response = await axiosInstance.post("/auth/register", payload)
        console.log("response: ", response)
        if (response.status == 201) {
            return response.data.data;
        } else {
            throw new Error("Unexpected response status: " + response.status);
        }
    }


    return { login, register };

};


