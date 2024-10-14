import React from "react";
import ModalContainer from "../../../../Common/ModalContainer";
import FormField from "../../../../Common/FormField";

export default function AddSectionModal({ modalIsOpen, closeModal }) {
  return (
    <ModalContainer
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      title="Add New Section"
    >
      <form>
        <div className="mb-4 grid grid-cols-1 gap-4">
          <FormField
            label="Section Name"
            type="text"
            placeholder="Section Name"
          />
          <FormField
            label="Section Name Arabic"
            type="text"
            language="ar"
            placeholder="اسم القسم"
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
  );
}
