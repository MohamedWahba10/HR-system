import React from "react";
import ModalContainer from "../../../Common/ModalContainer";
import FormField from "../../../Common/FormField";

export default function AddModuleModal({
  modalIsOpen,
  closeModal,
  openFeatureModal,
}) {
  return (
    <ModalContainer
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      title="Add New Module"
    >
      <form className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Module Name"
            type="text"
            placeholder="Module Name"
          />

          <FormField
            label="Module Name Arabic"
            type="text"
            language="ar"
            placeholder="اسم الوحدة"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Feature Name"
            type="text"
            placeholder="Feature Name"
          />

          <FormField
            label="Feature Name Arabic"
            type="text"
            language="ar"
            placeholder="اسم الميزة"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="py-1 px-4 border border-primary text-primary rounded-lg"
            onClick={() => {
              openFeatureModal();
              closeModal();
            }}
          >
            + Add Feature
          </button>
        </div>

        <div className="flex justify-end gap-2 my-4">
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
