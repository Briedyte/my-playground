import { RouteConfig } from "../../config/routes";
import Authentication from "./Authentication";
import CommingSoon from "./CommingSoon";
import Homepage from "./Homepage";
import Userpage from "./Userpage";

type RouteInfo = {
  path: string;
  component: React.ComponentType;
  title: string;
};

export const publicRoutes: RouteInfo[] = [
  {
    path: RouteConfig.Home,
    component: Homepage,
    title: "Home",
  },
  {
    path: RouteConfig.Authentication,
    component: Authentication,
    title: "Authentication",
  },
  {
    path: RouteConfig.CommingSoon,
    component: CommingSoon,
    title: "Comming Soon",
  },
];



export const privateRoutes: RouteInfo[] = [
  {
    path: RouteConfig.UserPage,
    component: Userpage,
    title: "User Page",
  },
];
