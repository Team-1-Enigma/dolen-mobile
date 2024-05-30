import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { TripService } from '../../../services/TripService';

const {getAllTrip, getAllTripByTravelId, getTripPrice, getTripDetail, getAllParticipantByTripId} = TripService()

const initialState = {
    trips :[],
    tripTravel :[],
    loading:false,
    error:null,
    tripPrice:[],
    tripDetail:null,
    participant:[]
}

export const getAllTripAction = createAsyncThunk(
    "travel/trip/getAll",
    async () =>{
        try {
            const response = await getAllTrip();
            return response;
        } catch (error) {
            throw new Error("Failed to fetch travels");
        }
    }
);

export const getAllTripByTravelIdAction = createAsyncThunk(
  "travel/trip",
  async(travelId)=>{
    try {
        const response = await getAllTripByTravelId(travelId);
        return response;
    } catch (error) {
        throw new Error("Failed to fetch trip");
    }
  }
)

export const getTripPriceAction = createAsyncThunk(
  "trip/price",
  async(tripId) =>{
    try{
      const response = await getTripPrice(tripId);
      return response;
    } catch(e){
      throw new Error("Failed to fetch trip price");
    }
  }
)

export const getTripDetailAction = createAsyncThunk(
  "trip/detail",
  async(tripId) =>{
    try{
      const response = await getTripDetail(tripId);
      return response;
    } catch(e){
      throw new Error("Failed to fetch trip detail");
    }
  }
)

export const getAllParticipantActioon = createAsyncThunk(
  "trip/participant",
  async(tripId) =>{
    try{
      const response = await getAllParticipantByTripId(tripId);
      return response;
    } catch(e){
      throw new Error("Failed to fetch All  Participant");
    }
  } 
)

const tripSlice = createSlice({
    name: "trip",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getAllTripAction.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getAllTripAction.fulfilled, (state, action) => {
          state.loading = false;
          state.trips = action.payload;
        })
        .addCase(getAllTripAction.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(getAllTripByTravelIdAction.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getAllTripByTravelIdAction.fulfilled, (state, action) => {
          state.loading = false;
          state.tripTravel = action.payload;
        })
        .addCase(getAllTripByTravelIdAction.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(getTripPriceAction.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getTripPriceAction.fulfilled, (state, action) => {
          state.loading = false;
          state.tripPrice = action.payload;
        })
        .addCase(getTripPriceAction.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(getTripDetailAction.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getTripDetailAction.fulfilled, (state, action) => {
          state.loading = false;
          state.tripDetail = action.payload;
        })
        .addCase(getTripDetailAction.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(getAllParticipantActioon.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getAllParticipantActioon.fulfilled, (state, action) => {
          state.loading = false;
          state.participant = action.payload;
        })
        .addCase(getAllParticipantActioon.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
});

export default tripSlice;