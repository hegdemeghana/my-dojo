import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/index";
import Dashboard from "../pages/Dashboard/index";
import ViewDetails from "../pages/Details/index";

const MainRoutes = ({ isAuthenticated = true }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/view" element={<ViewDetails />} />

    </Routes>
  );
};

export default MainRoutes;