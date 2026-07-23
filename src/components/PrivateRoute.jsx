import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../globalvalues/AuthContext";


export default function PrivateRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/" />;
}
