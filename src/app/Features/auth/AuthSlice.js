import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthService } from "../../../services/AuthService";

const { login, register } = AuthService();

export const loginAction = createAsyncThunk(
    "auth/login",
    async (payload, thunkAPI) => {
        console.log("login action:", payload);
        try {
            const response = await login(payload);
            console.log("login response: ", response);
            if (response) {
                return response;
            } else {
                throw new Error("Invalid response");
            }
        } catch (e) {
            console.log("Thunk error: ", e.message);
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const registerAction = createAsyncThunk("auth/register", async (payload, thunkAPI) => {
    console.log("register action: ", payload);
    try {
        const response = await register(payload)
        console.log("register response: ", payload);
        if (response) {
            return response
        } else {
            throw new Error("Invalid response");
        }
    } catch (e) {
        console.log("Thunk error: ", e.message);
        return thunkAPI.rejectWithValue(e.message);
    };
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        id: "",
        email: "",
        isLoading: false,
    },
    reducers: {
        logout: (state) => {
            state.email = ""((state.id = ""));
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loginAction.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.email = payload.email;
            state.id = payload.id;
        });
        builder.addCase(loginAction.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const { logout } = authSlice.actions;

export default authSlice;
