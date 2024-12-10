import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api's/api";

export const cregistersendData = createAsyncThunk(
  "form/cregisterSendData",
  async (cregisterData, thunkAPI) => {
    try {
      const response = await API.post("/Cregister", cregisterData);
      const sessionDegerCregister = sessionStorage.setItem(
        "token",
        response.data.token
      );
      console.log(sessionDegerCregister);
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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cregistersendData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(cregistersendData.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(cregistersendData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default formCregisterSlice.reducer;
