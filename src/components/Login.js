import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import axios from '../api/axios';
const LOGIN_URL = '/api/login_check';
const Login = () => {

  const { setAuth} = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/etudiants";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await axios.post(LOGIN_URL,
              JSON.stringify({ username:user, password:pwd }),
              {
                  headers: { 'Content-Type': 'application/json' },
                  // withCredentials: true
              }
          );
          console.log(JSON.stringify(response?.data));
          //console.log(JSON.stringify(response));
          const token = response?.data?.token;
          const refresh_token = response?.data?.refresh_token;
          setAuth({ user, pwd, refresh_token, token });
          setUser('');
          setPwd('');
          navigate(from, { replace: true });
      } catch (err) {
          if (!err?.response) {
              setErrMsg('No Server Response');
          } else if (err.response?.status === 400) {
              setErrMsg('Missing Username or Password');
          } else if (err.response?.status === 401) {
              setErrMsg('Unauthorized');
          } else {
              setErrMsg('Login Failed');
          }
          errRef.current.focus();
      }
  }


  return (
  <div className="bg-white p-6 rounded-lg">
                {errMsg && <p ref={errRef} className='bg-red-500 text-white p-4 rounded-lg {errMsg ? "errmsg" : "offscreen"}' aria-live="assertive">{errMsg}</p>}

    {/* {error && <div className="bg-red-500 text-white p-4 rounded-lg">{error}</div>} */}
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="user">
          Email
        </label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="email"
          name="user"
          required
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
          />
          </div>
          <button className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600">
    Login
  </button>
       
</form>
 <div className="text-center mt-4">
 Don't have an account? <a href="/espaces" className="text-pink-500 hover:underline">Register</a>
</div>
</div>
);
}

export default Login