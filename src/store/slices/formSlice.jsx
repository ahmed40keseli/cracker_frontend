import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk ile veri gönderme işlemi
export const sendData = createAsyncThunk(
  "form/sendData",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8081/createTask",
        formData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState: {
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendData.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(sendData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default formSlice.reducer;
