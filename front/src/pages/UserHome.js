import '../App.css';
import {useState} from "react"
import imageFondMeteo from '../images/meteo.jpg';

import RegisterModal from '../components/RegisterModal';

function UserHome() {
  const [showRegister, setShowRegister]= useState(false)
  

  const backgroundCoverImageStyle = {
    backgroundImage: `url(${imageFondMeteo})`,
    backgroundSize: "cover",
    height: "500px",
  }

  return (
    <div className="container m-auto w-full">
        <div className="flex flex-row justify-between">
          {showRegister? <RegisterModal setOpenModal={setShowRegister}/>: null}
            <form className="w-full">
                <div className="flex flex-row">
                  <input className="border rounded p-2 m-1 w-[250px] basis-1/4 shadow-md" type="text" placeholder="Entre une localité" />
                  <button className="flex uppercase rounded p-2 bg-teal-200 hover:bg-teal-400 m-1 w-[10px] basis-[9.5%] shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6">
                      <path strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M4.5 12.75l6 6 9-13.5" />
                      </svg>Valider
                  </button>
                  <button className="flex uppercase rounded p-2 bg-green-200 hover:bg-green-400 m-1 basis-[10%] shadow-md  w-[50px]">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6 rounded">
                      <path strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M4.5 12.75l6 6 9-13.5" />
                      </svg>Localiser
                  </button>
                </div>
            </form>

          {/* select date */}
          <form>
              <div className="flew row">
                  <input className="border p-2 m-1 w-[250px] basis-1/4 shadow-md rounded" type="date"/>
              </div>
          </form>
        </div>
        {/* affichage météo */}
        <div style={backgroundCoverImageStyle} className="m-1 shadow-md">
            <div className="ml-10 font-semibold pt-5 text-left">Date : 30-10-1995</div>
            <div className="mt-40 text-center text-9xl">15 °C</div>   
        </div>
        <div>
          <button className="button bg-cyan-100 uppercase hover:bg-cyan-400 m-1 p-2 shadow-md hover:border-y-black rounded w-[250px]"
                   onClick={() => setShowRegister(true)}>Enregistrer la donnée</button>
        </div>
    </div>
  );
}

export default UserHome;
