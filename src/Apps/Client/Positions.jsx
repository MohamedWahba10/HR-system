import React, { useState } from 'react'
import Nobranch from "../../assets/svgs/nobranch.svg";
import AddPositionModal from './Components/Positions/AddPositionModal';

export default function Positions() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
    
  return (
   <div className='my-4'>
       <div className="bg-white p-4 shadow-round">
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-semibold mb-4">Positions</h1>
        <button onClick={openModal} className="py-1 px-2 bg-primary text-white rounded-lg">
          + Add New Position
        </button>
    </div>
    <div>
      <img
        src={Nobranch}
        alt="No branch"
        className="w-1/3 mx-auto object-cover"
      />

      <p className="text-lg text-center font-semibold py-4">
        No Positions added yet
      </p>
    </div>

    <AddPositionModal modalIsOpen={modalIsOpen} closeModal={closeModal}  />

    </div>
   </div>
  )
}
