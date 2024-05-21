import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import lazyLoad from "./lazyLoad";
import { MenuRouteObject } from "@/types/router";

const childrenRoutes: MenuRouteObject[] = [
  { path: "user", element: lazyLoad(lazy(() => import("@/pages/User"))) },
];

const routers: MenuRouteObject[] = [
  {
    path: "/",
    label: "首页",
    element: lazyLoad(lazy(() => import("@/pages/Home/Home"))),
    children: childrenRoutes,
  },
];
console.log(routers);
const router = createBrowserRouter(routers);

export { router };
