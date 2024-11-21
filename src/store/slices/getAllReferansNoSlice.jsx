import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getReferansData = createAsyncThunk(
  "form/getReferansData",
  async (formReferansNoData, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:8180/getAuth",
        formReferansNoData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const formReferansNoSlice = createSlice({
  name: "form",
  initialState: {
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReferansData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getReferansData.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(getReferansData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default formReferansNoSlice.reducer;
