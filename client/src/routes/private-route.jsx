import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/user-provider";
import { VscLoading } from "react-icons/vsc";
import toast from "react-hot-toast";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isUserLoaded } = useUserContext();

  if (!isUserLoaded) {
    return (
      <>
        <VscLoading className='animate-spin  w-full text-4xl text-gray-600' />
      </>
    );
  }
  if (user && user?.emailVerified) return children;
  if (!user) return <Navigate state={location} to={"/login"} replace />;

  toast.error("Verify your email");
  setTimeout(() => {
    navigate(-1);
  }, 1000);
  return;
};

export default PrivateRoute;
