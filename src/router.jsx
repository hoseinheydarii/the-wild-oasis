import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import NewUsers from "./pages/Users";
import Cabins from "./pages/Cabins";
import AppLayout from "./ui/AppLayout";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <Navigate replace to="dashboard" />,
        index: true,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "bookings/:bookingId",
        element: <Booking />,
      },
      {
        path: "checkin/:bookingId",
        element: <Checkin />,
      },
      {
        path: "cabins",
        element: <Cabins />,
      },
      {
        path: "users",
        element: <NewUsers />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
