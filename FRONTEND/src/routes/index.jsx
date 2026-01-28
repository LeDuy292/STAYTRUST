import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import LoginPage from '../pages/Login';

import VerifyEmail from '../pages/Login/VerifyEmail';
import ForgotPassword from '../pages/Login/ForgotPassword';

// Giả sử bạn có trang Home sau này
const HomePage = () => <div className="text-white text-center pt-20">Welcome Home (Demo)</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth" replace />,
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
  // Catch all 404
  {
    path: "*",
    element: <div className="text-white">404 Not Found</div>
  }
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;