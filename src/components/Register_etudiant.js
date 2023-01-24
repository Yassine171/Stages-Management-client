import React, { useState } from 'react';
const Register_etudiant = () => {
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    cv: '',
    filiere_id: '',
    nv_scolaire: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // send form data to the server or handle form submission here
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
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
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="cv">
          CV
        </label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="file"
          id="cv"
          name="cv"
          value={formData.cv}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="filiere_id">
          Filiere
          </label>
        <select 
          className="border border-gray-400 p-2 rounded-lg w-full"
          id="filiere_id"
          name="filiere_id"
          value={formData.filiere_id}
          onChange={handleInputChange}
          required
        >
          <option value="">Select filiere_id</option>
          <option value="1">Info</option>
          <option value="2">Indus</option>
          <option value="3">Meca</option>
        </select>
      </div>
      <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2" htmlFor="nv_scolaire">
      Niveau scolaire
    </label>
    <select 
      className="border border-gray-400 p-2 rounded-lg w-full"
      id="nv_scolaire"
      name="nv_scolaire"
      value={formData.nv_scolaire}
      onChange={handleInputChange}
      required
    >
      <option value="">Select niveau scolaire</option>
      <option value="CI1">CI1</option>
      <option value="CI2">CI2</option>
      <option value="CI3">CI3</option>
    </select>
  </div>

  <button className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600">
    Register
  </button>
</form>
);
}

export default Register_etudiant