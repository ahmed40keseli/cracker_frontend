import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api's/api";
// içeriye bağımlılıklar çekilir

export const loginSendData = createAsyncThunk(
  "form/loginSendData",
  async (loginData, thunkAPI) => {
    try {
      const response = await API.post("/login", loginData);

      const authToken = response.headers.authorization;

      if (authToken) {
        sessionStorage.setItem("authorization", authToken);
        // Token'i sessionStorage'a kaydet
        console.log("başarılı");

        return authToken;
        // Token'i geri döndür
      } else {
        throw new Error("Authorization header bulunamadı");
      }
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
// dışarıya paylaşma için kullanılır
