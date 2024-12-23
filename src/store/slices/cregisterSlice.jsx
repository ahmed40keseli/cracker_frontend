import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api's/api";

export const cregistersendData = createAsyncThunk(
  "form/cregisterSendData",
  async (cregisterData, thunkAPI) => {
    try {
      const response = await API.post("/Cregister", cregisterData);
      sessionStorage.setItem(
        "authorization",
        JSON.stringify(response.data.authorization)
      );
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Bir hata oluştu";
      return thunkAPI.rejectWithValue({ message: errorMessage });
    }
  }
);

const formCregisterSlice = createSlice({
  name: "form",
  initialState: {
    status: "idle",
    error: null,
    authorization: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cregistersendData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(cregistersendData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.authorization = action.payload.authorization;
      })
      .addCase(cregistersendData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default formCregisterSlice.reducer;
