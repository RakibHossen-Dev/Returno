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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        element: <AddLostAndFoundItem></AddLostAndFoundItem>,
      },
      {
        path: "/allRecoveredItems",
        element: <AllRecoveredItems></AllRecoveredItems>,
      },
      {
        path: "/manageMyItems",
        element: <ManageMyItems></ManageMyItems>,
      },
    ],
  },
]);

export default router;
