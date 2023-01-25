import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

function ProfileEntreprise() {
  const token = localStorage.getItem('token'); // assuming you have the token stored in localStorage
  const decoded = jwtDecode(token);
  console.log(decoded);

  const [entreprise, setEntreprise] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get(`/api/entreprises/${decoded.username}`, {
          signal: controller.signal
        });
        console.log(response);
        isMounted && setEntreprise({...response.data, password: ""});
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
    console.log(entreprise);
  };


  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
      <label className="block font-medium text-lg mb-2">
        Name:
        <input 
          type="text" 
          value={entreprise.name} 
          onChange={e => setEntreprise(prev => ({ ...prev, name: e.target.value }))}
          className="form-input mt-1 block w-full" 
        />
      </label>
      <label className="block font-medium text-lg mb-2">
        Email:
        <input 
          type="email" 
          value={entreprise.email} 
          onChange={e => setEntreprise(prev => ({ ...prev, email: e.target.value }))}
          className="form-input mt-1 block w-full" 
/>
</label>
<label className="block font-medium text-lg mb-2">
Password:
<input
type="password"
value={entreprise.password}
onChange={e => setEntreprise(prev => ({ ...prev, password: e.target.value }))}
className="form-input mt-1 block w-full"
/>
</label>
<button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Update Profile</button>
</form>
);
}

export default ProfileEntreprise;