import axiosInstance from "./axiosInstance"

export const OrderService = () =>{
    const createOrder = async(payload) =>{
        const response = await axiosInstance.post("order", payload)

        return response.data.data
    } 

    const getPaymentData = async(orderId)=>{
        const response = await axiosInstance.get(`payment/${orderId}`)
        return response.data.data;
    }

    const checkPaymentStatus = async(orderId) =>{
        const response = await axiosInstance.get(`payment/${orderId}/status`)
        return response.data.data
    }

    const getActiveOrder = async(userId) =>{
        const response = await axiosInstance.get(`order/${userId}/ACTIVE`)
        return response.data.data
    }

    const payout = async(orderId) =>{
        const response = await axiosInstance.post(`order/payout/${orderId}`)
        return response.data.data;
    }
    return {createOrder, getPaymentData, checkPaymentStatus, getActiveOrder, payout}
}