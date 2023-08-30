import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsPrivate({children}) {
    const { isLoggedIn, isLoading } = useContext(AuthContext);
 
    if (isLoading) return <div className="Loading"> Loading..</div>;
   
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  }

export default IsPrivate
