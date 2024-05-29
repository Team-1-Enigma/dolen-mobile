import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/auth/AuthSlice";
import userSlice from "./Features/auth/UserSlice";
import travelSlice from "./Features/travel/TravelSlice";
import tripSlice from "./Features/trip/TripSlice";
import orderSlice from "./Features/order/orderSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
        travel: travelSlice.reducer,
        trip: tripSlice.reducer,
        order: orderSlice.reducer
    }
})

export default store;