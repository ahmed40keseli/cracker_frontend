import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api's/api";

export const registerSendData = createAsyncThunk(
  "form/loginSendData",
  async (registerData, thunkAPI) => {
    try {
      const response = await API.post("/register", registerData);
      sessionStorage.setItem("token", JSON.stringify(response.data.token));
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Bir hata oluştu";
      return thunkAPI.rejectWithValue({ message: errorMessage });
    }
  }
);

const formRegisterSlice = createSlice({
  name: "form",
  initialState: {
    status: "idle",
    error: null,
    token: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerSendData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerSendData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.token = action.payload.token;
      })
      .addCase(registerSendData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default formRegisterSlice.reducer;
