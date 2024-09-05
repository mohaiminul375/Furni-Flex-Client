import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/SignUp',
    element:<SignUp></SignUp>
  },
]);
