import React, { useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const Etudiant = () => {
  const [etudiants, setEtudiants] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

       const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/api/etudiants/', {
                    signal: controller.signal
                });
                console.log(response);
                isMounted && setEtudiants(response.data);
            } catch (err) {
                console.error(err);
                Navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
  }, []);

  return (
    <section className="container mx-auto p-6 font-mono">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Filiere</th>
                <th className="px-4 py-3">Niveau Scolaire</th>
                <th className="px-4 py-3">CV</th>
              </tr>
            </thead>
            <tbody className="bg-white">
            {etudiants.map((etudiant, index) => (
              <tr key={index} className="text-gray-700">
                <td className="px-4 py-3 border">
                  <div className="flex items-center text-sm">
                    <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                      <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-black">{etudiant.name}</p>
                      <p className="text-xs text-gray-600">{etudiant.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-ms font-semibold border">{etudiant.filiere.name}</td>
                <td className="px-4 py-3 text-sm border">{etudiant.nv_scolaire}</td>
                <td className="px-4 py-3 text-xs border">
                  <a  className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm" href={etudiant.cv_name}>
                     Download
               </a>
                </td>
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