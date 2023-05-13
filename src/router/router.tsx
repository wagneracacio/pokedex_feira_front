import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { Score } from "../pages/Score";
import { Scan } from "../pages/Scan";
import { Profidex } from "../pages/Profidex";

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
    path: "/scan",
    element: <Scan />,
  },
  {
    path: "/score",
    element: <Score />,
  },
  {
    path: "/profidex",
    element: <Profidex />,
  },
]);
