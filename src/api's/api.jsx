import axios from "axios";

const API = axios.create({
  baseURL: "todo.crmpanel.tr", // Backend URL
});

export default API;

// Her isteğe Authorization header ekler
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });
