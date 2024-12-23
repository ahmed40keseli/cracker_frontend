import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api's/api";

export const registerSendData = createAsyncThunk(
  "form/loginSendData",
  async (registerData, thunkAPI) => {
    try {
      const response = await API.post("/register", registerData);
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

const formRegisterSlice = createSlice({
  name: "form",
  initialState: {
    status: "idle",
    error: null,
    authorization: null,
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
        // state.authorization = action.payload.authorization;
      })
      .addCase(registerSendData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default formRegisterSlice.reducer;
