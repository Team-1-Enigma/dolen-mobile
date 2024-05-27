import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosInstance = axios.create({
    baseURL: "https://6bea-125-166-12-126.ngrok-free.app/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// export const axiosInstanceFormData = axios.create({
//     baseURL: "https://6bea-125-166-12-126.ngrok-free.app/api",
// });

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("token");
        console.log(token)
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        console.log("interceptor");

        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default axiosInstance
