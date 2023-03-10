import Etudiant from './components/Etudiant';
// import Register from './components/Register';
// import Login from './components/Login';
// import Home from './components/Home';
import Layout from './components/Layout';
// import Editor from './components/Editor';
// import Admin from './components/Admin';
import Missing from './components/Missing';
// import Unauthorized from './components/Unauthorized';
// import LinkPage from './components/LinkPage';
// import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Espaces from './components/Espaces';
import Register_enseignat from './components/Register_enseignat';
import Register_etudiant from './components/Register_etudiant';
import Register_entreprise from './components/Register_entreprise';
import Login from './components/Login';
import RequireAuth from './components/RequireAuth';
import Prof from './components/Prof';
import Entreprise from './components/Entreprise';
import ProfileEtudiant from './components/ProfileEtudiant';
import ProfileProf from './components/ProfileProf';

// const ROLES = {
//   'User': 2001,
//   'Editor': 1984,
//   'Admin': 5150
// }

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="/espaces" element={<Espaces />}/>
        <Route path="/register_enseignat" element={<Register_enseignat />}/>
        <Route path="/register_etudiant" element={<Register_etudiant />}/>
        <Route path="/register_entreprise" element={<Register_entreprise />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/etudiant" element={<Etudiant />} />
        <Route path="/profile/etudiant" element={<ProfileEtudiant />} />
        <Route path="/profile/prof" element={<ProfileProf />} />
        {/* <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} /> */}

{/* allowedRoles={[ROLES.User]} */}
        <Route element={<RequireAuth />}> 
        <Route path="/etudiants" element={<Etudiant />} />
        <Route path="/entreprises" element={<Entreprise />} />
        <Route path="/profs" element={<Prof />} />
        </Route>

        {/* we want to protect these routes
     
        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
          <Route path="lounge" element={<Lounge />} />
        </Route> 
        */}

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;