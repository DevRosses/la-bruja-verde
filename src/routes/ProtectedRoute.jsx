import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
function ProtectedRoute({ children }) {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/la-bruja-verde/login" />;
  }
  return children;
}
export default ProtectedRoute;
