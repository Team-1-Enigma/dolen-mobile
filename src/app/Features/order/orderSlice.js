// orderSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OrderService } from "../../../services/OrderService";

const { createOrder, getPaymentData, checkPaymentStatus, getActiveOrder, payout } = OrderService();

const initialState = {
    participantData: [],
    quantity: null,
    loading: false,
    error: null,
    userId: null,
    tripId: null,
    paymentData: null,
    paymentStatus:null,
    orderId : null,
    activeOrder:[]
};

export const createOrderAction = createAsyncThunk(
    "order/create",
    async (payload, thunkAPI) => {
        try {
            const response = await createOrder(payload);
            
            return response; // Pastikan Anda mengambil payload dari response sesuai dengan struktur yang benar
        } catch (error) {
            console.log(`Type error ${error}`);
            throw new Error("Failed to create order");
        }
    }
);

export const getPaymentDataAction = createAsyncThunk(
    "payment/data",
    async (orderId, thunkAPI) => {
        try {
            const response = await getPaymentData(orderId);
            return response; // Pastikan Anda mengambil payload dari response sesuai dengan struktur yang benar
        } catch (error) {
            console.log(`Type error ${error}`);
            throw new Error("Failed to fetch payment data");
        }
    }
);
export const getPaymentStatusAction = createAsyncThunk(
    "payment/status",
    async(orderId, thunkAPI) =>{
        try {
            const response = await checkPaymentStatus(orderId);
            return response; // Pastikan Anda mengambil payload dari response sesuai dengan struktur yang benar
        } catch (error) {
            console.log(`Type error ${error}`);
            throw new Error("Failed to fetch payment data");
        }
    }
)

export const getActiveOrderAction = createAsyncThunk(
    "order/user/active",
    async(userId, thunkAPI) =>{
        try {
            const response = await getActiveOrder(userId);
            return response; // Pastikan Anda mengambil payload dari response sesuai dengan struktur yang benar
        } catch (error) {
            console.log(`Type error ${error}`);
            throw new Error("Failed to fetch payment data");
        }
    }
)

export const payoutAction = createAsyncThunk(
    "order/payout",
    async(orderId) =>{
        console.log("payout")
        try{
            const response =await payout(orderId);
            return response;
        }catch(error){
            console.log(`Type error ${error}`);
            throw new Error("Payout Failed");
        }
    }
)

const orderSlice = createSlice({
    name: "order",
    initialState: initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        setPaymentStatus(state, action) {
            state.paymentStatus = action.payload;
        },
        clearPaymentStatus(state) {
            state.paymentStatus = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createOrderAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(createOrderAction.fulfilled, (state, { payload }) => {
                console.log(`ini di add case ${payload.id}`)
                state.loading = false;
                state.participantData = payload.orderDetailRequests;
                state.quantity = payload.quantity;
                state.tripId = payload.tripId;
                state.userId = payload.userId;
                state.orderId = payload.id;
            })
            .addCase(createOrderAction.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to create order";
            })
            .addCase(getPaymentDataAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPaymentDataAction.fulfilled, (state, action) => {
                state.loading = false;
                state.paymentData = action.payload; // Pastikan ini sesuai dengan struktur response
                state.error = null;
            })
            .addCase(getPaymentDataAction.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to get payment data";
            })
            .addCase(getPaymentStatusAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPaymentStatusAction.fulfilled, (state, action) => {
                state.loading = false;
                state.paymentStatus = action.payload; // Pastikan ini sesuai dengan struktur response
                state.error = null;
            })
            .addCase(getPaymentStatusAction.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to get payment data";
            })
            .addCase(getActiveOrderAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getActiveOrderAction.fulfilled, (state, action) => {
                state.loading = false;
                state.activeOrder = action.payload; // Pastikan ini sesuai dengan struktur response
                state.error = null;
            })
            .addCase(getActiveOrderAction.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to get payment data";
            })
            .addCase(payoutAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(payoutAction.fulfilled, (state, action) => {
                state.loading = false;
                state.activeOrder = state.activeOrder.filter(order => order.id !== action.meta.arg);
                state.error = null;
            })
            .addCase(payoutAction.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to get payment data";
            });
    },
});
export const { setPaymentStatus, clearPaymentStatus } = orderSlice.actions;

export default orderSlice;
