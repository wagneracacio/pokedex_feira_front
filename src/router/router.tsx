import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { Score } from "../pages/Score";
import { Scan } from "../pages/Scan";
import { Profidex } from "../pages/Profidex";
import { Galeria } from "../pages/Galeria";
import { PrivateRoute } from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: "/galeria",
    element: (
      <PrivateRoute>
        <Galeria />
      </PrivateRoute>
    ),
  },
  {
    path: "/scan",
    element: (
      <PrivateRoute>
        <Scan />
      </PrivateRoute>
    ),
  },
  {
    path: "/score",
    element: (
      <PrivateRoute>
        <Score />
      </PrivateRoute>
    ),
  },
  {
    path: "/profidex",
    element: (
      <PrivateRoute>
        <Profidex />
      </PrivateRoute>
    ),
  },
]);
