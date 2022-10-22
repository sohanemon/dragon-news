import { createBrowserRouter } from "react-router-dom";
import Category from "./components/category";
import News from "./components/news";
import UserProvider from "./contexts/user-provider";
import Main from "./Layout/main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProvider>
        <Main />
      </UserProvider>
    ),
    children: [
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
]);
