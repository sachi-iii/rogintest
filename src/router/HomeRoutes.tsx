import { Home } from "../components/pages/Home";
import { User } from "../components/pages/User";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/user",
    exact: false,
    children: <User />,
  },
];
