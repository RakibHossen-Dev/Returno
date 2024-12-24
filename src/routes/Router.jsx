import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import Home from "../components/Home";
import LostAndFound from "../pages/LostAndFound";
import AddLostAndFoundItem from "../pages/AddLostAndFoundItem";
import AllRecoveredItems from "../pages/AllRecoveredItems";
import ManageMyItems from "../pages/ManageMyItems";
import Home from "../pages/Home";
import LostAndFoundDetails from "../pages/LostAndFoundDetails";
import PrivateRoute from "../privetRoute/PrivateRoute";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/lostAndFound",
        element: <LostAndFound></LostAndFound>,
      },
      {
        path: "/addLostAndFoundItem",
        element: (
          <PrivateRoute>
            <AddLostAndFoundItem></AddLostAndFoundItem>,
          </PrivateRoute>
        ),
      },
      {
        path: "/allRecoveredItems",
        element: (
          <PrivateRoute>
            <AllRecoveredItems></AllRecoveredItems>,
          </PrivateRoute>
        ),
      },
      {
        path: "/manageMyItems",
        element: (
          <PrivateRoute>
            <ManageMyItems></ManageMyItems>,
          </PrivateRoute>
        ),
      },
      {
        path: "/lostAndFoundDetails/:id",
        element: (
          <PrivateRoute>
            <LostAndFoundDetails></LostAndFoundDetails>,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
