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
import LandlordHome from "../pages/Landlord/LandlordHome";
import LandlordDashboard from "../pages/Landlord/Dashboard";
import PropertiesManagement from "../pages/Landlord/PropertiesManagement";
import PrimePlans from "../pages/Landlord/PrimePlans";
import Features from "../pages/Landlord/Features";
import Settings from "../pages/Landlord/Settings";
import RoomDetail from "../pages/Landlord/RoomDetail";

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
    path: "/landlord/home",
    element: <LandlordHome />,
  },
  {
    path: "/landlord/dashboard",
    element: <LandlordDashboard />,
  },
  {
    path: "/landlord",
    element: <LandlordDashboard />,
  },
  {
    path: "/landlord/properties",
    element: <PropertiesManagement />,
  },
  {
    path: "/landlord/properties/:id",
    element: <RoomDetail />,
  },
  {
    path: "/landlord/prime",
    element: <PrimePlans />,
  },
  {
    path: "/landlord/features",
    element: <Features />,
  },
  {
    path: "/landlord/settings",
    element: <Settings />,
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
