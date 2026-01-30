import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import LoginPage from "../pages/Login";
import VerifyEmail from "../pages/Login/VerifyEmail";
import ForgotPassword from "../pages/Login/ForgotPassword";



import HomePage from "../pages/Home/HomePage";
import DiscoveryPage from "../pages/Discovery/DiscoveryPage";
import SearchPage from "../pages/Search/SearchPage";
import PropertyDetailPage from "../pages/PropertyDetail/PropertyDetailPage";
import ChatPage from "../pages/Chat/ChatPage";
import ReputationPage from "../pages/Reputation/ReputationPage";
import ActiveRentalPage from "../pages/Rental/ActiveRentalPage";

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
    path: "/chat",
    element: <ChatPage />,
  },
  {
    path: "/reputation",
    element: <ReputationPage />,
  },
  {
    path: "/my-rental",
    element: <ActiveRentalPage />,
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
