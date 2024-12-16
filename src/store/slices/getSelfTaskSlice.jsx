import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api's/api";

export const getIdTaskData = createAsyncThunk(
  "tasks/getIdData",
  async (_, thunkAPI) => {
    try {
      const response = await API.get(`getTasks/${sessionUserId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Bir hata oluştu"
      );
    }
  }
);

const sessionUserId = sessionStorage.getItem("userId");

const formGetSlice = createSlice({
  name: "form",
  initialState: {
    tasks: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIdTaskData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getIdTaskData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = Array.isArray(action.payload) ? action.payload : [];
        state.error = null;
      })
      .addCase(getIdTaskData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default formGetSlice.reducer;
