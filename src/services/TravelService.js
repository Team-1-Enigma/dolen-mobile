import axiosInstance from "./axiosInstance";

export const TravelService = () =>{

    const getTravels = async() =>{
        const response = await axiosInstance.get("/travels")
          return response.data.data;
    }

    return {getTravels};
}