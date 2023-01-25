import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from '../api/axios';

function ProfileEtudiant() {
  const token = localStorage.getItem('token'); // assuming you have the token stored in localStorage
  const decoded = jwtDecode(token);
  // console.log(decoded);

  const [etudiant, setEtudiant] = useState([]);
  const [oldEtudiant,setOldEtudiant]=useState([]);
  const [id, setId] = useState('');
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const formData = new FormData();


  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get(`/api/etudiants/${decoded.username}`, {
          signal: controller.signal
        });
         console.log(response);
        isMounted && setEtudiant({...response.data, password: "",filiere:response.data.filiere.id});
          setId(response.data.id);
          setOldEtudiant({...etudiant}); 
        // console.log(etudiant);
      } catch (err) {
      //  console.error(err);
         navigate('/login', { state: { from: location }, replace: true });
      }
    };


    getUsers();
   

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

 console.log('old',oldEtudiant);

    console.log('new',etudiant);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e)
    // Code to handle form submission and update user's profile
    // console.log(etudiant);
    const controller = new AbortController();

    if(!etudiant.password) {
      delete etudiant.password;

  }  
      delete etudiant.id;
      delete etudiant.cv_name;

      const fields = ['name', 'email', 'filiere', 'nv_scolaire','cv'];
      for (const field of fields) {
      //   if (etudiant[field] && oldEtudiant[field]!==etudiant[field]) {
        formData.append(field, etudiant[field]);
        console.log(etudiant[field]);
    console.log(formData);
      //   }
      }
    
  

      const response = await axiosPrivate.post(`/api/etudiants/update/${id}`,
      formData,
      {
          headers: { 'Content-Type': 'multipart/form-data' },
          //withCredentials: true
          signal: controller.signal
      }
  );
  controller.abort();
  console.log("response catch");

  console.log(response);

    
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg" enctype="multipart/form-data">
      <label className="block font-medium text-lg mb-2">
        Name:
        <input
          type="text"
          value={etudiant.name}
          onChange={e => setEtudiant(prev => ({ ...prev, name: e.target.value }))}
          className="form-input mt-1 block w-full"
          />
      </label>
      <label className="block font-medium text-lg mb-2">
      Email:
      <input
      type="email"
      value={etudiant.email}
      onChange={e => setEtudiant(prev => ({ ...prev, email: e.target.value }))}
      className="form-input mt-1 block w-full"
      />
      </label>
      <label className="block font-medium text-lg mb-2">
      Password:
      <input
      type="password"
      value={etudiant.password}
      onChange={e => setEtudiant(prev => ({ ...prev, password: e.target.value }))}
      className="form-input mt-1 block w-full"
      />
      </label>
      <label className="block font-medium text-lg mb-2">
      Filiere:
      <select 
      
      className="form-input mt-1 block w-full"
      value={etudiant.filiere?.id}
      onChange={e => setEtudiant(prev => ({ ...prev, filiere: e.target.value }))}
      >
      <option value="1">Info</option>
      <option value="2">Meca</option>
      <option value="3">Indus</option>
      </select>
</label>
<label className="block font-medium text-lg mb-2">
      Niveau Scolaire:
      <select 
      
      className="form-input mt-1 block w-full"
      value={etudiant.nv_scolaire}
      onChange={e => setEtudiant(prev => ({ ...prev, nv_scolaire: e.target.value }))}
      >
      <option value="CI1">CI1</option>
      <option value="CI2">CI2</option>
      <option value="CI3">CI3</option>
      </select>
</label>
      <div className="px-4 py-3 text-xs border">
    {etudiant.cv_name ? (
        <a href={etudiant.cv_name} className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
            Download
        </a>
    ) : (
        <p className="text-red-700">No CV uploaded</p>
    )}
</div>

      <label className="block font-medium text-lg mb-2">
        CV:
        <input 
          type="file" 
          onChange={e => setEtudiant(prev => ({ ...prev, cv: e.target.files[0] }))}
          className="form-input mt-1 block w-full" 
        />
      </label>
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Update Profile</button>
    </form>
  );
}

export default ProfileEtudiant;
