// src/store/slices/todoSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API URL'ini belirtelim (bu kısmı gerçekte API'nizle değiştirebilirsiniz)
const API_URL = "http://localhost:8080";

// Async işlemleri tanımlayalım (bu kısım örnektir, gerçek API'ye göre değiştirebilirsiniz)
// export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
//   const response = await axios.get(`${API_URL}/getTasks`);
//   return response.data;
// });

export const addTodo = createAsyncThunk("addTodo", async (todo) => {
  const response = await axios.post(`${API_URL}/createTask`, todo);
  return response.data;
});

// export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
//   await axios.delete(`${API_URL}/deleteTask/${id}`);
//   return id;
// });

// Başlangıç durumu
const initialState = {
  todos: [],
  status: "idle",
  error: null,
};

// Slice
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Todos fetch işlemi
    builder;
    // .addCase(fetchTodos.pending, (state) => {
    //   state.status = "loading";
    // })
    // .addCase(fetchTodos.fulfilled, (state, action) => {
    //   state.status = "succeeded";
    //   state.todos = action.payload;
    // })
    // .addCase(fetchTodos.rejected, (state, action) => {
    //   state.status = "failed";
    //   state.error = action.error.message;
    // })
    // // Todo ekleme işlemi
    // .addCase(addTodo.fulfilled, (state, action) => {
    //   state.todos.push(action.payload);
    // })
    // // Todo silme işlemi
    // .addCase(deleteTodo.fulfilled, (state, action) => {
    //   state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    // });
  },
});

export default todoSlice.reducer;
