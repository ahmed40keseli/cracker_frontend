import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/loginPage";
import Register from "../pages/RegisterPage";
import CompanyRegister from "../pages/CregisterPage";
import Task from "../pages/TaskPage";
import PrivateRoute from "./PrivateRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Cregister" element={<CompanyRegister />} />

      <Route element={<PrivateRoute />}>
        <Route path="/createTask" element={<Task />} />
      </Route>
    </Routes>
  );
};

export default Routers;
