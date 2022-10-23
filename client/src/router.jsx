import { createBrowserRouter } from "react-router-dom";
import Category from "./components/category";
import Login from "./components/login";
import News from "./components/news";
import Register from "./components/register";
import TermsAndConditions from "./components/terms-and-conditions";
import Main from "./Layout/main";
import Secondary from "./Layout/secondary";
import PrivateRoute from "./routes/private-route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Secondary />,
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
            element: (
              <PrivateRoute>
                <News />
              </PrivateRoute>
            ),
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
      {
        path: "/terms-conditions",
        element: <TermsAndConditions />,
      },
    ],
  },
]);
