import { useAuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  const { user } = useAuthContext();
  if (user) {
    return <Navigate to="/la-bruja-verde/dashboard" />;
  }
  return children;
}

export default PublicRoute;
