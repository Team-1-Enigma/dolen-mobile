import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/auth/AuthSlice";
import userSlice from "./Features/auth/UserSlice";
import travelSlice from "./Features/travel/TravelSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
        travel: travelSlice.reducer
    }
})

export default store;