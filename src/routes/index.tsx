import { Route, Routes } from "react-router";
import NotFound from "../pages/404";
import AccessWallet from "../pages/accessWallet";
import CreateWallet from "../pages/createWallet";
import DashBoard from "../pages/dashboard";
import HomePage from "../pages/homepage";
import { useAppSelector } from "../store/hooks";
import { AuthRoute, PrivateRoute } from "./customRoutes";

export default function MainRoute() {
  const user = useAppSelector((state) => state.user);

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />

      <Route path="/" element={<AuthRoute isLoggedIn={user.isLoggedIn} children={<HomePage />} />} />
      <Route path="/create/wallet" element={<AuthRoute isLoggedIn={user.isLoggedIn} children={<CreateWallet />} />} />
      <Route path="/access/wallet" element={<AuthRoute isLoggedIn={user.isLoggedIn} children={<AccessWallet />} />} />

      <Route path="/dashboard" element={<PrivateRoute isLoggedIn={user.isLoggedIn} children={<DashBoard />} />} />
    </Routes>
  );
}
