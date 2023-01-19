import React from 'react';
import {useState} from "react"

import ModalUpdate from '../components/ModalUpdate'; 
import DeleteModal from '../components/DeleteModal';
import DetailsModal from '../components/DetailsModal';

const UserProfile = () => {
    const [showUpadate, setShowUpdate]= useState(false)
    const [showDelete, setShowDelete]= useState(false)
    const [showDetails, setShowDetails]= useState(false)

    return (
        <div className="container m-auto px-2">
            {showUpadate? <ModalUpdate setOpenModal={setShowUpdate}/>: null}
            {showDelete? <DeleteModal setOpenModal={setShowDelete}/>: null}
            {showDetails? <DetailsModal setOpenModal={setShowDetails}/>: null}
            
            <div className="text-center text-2xl border-2 mt-2 py-2 uppercase">Liste des températures enregistrées</div>
            {/* liste des température enregistrées */}
            <div className="mt-2">
                <div className="flex justify-between">
                    <div className="border-2 flex justify-between p-2 basis-[68%]">
                        <div>Bangui</div>
                        <div>19-01-2022</div>
                    </div>
                    <div>
                        <button 
                            className="uppercase rounded p-2  bg-green-200 hover:bg-green-400 mx-1 basis-[10%] shadow-md  w-[150px]"
                             onClick={() => setShowDetails(true)}>Voir</button>
                        <button 
                            className="uppercase rounded p-2  bg-blue-200 hover:bg-blue-400 mx-1 basis-[10%] shadow-md  w-[150px]"
                            onClick={() => setShowUpdate(true)}>Modifier</button>
                        <button 
                            className="uppercase rounded p-2 bg-red-200 hover:bg-red-400 mx-1 basis-[10%] shadow-md  w-[150px]"
                             onClick={() => setShowDelete(true)}>Supprimer</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
