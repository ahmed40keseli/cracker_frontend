import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api's/api";

export const loginSendData = createAsyncThunk(
  "form/loginSendData",
  async (loginData, thunkAPI) => {
    try {
      const response = await API.post("/login", loginData);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Bir hata oluştu";
      return thunkAPI.rejectWithValue({ message: errorMessage });
    }
  }
);

const formLoginSlice = createSlice({
  name: "form",
  initialState: {
    status: "idle",
    error: null,
    token: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginSendData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginSendData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.token = action.payload.token;
      })
      .addCase(loginSendData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default formLoginSlice.reducer;
