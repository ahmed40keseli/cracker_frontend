import axios from "axios";
// api bağlantısı gerekli olan bağımlılık import edilir

const API = axios.create({
  // baseURL: "todo.crmpanel.tr", // Backend URL
  baseURL: "http://localhost:8081",
  // api adresi belirlenir
});

export default API;
