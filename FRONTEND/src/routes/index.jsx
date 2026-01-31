import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import LoginPage from "../pages/Login";
import VerifyEmail from "../pages/Login/VerifyEmail";
import ForgotPassword from "../pages/Login/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/discovery",
    element: <DiscoveryPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/property/:id",
    element: <PropertyDetailPage />,
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

  },
  {
    path: "/reputation",
    element: <ReputationPage />,
  },
  {

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
