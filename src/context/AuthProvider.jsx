import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    if(auth?.token){
        localStorage.setItem('token',auth?.token)
    }
    if(auth?.refresh_token){
        localStorage.setItem('refresh_token',auth?.refresh_token)
    }
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;