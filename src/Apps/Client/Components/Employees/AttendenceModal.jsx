import React from 'react'
import ModalContainer from '../../../../Common/ModalContainer'
import FormField from '../../../../Common/FormField'

export default function AttendenceModal({ modalIsOpen, closeModal }) {
  return (
    <ModalContainer isOpen={modalIsOpen} onRequestClose={closeModal} title="Add New Attendence">
        <form>
            <div className="mb-4 grid grid-cols-1 gap-4">
                <FormField
                  label="State"
                  type="text"
                  placeholder="State"
                />
            </div>
            <div className="mb-4 grid grid-cols-1 gap-4">
                <FormField
                  label="Date"
                  type="date"
                  placeholder="Date"
                />
            </div>

            <div className="mb-4 grid grid-cols-1 gap-4">
                <FormField
                  label="Clock In"
                  type="time"
                  placeholder="Clock In"
                />
            </div>

            <div className="mb-4 grid grid-cols-1 gap-4">
                <FormField
                  label="Clock Out"
                  type="time"
                  placeholder="Clock Out"
                />
            </div>

            <div className="mb-4 grid grid-cols-1 gap-4">
                <FormField
                  label="Total Hours"
                  type="number"
                  placeholder="Total Hours"
                />
            </div>

            <div className="mb-4 grid grid-cols-1 gap-4">
                <FormField
                  label="Late"
                  type="number"
                  placeholder="Late"
                />
            </div>

            <div className="flex justify-end gap-2">
                <button className="py-1 px-4 bg-primary text-white rounded-lg">
                    Add
                </button>
                <button
                    className="py-1 px-2 border border-primary rounded-lg"
                    onClick={closeModal}
                >
                    Cancel
                </button>
            </div>
        </form>
    </ModalContainer>
  )
}
