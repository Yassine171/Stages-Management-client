import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

function ProfileProf() {
  const token = localStorage.getItem('token'); // assuming you have the token stored in localStorage
  const decoded = jwtDecode(token);
  console.log(decoded);

  const [prof, setProf] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get(`/api/profs/${decoded.username}`, {
          signal: controller.signal
        });
        console.log(response);
        isMounted && setProf({...response.data, password: ""});
            } catch (err) {
        console.error(err);
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission and update user's profile
    console.log(prof);
  };



  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
      <label className="block font-medium text-lg mb-2">
        Name:
        <input 
          type="text" 
          value={prof.name} 
          onChange={e => setProf(prev => ({ ...prev, name: e.target.value }))}
          className="form-input mt-1 block w-full" 
        />
      </label>
      <label className="block font-medium text-lg mb-2">
        Email:
        <input 
          type="email" 
          value={prof.email} 
          onChange={e => setProf(prev => ({ ...prev, email: e.target.value }))}
          className="form-input mt-1 block w-full" 
        />
      </label>
      <label className="block font-medium text-lg mb-2">
        Password:
        <input 
          type="password" 
          value={prof.password} 
          onChange={e => setProf(prev => ({ ...prev, password: e.target.value }))}
          className="form-input mt-1 block w-full" 
        />
      </label>
      <label className="block font-medium text-lg mb-2">
        Modules:
        <select
          multiple
          value={prof.modules} 
          onChange={e => setProf(prev => ({ ...prev, modules: e.target.value }))}
          className="form-select mt-1 block w-full"
        >
          <option value="Module 1">Module 1</option>
          <option value="Module 2">Module 2</option>
          <option value="Module 3">Module 3</option>
          <option value="Module 4">Module 4</option>
        </select>
      </label>
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Update Profile</button>
    </form>
  );
}

export default ProfileProf;
