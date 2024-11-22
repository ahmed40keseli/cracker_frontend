import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Basit bir kimlik doğrulama kontrolü (örnek olarak yerleştirildi).
const isAuthenticated = () => {
  return localStorage.getItem("token"); // Token olup olmadığını kontrol eder.
};

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
