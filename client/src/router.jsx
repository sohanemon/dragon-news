import { createBrowserRouter } from "react-router-dom";
import Category from "./components/category";
import Login from "./components/login";
import News from "./components/news";
import Register from "./components/register";
import Main from "./Layout/main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Category />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/news/:id",
        element: <News />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
