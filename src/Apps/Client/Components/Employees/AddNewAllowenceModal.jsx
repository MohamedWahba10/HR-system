import React from "react";
import ModalContainer from "../../../../Common/ModalContainer";
import FormField from "../../../../Common/FormField";

export default function AddNewAllowenceModal({ modalIsOpen, closeModal }) {
  return (
    <ModalContainer
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      title="Add New Allowence"
    >
      <form>
        <div className="mb-4 grid grid-cols-1 gap-4">
          <FormField
            label="Allowence Name"
            type="text"
            placeholder="Allowence Name"
          />
        </div>
        <div className="flex items-center">
            <label className="mr-4">Percentage:</label>
            <div className="flex items-center mr-4">
              <input
                type="radio"
                id="percentageYes"
                name="percentage"
                value="yes"
                className="mr-1"
              />
              <label htmlFor="percentageYes" className="mr-2">
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="percentageNo"
                name="percentage"
                value="no"
                className="mr-1"
              />
              <label htmlFor="percentageNo">
                No
              </label>
            </div>
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
