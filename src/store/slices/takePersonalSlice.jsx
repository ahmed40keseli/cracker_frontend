import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk ile veri gönderme işlemi
export const getData = createAsyncThunk(
  "tasks/getData",
  async (formGetData, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:8081/getAuth", {
        params: formGetData || {},
      });
      // console.log("takePersnal", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

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
        // console.log("Veri alındı:", action.payload); // Gelen veriyi kontrol edin
        state.tasks = Array.isArray(action.payload) ? action.payload : []; // Eğer dizi değilse boş bir dizi gönder
        state.error = null;
      })
      .addCase(getData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // action burada tanımlı
      });
  },
});

export default formGetSlice.reducer;
