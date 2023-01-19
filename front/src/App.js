import './App.css';

import {Route,Link, Routes} from "react-router-dom";

import UserProfile from './pages/UserProfile';
import UserHome from './pages/UserHome';

function App() {

  return (
    <>
        {/* entete affichant information utilisateurs */}
        <div className="bg-cyan-100 border p-2 py-3 flex flex-row justify-between">
            <div className="uppercase">Sim Bienvenu</div>
            <button className="hover:text-rose-900 uppercase">Deconnection</button>
        </div>
        <div className="m-auto mx-10 my-1 flex justify-end">
          <Link to="./pages/UserHome">
            <button className="button bg-cyan-100 uppercase hover:bg-cyan-400 mt-1 p-2 shadow-md hover:border-y-black rounded w-[250px]">Accueil</button>
          </Link>
          <Link to="./pages/UserProfile">
            <button className="button bg-blue-100 uppercase hover:bg-blue-400 mt-1 ml-1 p-2 shadow-md hover:border-y-black rounded w-[250px]">Enregistrements</button>
          </Link>
        </div>
       <Routes>
         <Route path="/pages/UserHome" element={<UserHome/>}/>
         <Route path="/pages/UserProfile" element={<UserProfile/>}/>
       </Routes>
    </>
    
  );
}

export default App;
