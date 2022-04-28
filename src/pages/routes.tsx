import { RouteConfig } from "@config/routes";
import Authentication from "@pages/Authentication";
import Homepage from "@pages/Homepage";
import Userpage from "@pages/Userpage";
import CommingSoon from "@pages/CommingSoon";

type RouteInfo = {
  path: string;
  component: React.ComponentType;
  title: string;
};

export const publicRoutes: RouteInfo[] = [
  {
    path: RouteConfig.Home,
    component: Homepage,
    title: "My playground",
  },
  {
    path: RouteConfig.Authentication,
    component: Authentication,
    title: "Authentication",
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
