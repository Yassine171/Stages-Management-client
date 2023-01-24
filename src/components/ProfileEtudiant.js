import React, { useState } from 'react';

function ProfileEtudiant() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [filiere, setFiliere] = useState('');
  const [niveauScolaire, setNiveauScolaire] = useState('');
  const [cv, setCV] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission and update user's profile
    console.log(name, email, filiere, niveauScolaire, cv);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
      <label className="block font-medium text-lg mb-2">
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="form-input mt-1 block w-full" 
        />
      </label>
      <label className="block font-medium text-lg mb-2">
        Email:
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="form-input mt-1 block w-full" 
        />
      </label>
      <label className="block font-medium text-lg mb-2">
        Filiere:
        <input 
          type="text" 
          value={filiere} 
          onChange={(e) => setFiliere(e.target.value)} 
          className="form-input mt-1 block w-full" 
        />
      </label>
      <label className="block font-medium text-lg mb-2">
        Niveau Scolaire:
        <input 
          type="text" 
          value={niveauScolaire} 
          onChange={(e) => setNiveauScolaire(e.target.value)} 
          className="form-input mt-1 block w-full" 
        />
      </label>
      <label className="block font-medium text-lg mb-2">
        CV:
        <input 
          type="file" 
          onChange={(e) => setCV(e.target.files[0])} 
          className="form-input mt-1 block w-full" 
        />
      </label>
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Update Profile</button>
    </form>
  );
}

export default ProfileEtudiant;
