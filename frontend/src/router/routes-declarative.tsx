import { Route, Routes } from "react-router";
import AuthPage from "../pages/auth-page";
import Layout from "../layout";
import Homepage from "../pages/homepage";
import HistoryPage from "../pages/history-page";

export default function RoutesDeclarative() {
  return (
    <Routes>
      <Route path="/sign-in/*" Component={AuthPage} />
      <Route path="/sign-up/*" Component={AuthPage} />

      <Route Component={Layout}>
        <Route path="/" Component={Homepage} />
        <Route path="/history" Component={HistoryPage} />
      </Route>
    </Routes>
  );
}
