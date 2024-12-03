import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api's/api";

// export const loginUser = createAsyncThunk(
//   "user/login",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await API.post("/login", credentials);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

export const loginSendData = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await API.post("/login", credentials);
      console.log(response.data);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.message || "bir hata oluştu";
      return thunkAPI.rejectWithValue({ message: errorMessage });
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await API.post("/register", userData);
      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const registerCompany = createAsyncThunk(
  "user/registerCompany",
  async (companyData, { rejectWithValue }) => {
    try {
      const response = await API.post("/Cregister", companyData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "idle",
    error: null,
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginSendData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginSendData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginSendData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.error = null;
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
        state.error = null;
      })
      .addCase(registerCompany.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import API from "../../api's/api";

// export const selectUser = (state) => state.user;

// export const loginUser = createAsyncThunk(
//   "user/login",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await API.post("/login", credentials);
//       // sessionStorage.setItem("token", response.data.token);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// export const registerUser = createAsyncThunk(
//   "user/register",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await API.post("/register", userData);
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// export const registerCompany = createAsyncThunk(
//   "user/Cregister",
//   async (companyData, { rejectWithValue }) => {
//     try {
//       const response = await API.post("/Cregister", companyData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// const initialState = {
//   user: null,
//   loading: {
//     login: false,
//     register: false,
//     registerCompany: false,
//   },
//   error: null,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     // logout: (state) => {
//     //   state.user = null;
//     //   state.status = "idle";
//     // },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.user = action.payload;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })

//       .addCase(registerUser.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.user = action.payload;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })

//       .addCase(registerCompany.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(registerCompany.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.user = action.payload;
//       })
//       .addCase(registerCompany.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = userSlice.actions;

// export default userSlice.reducer;
