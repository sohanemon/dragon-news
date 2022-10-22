import { Navigate, useLocation } from "react-router-dom";
import { useUserContext } from "../contexts/user-provider";
import { VscLoading } from "react-icons/vsc";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, isUserLoaded } = useUserContext();
  if (!isUserLoaded) {
    return (
      <>
        <VscLoading className='animate-spin  w-full text-4xl text-gray-600' />
      </>
    );
  }
  if (!user) return <Navigate state={location} to={"/login"} replace />;
  return children;
};

export default PrivateRoute;
