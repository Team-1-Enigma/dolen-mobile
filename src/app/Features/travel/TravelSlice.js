// Features/travel/TravelSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TravelService } from "../../../services/TravelService";

const {getTravels, getTravelById, getTravelDataByUserId} = TravelService()

const initialState = {
  travels: [],
  travelDetail: null,
  loading: false,
  error: null,
  travelDetailFromUser : null
};

export const fetchTravels = createAsyncThunk(
  "travel/fetchTravels",
  async () => {
    try {
      const response = await getTravels();
      return response;
    } catch (error) {
        console.log(`Type erro ${error}`)
      throw new Error("Failed to fetch travels");
    }
  }
);

export const getTravelDataByUserIdAction = createAsyncThunk(
  "travel/user/data",
  async (userId) => {
    try {
      const response = await getTravelDataByUserId(userId);
      return response;
    } catch (error) {
        console.log(`Type erro ${error}`)
      throw new Error("Failed to fetch travels");
    }
  }
)


export const fetchTravelById = createAsyncThunk(
  "travel/getTravelById",
  async (travelId) => {
    try {
      const response = await getTravelById(travelId);
      return response;
    } catch (error) {
      console.log(`Type erro ${error}`);
      throw new Error("Failed to fetch travel by ID");
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
      })
      .addCase(fetchTravelById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTravelById.fulfilled, (state, action) => {
        state.loading = false;
        state.travelDetail = action.payload;
      })
      .addCase(fetchTravelById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getTravelDataByUserIdAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTravelDataByUserIdAction.fulfilled, (state, action) => {
        state.loading = false;
        state.travelDetailFromUser = action.payload;
      })
      .addCase(getTravelDataByUserIdAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default travelSlice;
