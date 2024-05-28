import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "./axiosInstance";

export const UserService = () =>{
    const getData = async(payload) =>{
        const userId = await AsyncStorage.getItem("userId");

        const response = await axiosInstance.get(`/user/${userId}`);
        return response.data.data;
    }

    return { getData };

}