// Features/travel/TravelSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TravelService } from '../../../services/TravelService';

const {getTravels} = TravelService()

const initialState = {
  travels: [],
  loading: false,
  error: null,
};

export const fetchTravels = createAsyncThunk(
  "travel/fetchTravels",
  async () => {
    try {
      const response = await getTravels();
      console.log(`nininn ${response}`)
      return response;
    } catch (error) {
        console.log(`Type erro ${error}`)
      throw new Error("Failed to fetch travels");
    }
  }
);

const travelSlice = createSlice({
  name: "travel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTravels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTravels.fulfilled, (state, action) => {
        state.loading = false;
        state.travels = action.payload;
      })
      .addCase(fetchTravels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default travelSlice;
