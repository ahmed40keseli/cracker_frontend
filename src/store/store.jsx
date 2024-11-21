import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import todoReducer from "./slices/todoSlice";
import formSlice from "./slices/formSlice";
import formGetSlice from "./slices/takePersonalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todoReducer,
    form: formSlice,
    personal: formGetSlice,
  },
});
