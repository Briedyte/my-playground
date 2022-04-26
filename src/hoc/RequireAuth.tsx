import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const RequireAuth = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/authentication" state={{ from: location }} replace />
  );
};

export default RequireAuth;
