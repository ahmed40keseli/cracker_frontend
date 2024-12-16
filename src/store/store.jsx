import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./slices/userSlice";
import formTaskSlice from "./slices/taskCreateSlice";
import formGetSlice from "./slices/takePersonalSlice";
import formRegisterSlice from "./slices/registerSlice";
import formCregisterSlice from "./slices/cregisterSlice";
import formLoginSlice from "./slices/loginSlice";
import formSelfTaskSlice from "./slices/getTaskSlice";
// slice dosyalarının içe aktarımı

export const store = configureStore({
  reducer: {
    // userSlice: userReducer,

    formTaskSlice: formTaskSlice,
    // görev oluşturan slice dosyasının aktarımı için
    personalSlice: formGetSlice,
    // tüm personeli getiern slice dosyasının aktarımı için
    formLoginSlice: formLoginSlice,
    // giriş işlemi slice dosyasının aktarımı için
    formRegisterSlice: formRegisterSlice,
    // normal kayıt eden slice dosyasının aktarımı için
    formCregisterSlice: formCregisterSlice,
    // şirket kayıt eden slice dosyasının aktarımı için
    formSelfTaskSlice: formSelfTaskSlice,
  },
});
