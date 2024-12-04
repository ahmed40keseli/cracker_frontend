import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import formTaskSlice from "./slices/taskCreateSlice";
import formGetSlice from "./slices/takePersonalSlice";
import formRegisterSlice from "./slices/registerSlice";
import formCregisterSlice from "./slices/cregisterSlice";
import formLoginSlice from "./slices/loginSlice";

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    formTaskSlice: formTaskSlice,
    personalSlice: formGetSlice,
    formLoginSlice: formLoginSlice,
    formRegisterSlice: formRegisterSlice,
    formCregisterSlice: formCregisterSlice,
  },
});
