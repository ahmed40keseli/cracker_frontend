import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// data ile veri alış-verişi yapar

const API_URL = "http://localhost:8081";
// http adresinin değişimi kolay olsun diye değere atadık

// Selector to get the user state
export const selectUser = (state) => state.user;

export const loginUser = createAsyncThunk(
  // createAsyncThunk ile veri alışverişini başlatan fonk
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      return response.data; // register başarılıysa veriyi döndür
    } catch (error) {
      return rejectWithValue(error.response.data); // hata varsa hatayı döndür
    }
  }
);

export const registerCompany = createAsyncThunk(
  "user/Cregister",
  async (companyData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/Cregister`, companyData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(registerCompany.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerCompany.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(registerCompany.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
