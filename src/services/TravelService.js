import axiosInstance from "./axiosInstance";

export const TravelService = () =>{

    const getTravels = async() =>{
        const response = await axiosInstance.get("/travels")
        console.log(`dataasss ${response}`)
          return response.data.data;
    }

    const getTravelById = async(travelId) =>{
        const response = await axiosInstance.get(`/travels/${travelId}`);

        return response.data.data;
    }

    const getTravelDataByUserId = async(userId) =>{
        const response = await axiosInstance.get(`travels/user/${userId}`)

        return response.data.data;
    }

    return {getTravels, getTravelById, getTravelDataByUserId};
}