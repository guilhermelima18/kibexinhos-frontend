import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export function PrivateRoutes({ Component }: any) {
  const { token } = useContext(AuthContext);

  return token ? (
    <Component />
  ) : (
    <Navigate to="/login" state={{ from: "/login" }} />
  );
}
