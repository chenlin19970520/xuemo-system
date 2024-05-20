import { lazy } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import lazyLoad from "./lazyLoad";

const childrenRoutes: RouteObject[] = [
    { path: "user", element: lazyLoad(lazy(() => import("@/pages/User"))) },
];
const routers: RouteObject[] = [
  {
    path: "/",
    element: lazyLoad(lazy(() => import("@/pages/Home/Home"))),
    children: childrenRoutes,
  },
];

const router = createBrowserRouter(routers);

export { router };
