import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import Products from "../Pages/Products/Products";
import Cart from "../Pages/Cart";
import Category from "../Pages/Category/Category";
import Custom from "../Pages/Custom/Custom";
import Blog from "../Pages/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path:'/category',
        element:<Category></Category>
      },
      {
        path:'/custom',
        element:<Custom></Custom>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/SignUp",
    element: <SignUp></SignUp>,
  },
]);
