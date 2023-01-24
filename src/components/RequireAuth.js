import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
if(!auth?.token){
    auth.token=localStorage.getItem('token');
}
    return (
        // auth?.roles?.find(role => allowedRoles?.includes(role))
        //     ? <Outlet />
        //     : 
        
      auth?.token 
                ? <Outlet />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;