import React from "react";
import ModalContainer from "../../../Common/ModalContainer";
import FormField from "../../../Common/FormField";

export default function AddFeatureModal({ modalIsOpen, closeModal }) {
  return (
    <ModalContainer
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      title="Add New Feature"
    >
      <form className="flex flex-col ga=5">
        <div className="grid grid-cols-1">
          <FormField
            label="Feature Name"
            type="text"
            placeholder="Feature Name"
          />
        </div>

        <div className="grid grid-cols-1">
          <FormField
            label="Feature Name Arabic"
            type="text"
            language="ar"
            placeholder="اسم الوحدة"
          />
        </div>

        <div className="flex justify-center gap-2 my-4">
          <button
            className="py-1 px-2 border border-primary text-primary rounded-lg"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button className="py-1 px-4 bg-primary text-white rounded-lg">
            Add
          </button>
        </div>
      </form>
    </ModalContainer>
  );
}
