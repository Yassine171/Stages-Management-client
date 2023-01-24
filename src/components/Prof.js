import React, { useEffect, useRef, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const Prof = () => {
  const [profs, setProfs] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  const errRef = useRef();
  const [errMsg, setErrMsg] = useState('');


  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

       const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/api/profs/', {
                    signal: controller.signal
                });
                console.log(response);
                isMounted && setProfs(response.data);
            } catch (err) {
              if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401 || err.response?.status === 403) {
              // Navigate('/login', { state: { from: location }, replace: true });
              setErrMsg('unauthorized');

            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
                console.error(err);
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
      {errMsg && <p ref={errRef} className='bg-red-500 text-white p-4 rounded-lg {errMsg ? "errmsg" : "offscreen"}' aria-live="assertive">{errMsg}</p>}

      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Modules</th>
              </tr>
            </thead>
            <tbody className="bg-white">
            {profs.map((prof, index) => (
              <tr key={index} className="text-gray-700">
                <td className="px-4 py-3 border">
                  <div className="flex items-center text-sm">
                    <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                      <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-black">{prof.name}</p>
                      <p className="text-xs text-gray-600">{prof.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-ms font-semibold border">
                <ul className="list-disc pl-5">
                  {prof._modules.map((item, index) => (
                    <li key={index} className="text-lg">{item}</li>
                  ))}
                </ul>
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

export default Prof