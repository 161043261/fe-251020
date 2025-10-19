import type { RouteObject } from "react-router";
import Layout from "../layout";
import AuthPage from "../pages/auth-page";
import HistoryPage from "../pages/history-page";
import Homepage from "../pages/homepage";

const routesData: RouteObject[] = [
  {
    path: "/sign-in/*",
    Component: AuthPage,
  },
  {
    path: "/sign-up/*",
    Component: AuthPage,
  },
  {
    // 布局路由: 没有 path 属性, 只提供统一的页面布局
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Homepage,
      },
      {
        path: "/history",
        Component: HistoryPage,
      },
    ],
  },
];

export default routesData;
