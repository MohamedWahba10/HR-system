import React from 'react'
import ModalContainer from '../../../Common/ModalContainer'
import FormField from '../../../Common/FormField'

export default function AddWorkShiftModal({ modalIsOpen, closeModal }) {
  return (
    <ModalContainer isOpen={modalIsOpen} onRequestClose={closeModal} title="Add New Work Shift">
    <div className="flex flex-col gap-4 my-2">
        <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Work Shift Name"
              type="text"
              placeholder="Work Shift Name"
            />

            <FormField
              label="Work Shift Name Arabic"
              type="text"
              language="ar"
              placeholder="اسم الوحدة"
            />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Start Time"
              type="time"
              placeholder="Start Time"
            />

            <FormField
              label="End Time"
              type="time"
              placeholder="End Time"
            />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Total Hours"
              type="number"
              placeholder="Total Hours"
            />

            <FormField
              label="Days Off"
              type="select"
              placeholder="Days Off"
              options={[
                { label: 'Yes', value: 'Yes' },
                { label: 'No', value: 'No' },
              ]}
            />
        </div>

        <h1 className='text-lg font-semibold'>Conditions</h1>
        <div className="flex gap-2 items-center my-2">
          <input
            type="checkbox"
            className="w-5 h-5"
            name=" grace_period"
            id="grace_period"
           
          />
          <label className='text-textprimary' htmlFor="grace_period">
            Employee have grace period of 10 minutes.
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="w-5 h-5"
            name=" days-off"
            id="days-off"
           
          />
          <label className='text-textprimary' htmlFor="days-off">
            The Employee have 2 days off.
          </label>
        </div>
      </div>
    <div className='flex justify-end gap-2'>
    <button className='py-1 px-4 bg-primary text-white rounded-lg'>Add</button>
    <button className='py-1 px-2 border border-primary rounded-lg' onClick={closeModal}>Cancel</button>
    </div>
    
</ModalContainer>
  )
}
