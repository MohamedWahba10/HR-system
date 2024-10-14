import React, { useState } from 'react'
import ModalContainer from '../../../Common/ModalContainer';
import FormField from '../../../Common/FormField';
import { GoPlus } from 'react-icons/go';

export default function Organization() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  return (
   <>
    <div className='bg-white px-2'>
        <div className='flex justify-end'>
            <button onClick={openModal} className='py-2 px-4 bg-primary text-white rounded-lg flex items-center gap-2'><GoPlus size={24} /> Add New Contract</button>
        </div>
       <form className='flex flex-col gap-4'>
       <div className='grid grid-cols-2 gap-5 mt-4'>
        <div className='w-full'>
            <FormField
                label="Contract Name"
                type="text"
                placeholder="Contract Name"
                disabled
            />
            </div>
            <div className='w-full'>
            <FormField
                label="Contract Name"
                type="text"
                placeholder="Contract Name"
                disabled
            />
            </div>
        </div>
        <div className='grid grid-cols-2 gap-5 mt-4'>
        <div className='w-full'>
            <FormField
                label="Contract Name"
                type="text"
                placeholder="Contract Name"
                disabled
            />
            </div>
            <div className='w-full'>
            <FormField
                label="Contract Name"
                type="text"
                placeholder="Contract Name"
                disabled
            />
            </div>
        </div>
       </form>
        
    </div>
    <ModalContainer isOpen={modalIsOpen} onRequestClose={closeModal} title="Add New Contract">
        <div className='flex flex-col gap-3'>
            <FormField
                label="Contract Name"
                type="text"
                placeholder="Contract Name"
            />
            <FormField
                label="Contract Name Arabic"
                type="text"
                language='ar'
                placeholder="اسم العقد"
            />
        <div className='flex justify-end gap-2'>
        <button className='py-1 px-4 bg-primary text-white rounded-lg'>Add</button>
        <button className='py-1 px-2 border border-primary rounded-lg' onClick={closeModal}>Cancel</button>
        </div>
        </div>
    </ModalContainer>
   </>
  )
}
