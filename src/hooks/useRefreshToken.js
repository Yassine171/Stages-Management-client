import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.post('/token/refresh', 
            JSON.stringify({ refresh_token:localStorage.getItem('refresh_token') }),
            // withCredentials: true
            {
                headers: { 'Content-Type': 'application/json' },
                // withCredentials: true
            }
        );
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('token',response.data.referesh_token);
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.token);
            return { ...prev, token: response.data.token,refresh_token:response.data.referesh_token }
        });
        return response.data.token;
    }
    return refresh;
};

export default useRefreshToken;
