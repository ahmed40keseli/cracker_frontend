import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api's/api";

export const getIdTaskData = createAsyncThunk(
  "form/getIdTaskData",
  async (formData, thunkAPI) => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await API.post("/getTasks", formData, {
        headers: {
          token: `${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log("Error oluştu:", error.message);
      console.log("Error detayları:", error.response);
      return thunkAPI.rejectWithValue(
        error.response?.data || "Bir hata oluştu"
      );
    }
  }
);

const formSelfTaskSlice = createSlice({
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
      // .addCase(getIdTaskData.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   state.tasks = Array.isArray(action.payload) ? action.payload : [];
      //   state.error = null;
      // })
      .addCase(getIdTaskData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = Array.isArray(action.payload.tasks)
          ? action.payload.tasks
          : []; // "tasks" özelliğine eriş
        state.error = null;
      })
      .addCase(getIdTaskData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default formSelfTaskSlice.reducer;
