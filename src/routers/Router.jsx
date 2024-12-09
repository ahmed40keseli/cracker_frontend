import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/loginPage/loginPage";
import Register from "../pages/registerPage/RegisterPage";
import CompanyRegister from "../pages/cregisterPage/CregisterPage";
import Task from "../pages/taskPage/TaskPage";
import PrivateRoute from "./PrivateRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Cregister" element={<CompanyRegister />} />

      <Route path="/createTask" element={<Task />} />
      {/* <Route path="/createTask" element={<PrivateRoute element={<Task />} />} /> */}
    </Routes>
  );
};

export default Routers;
