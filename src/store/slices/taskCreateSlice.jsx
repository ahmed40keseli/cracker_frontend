import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api's/api";

export const sendData = createAsyncThunk(
  "form/sendData",
  async (formData, thunkAPI) => {
    try {
      const token = sessionStorage.getItem("token");
      console.log("Token alındı:", token);
      const response = await API.post("/createTask", formData, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log("API Yanıtı:", response.data);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Bir hata oluştu";
      return thunkAPI.rejectWithValue({ message: errorMessage });
    }
  }
);

const formTaskSlice = createSlice({
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

export default formTaskSlice.reducer;
