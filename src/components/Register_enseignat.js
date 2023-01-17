import React, { useState } from 'react'

const Register_enseignat = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    modules: []
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  
  const handleModulesChange = (event) => {
    const modules = Array.from(event.target.selectedOptions).map(option => option.value);
    setFormData({ ...formData, modules });
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
    <label className="block text-gray-700 font-medium mb-2" htmlFor="modules">
      Modules
    </label>
    <select 
      className="border border-gray-400 p-2 rounded-lg w-full"
      id="modules"
      name="modules"
      multiple
      value={formData.modules}
      onChange={handleModulesChange}
      required
    >
      <option value="module1">Java</option>
      <option value="module2">R</option>
      <option value="module3ue">Compliation</option>
      <option value="module2">Optique</option>
      <option value="module3">Mecaniq</option>
    </select>
  </div>

  <button className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600">
    Register
  </button>
</form>
);
}


export default Register_enseignat