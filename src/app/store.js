import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/auth/AuthSlice";
import userSlice from "./Features/auth/UserSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer
    }
})

export default store