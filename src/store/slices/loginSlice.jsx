import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api's/api";
// içeriye bağımlılıklar çekilir

export const loginSendData = createAsyncThunk(
  "form/loginSendData",
  async (loginData, thunkAPI) => {
    try {
      const response = await API.post("/login", loginData);

      const authToken = response.headers.authorization;

      if (!authToken) {
        throw new Error("Token bulunamadı");
      }

      sessionStorage.setItem("authorization", authToken);

      return {
        token: authToken,
        success: true,
      };
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
    isAuthenticated: false,
    // authorization: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginSendData.pending, (state) => {
        state.status = "loading";
        // yüklenirken oluşacak durumlar
      })
      .addCase(loginSendData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // başarı ile gerçekleştiğinde state'i güncelleme işlemi
        state.error = null;
        state.isAuthenticated = true;
        // state.authorization = action.payload.authToken;
        // action ile diğer componente gönderilir
      })
      .addCase(loginSendData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default formLoginSlice.reducer;

// const formLoginSlice = createSlice({
//   name: "form",
//   initialState: {
//     status: "idle",
//     error: null,
//     // authorization: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginSendData.pending, (state) => {
//         state.status = "loading";
//         // yüklenirken oluşacak durumlar
//       })
//       .addCase(loginSendData.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         // başarı ile gerçekleştiğinde state'i güncelleme işlemi
//         state.error = null;
//         // state.authorization = action.payload.authToken;
//         // action ile diğer componente gönderilir
//       })
//       .addCase(loginSendData.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       });
//   },
// });

// export default formLoginSlice.reducer;
// // dışarıya paylaşma için kullanılır
