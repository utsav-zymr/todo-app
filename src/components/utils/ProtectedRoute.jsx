import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const loginStatus = localStorage.getItem("loginStatus");

  if (loginStatus === "false") {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
};

export default ProtectedRoute;
