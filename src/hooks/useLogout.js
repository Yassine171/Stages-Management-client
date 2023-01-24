import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    
    const logout = () => {
        setAuth({});
        try {
            localStorage.removeItem("token");
            localStorage.removeItem("refresh_token");
            Navigate('/login', { state: { from: location }, replace: true });
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout