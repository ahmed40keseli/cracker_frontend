import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../api's/api";

export const getData = createAsyncThunk(
  "tasks/getData",
  async (_, thunkAPI) => {
    try {
      const response = await API.get("/getAuth");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Bir hata oluştu"
      );
    }
  }
);

// export const getData = createAsyncThunk(
//   "tasks/getData",
//   async (formGetData, thunkAPI) => {
//     try {
//       const token = sessionStorage.getItem("token");
//       const response = await axios.get("http://localhost:8081/getAuth", {
//         headers: {
//           Authorization: `Bearer ${token}`, // Token'ı gönder
//         },
//         params: formGetData || {},
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

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
      .addCase(getData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = Array.isArray(action.payload) ? action.payload : [];
        state.error = null;
      })
      .addCase(getData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default formGetSlice.reducer;
