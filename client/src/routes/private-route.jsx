import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/user-provider";

const PrivateRoute = ({ children }) => {
  const { user } = useUserContext();
  if (user?.uid) return <>{children}</>;
  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
