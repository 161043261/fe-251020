import type { RouteObject } from "react-router";
import Layout from "../layout";
import AuthPage from "../pages/auth-page";
import HistoryPage from "../pages/history-page";
import Homepage from "../pages/homepage";

const routesData: RouteObject[] = [
  {
    // 前缀路由: 没有 Component 或 element 属性, 只提供统一的路由前缀
    path: "/sign",
    children: [
      {
        path: "in/*", // path: "/sign/in/*"
        Component: AuthPage,
      },
      {
        path: "up/*", // path: "/sign/up/*"
        Component: AuthPage,
      },
    ],
  },
  {
    // 布局路由: 没有 path 属性, 只提供统一的页面布局
    // path: "/",
    Component: Layout,
    children: [
      {
        // 索引路由: index: true, 即默认二级路由
        // index: true,
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
