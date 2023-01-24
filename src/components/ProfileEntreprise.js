import React, { useState } from 'react';

function ProfileEntreprise() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    // Code to handle form submission and update entreprise's profile
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
Password:
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
className="form-input mt-1 block w-full"
/>
</label>
<button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Update Profile</button>
</form>
);
}

export default ProfileEntreprise;