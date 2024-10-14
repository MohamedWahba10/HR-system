import React from 'react'
import ModalContainer from '../../../../Common/ModalContainer'
import FormField from '../../../../Common/FormField'

export default function AddPositionModal({ modalIsOpen, closeModal }) {
    
  return (
    <ModalContainer isOpen={modalIsOpen} onRequestClose={closeModal} title="Add New Position">
            <form>
                <div className="mb-4 grid grid-cols-1 gap-4">
                    <FormField
                        label="Position Name"
                        type="text"
                        placeholder="Position Name"
                    />
                    <FormField
                        label="Position Name Arabic"
                        type="text"
                        language="ar"
                        placeholder="اسم الوظيفة"
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
