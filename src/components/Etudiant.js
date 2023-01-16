import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Etudiant = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://127.0.0.1:8000/api/etudiants')
      .then(res => setData(res.data['hydra:member']))
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="container mx-auto p-6 font-mono">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Age</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white">
            {data.map((etudiant, index) => (
              <tr key={index} className="text-gray-700">
                <td className="px-4 py-3 border">
                  <div className="flex items-center text-sm">
                    <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                      <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-black">{etudiant.name}</p>
                      <p className="text-xs text-gray-600">{etudiant.cv}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-ms font-semibold border">{etudiant.name}</td>
                <td className="px-4 py-3 text-xs border">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                </td>
                <td className="px-4 py-3 text-sm border">{etudiant.name}</td>
              </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Etudiant;