import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api's/api";

export const loginSendData = createAsyncThunk(
  "form/loginSendData",
  async (loginData, thunkAPI) => {
    try {
      const response = await API.post("/login", loginData);
      console.log(response.data);

      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("referansNo", response.data.user.referansNo);
      const sessionDegerLogin = sessionStorage.getItem("token");
      const sessionDegerReferansno = sessionStorage.getItem("referansNo");
      console.log(sessionDegerReferansno);
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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginSendData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginSendData.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(loginSendData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default formLoginSlice.reducer;
