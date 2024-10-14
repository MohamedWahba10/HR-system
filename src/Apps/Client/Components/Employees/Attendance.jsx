import React, { useState } from 'react'
import Nobranch from "../../../../assets/svgs/nobranch.svg";
import AttendenceModal from './AttendenceModal';

export default function Attendance() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='bg-white p-4 w-full'>
      <div className='flex justify-between'>
        <h1 className='text-xl font-semibold'>Attendence Report</h1>
        <div>
          <button onClick={openModal} className='py-1 px-2 bg-primary text-white rounded-lg'>+ Add Attendece</button>
        </div>
      </div>
      <div>
        <img src={Nobranch} alt="No branch" className="w-1/3 mx-auto object-cover" />

        <p className="text-lg text-center font-semibold py-4">No Branches added yet</p>
       </div>

       <AttendenceModal  modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  )
}
