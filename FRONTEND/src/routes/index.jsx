import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import VerifyEmail from "../pages/Login/VerifyEmail";
import ForgotPassword from "../pages/Login/ForgotPassword";
import LandlordDashboard from "../pages/Landlord/Dashboard";
import PropertiesManagement from "../pages/Landlord/PropertiesManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <LoginPage />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/landlord",
    element: <LandlordDashboard />,
  },
  {
    path: "/landlord/properties",
    element: <PropertiesManagement />,
  },
  // Catch all 404
  {
    path: "*",
    element: <div className="text-white">404 Not Found</div>,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
