import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import formSlice from "./slices/formSlice";
import formGetSlice from "./slices/takePersonalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    form: formSlice,
    personal: formGetSlice,
  },
});
