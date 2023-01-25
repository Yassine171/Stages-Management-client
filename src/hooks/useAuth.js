import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    const { auth } = useContext(AuthContext);

    if(auth?.token){
        localStorage.setItem('token',auth?.token)
    }
    if(auth?.refresh_token){
        localStorage.setItem('refresh_token',auth?.refresh_token)
    }
    useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
    return useContext(AuthContext);
}

export default useAuth;