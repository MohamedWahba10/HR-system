import React, { useState } from "react";
import FormField from "../../../../Common/FormField";
import AddSectionModal from "./AddSectionModal";

export default function CreateDepartment() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };

  return (
    <div className="my-4">
   <div className="bg-white p-4 shadow-round rounded-2xl">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold mb-4">Add Department</h1>
        <div>
          <button onClick={openModal} className="py-1 px-2 bg-primary text-white rounded-lg">
            + Add Section
          </button>
        </div>
      </div>

      <form>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <FormField
            label="Department Name"
            type="text"
            placeholder="Department Name"
          />

          <FormField
            label="Department Name Arabic"
            type="text"
            language="ar"
            placeholder="اسم القسم"
          />
          </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <FormField
            label="Sector"
            type="text"
            placeholder="Sector"
          />

          <FormField
            label="Sector"
            type="text"
            language="ar"
            placeholder="القطاع"
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <FormField
            label="First Section Name"
            type="text"
            placeholder="First Section Name"
          />

          <FormField
            label="First Section Name Arabic"
            type="text"
            language="ar"
            placeholder="اسم القسم الأول"
          />
        </div>
        <div className='flex justify-center items-center gap-2 my-2'>
          <button className='py-1.5 px-4 bg-primary text-white rounded-lg'>Save And Next</button>
          <button className='py-1 px-4 border border-primary text-primary rounded-lg'>Cancel</button>

        </div>
      </form>

      <AddSectionModal modalIsOpen={modalIsOpen} closeModal={closeModal}  />
    </div>
    </div>
  );
}
