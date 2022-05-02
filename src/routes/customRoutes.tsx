import { Navigate, useLocation } from "react-router";

export function PrivateRoute({ isLoggedIn, children }: { isLoggedIn: boolean; children: JSX.Element }) {
  const prevPath = window.location.pathname + window.location.search || "/";

  return isLoggedIn ? children : <Navigate to="/access/wallet" state={{ from: prevPath }} replace />;
}

export function AuthRoute({ isLoggedIn, children }: { isLoggedIn: boolean; children: JSX.Element }) {
  const location = useLocation();

  return !isLoggedIn ? children : <Navigate to="/dashboard" state={{ from: location }} replace />;
}
