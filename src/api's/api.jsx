import axios from "axios";

const API = axios.create({
  // baseURL: "todo.crmpanel.tr", // Backend URL
  baseURL: "http://localhost:8081",
});

export default API;
