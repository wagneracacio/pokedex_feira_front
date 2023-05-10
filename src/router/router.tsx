import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { Score } from "../pages/Score";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/score",
    element: <Score />,
  },
]);
