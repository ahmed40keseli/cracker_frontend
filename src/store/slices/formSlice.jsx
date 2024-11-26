import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendData = createAsyncThunk(
  "form/sendData",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8081/createTask",
        formData
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Bir hata oluştu";
      return thunkAPI.rejectWithValue({ message: errorMessage });
    }
  }
);

console.log(sendData);

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
