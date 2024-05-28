import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/user/userSlice";
import userReducer from "./Features/user/userSlice";

const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store;