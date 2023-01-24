import React, { useState } from 'react';

function ProfileProf() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modules, setModules] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, modules);
    // Code to handle form submission and update user's profile
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
      <label className="block font-medium text-lg mb-2">
        Modules:
        <select
          multiple
          value={modules}
          onChange={(e) => setModules(e.target.options)}
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
