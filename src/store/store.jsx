import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import formTaskSlice from "./slices/taskCreateSlice";
import formGetSlice from "./slices/takePersonalSlice";

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    formTaskSlice: formTaskSlice,
    personalSlice: formGetSlice,
  },
});
