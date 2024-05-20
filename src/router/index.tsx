import { lazy } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import lazyLoad from "./lazyLoad";


export declare type MenuRouteObject = {
    label?: string;
} & RouteObject

const childrenRoutes: RouteObject[] = [
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
