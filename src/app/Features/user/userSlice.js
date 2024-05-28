import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import { UserService } from '../../../services/UserService';

const { getUserData } = UserService();

const initialState = {
    user: null,
    status: 'idle',
    error: null,
  };

export const userAction = createAsyncThunk(
    "user/getData",
    async (payload, thunkAPI) =>{
        console.log("user get", payload);

        try{
            const response = await getUserData();
            console.log("login response: ", response);
            if (response) {
                return response;
            } else {
                throw new Error("Invalid response");
            }
        }catch(e){
            console.log("Thunk error: ", e.message);
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

const userSlice = createSlice({
    name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(userAction.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(userAction.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// export const { logout } = authSlice.actions;

export default userSlice.reducer;
