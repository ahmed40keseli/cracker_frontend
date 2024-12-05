import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  // sessionStorage'dan token'ı alıyoruz
  const token = sessionStorage.getItem("token");

  // Eğer token varsa, sayfayı gösteriyoruz
  return token ? element : <Navigate to="/login" />;
};

export default PrivateRoute;

// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const isAuthenticated = () => {
//   return localStorage.getItem("token");
// };

// const PrivateRoute = () => {
//   return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
// };

// export default PrivateRoute;
