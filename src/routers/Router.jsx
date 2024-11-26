import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/Register";
import CompanyRegister from "../pages/companyRegister";
import FormComponent from "../component/FormComponent";
import PrivateRoute from "./PrivateRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Cregister" element={<CompanyRegister />} />

      <Route element={<PrivateRoute />}>
        <Route path="/createTask" element={<FormComponent />} />
      </Route>
    </Routes>
  );
};

export default Routers;
