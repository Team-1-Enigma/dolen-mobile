import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../../services/UserService";
import { createSlice } from "@reduxjs/toolkit";
const { getData } = UserService();

const initialState = {
    user: null,
    status: 'idle',
    error: null,
  };
  
export const userAction = createAsyncThunk(
    "user/get",
    async () =>{
        
        const response = await getData();
        if(response){
            return response;
        }else{
            throw new Error("Invalid response");
        }
       
    }
)

const userSlice = createSlice({
    name: "user",
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
  
  export default userSlice;