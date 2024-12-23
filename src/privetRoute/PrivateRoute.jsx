import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <span className="loading loading-spinner loading-lg text-teal-500"></span>
  //     </div>
  //   );
  // }
  if (loading) return <LoadingSpinner />;
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
