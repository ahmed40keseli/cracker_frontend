import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api's/api";

export const registerSendData = createAsyncThunk(
  "form/loginSendData",
  async (registerData, thunkAPI) => {
    try {
      const response = await API.post("/register", registerData);
      sessionStorage.setItem("token", response.data.token);
      const sessionDegerRegister = sessionStorage.getItem(
        "token",
        response.data.token
      );
      console.log("sessionDegerRegister", sessionDegerRegister);
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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerSendData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerSendData.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(registerSendData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default formRegisterSlice.reducer;
