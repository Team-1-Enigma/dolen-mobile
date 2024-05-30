import axiosInstance from "./axiosInstance"

export const TripService = () =>{
    const getAllTrip = async()=>{
        const response = await axiosInstance.get("travel/trips")

        return response.data.data;
    }

    const getAllTripByTravelId = async(travelId) =>{
        const response = await axiosInstance.get(`travel/${travelId}/trips`)
        return response.data.data;
    }

    const getTripPrice = async(tripId) =>{
        const response = await axiosInstance.get(`travel/trip/${tripId}/price`)
        return response.data.data;
    }

    const getTripDetail= async(tripId) =>{
        const response = await axiosInstance.get(`travel/trip/${tripId}`)
        return response.data.data
    }

    const getAllParticipantByTripId = async(tripId) => {
        const response = await axiosInstance.get(`order/participant/${tripId}`)

        return response.data.data;
    }

    return {getAllTrip, getAllTripByTravelId, getTripPrice, getTripDetail, getAllParticipantByTripId};
}