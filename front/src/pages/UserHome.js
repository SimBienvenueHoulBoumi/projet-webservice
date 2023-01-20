import '../App.css';
import {useState, useEffect} from "react"
import imageFondMeteo from '../images/meteo.jpg';

import RegisterModal from '../components/RegisterModal';
import useGeoLocation from '../hooks/useGeoLocation';


import useCurrentDateTimestamp from '../hooks/useCurrentDateTimestam';

function UserHome() {
  
  const [showRegister, setShowRegister] = useState(false)
  const [geoCode, setGeoCode] = useState("");
  const [seLocaliser, setSeLocaliser] = useState([])
  const location = useGeoLocation();

  const [selectDate, setSelectDate] = useState(Date.now())

  const [meteo,setMeteo] = useState({})


  // recupérer la position locale
  const Maposition = (e) => {
    e.preventDefault();
    setSeLocaliser(location)
  }

  useEffect(() => {
    if(seLocaliser && seLocaliser !== []){
    const dataLocation = async () => {
      try {
        const data = await (await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${seLocaliser.coordinates.lat}&longitude=${seLocaliser.coordinates.lng}&hourly=temperature_2m`)).json()
        setMeteo(data)
      } catch (error) {
        console.error()
      }
    }

    dataLocation();
    }
  }, [seLocaliser]);

  const now = new Date();

  // information de la date du jour
  console.log((now.getDay() * 4))
  console.log(now.getFullYear())
  console.log(now.getMonth() + 1)
  
  const currentDate = new Intl.DateTimeFormat('fr-FR').format(now);;

  const currentTimestamp = useCurrentDateTimestamp(meteo.hourly? meteo.hourly.time:[])

  console.log(currentTimestamp === null ? [] : {currentTimestamp})
  console.log({currentDate})

  

  const backgroundCoverImageStyle = {
    backgroundImage: `url(${imageFondMeteo})`,
    backgroundSize: "cover",
    height: "500px",
  }

  return (
    <div className="container m-auto w-full">
      {/* {meteo? <p>{seLocaliser.coordinates.lat}:{seLocaliser.coordinates.lng}</p>: null} */}
        <div className="flex flex-row justify-between">
          {showRegister? <RegisterModal setOpenModal={setShowRegister}/>: null}
            <form className="w-full">
                <div className="flex flex-row">
                  <input className="border rounded p-2 m-1 w-[250px] basis-1/4 shadow-md" 
                         type="text" 
                         value={geoCode}
                         onChange={setGeoCode}
                         placeholder="Entre une localité" />
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
                  <button 
                     className="flex uppercase rounded p-2 bg-green-200 hover:bg-green-400 m-1 basis-[10%] shadow-md  w-[50px]"
                      onClick={Maposition}>
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
            <div className="ml-10 font-semibold pt-5 text-left">
              {/* Date : {meteo.hourly.time !== undefined ?meteo.hourly.time.map(timestamp => <p>{timestamp}</p>): ''} */}
            </div>
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
