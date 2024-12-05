import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api's/api";
// import { useNavigate } from "react-router-dom";

export const loginSendData = createAsyncThunk(
  "form/loginSendData",
  async (loginData, thunkAPI) => {
    try {
      const response = await API.post("/login", loginData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Bir hata oluştu";
      return thunkAPI.rejectWithValue({ message: errorMessage });
    }
  }
);

// const navigate = useNavigate();

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
      // .addCase(loginSendData.fulfilled, (state) => {
      //   state.status = "succeeded";
      //   state.error = null;
      // })
      .addCase(loginSendData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        // Token'ı sessionStorage'a kaydet
        if (action.payload?.token) {
          sessionStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(loginSendData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default formLoginSlice.reducer;
