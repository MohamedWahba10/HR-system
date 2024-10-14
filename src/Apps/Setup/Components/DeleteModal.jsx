import React from "react";
import ModalContainer from "../../../Common/ModalContainer";

export default function DeleteModal({ modalIsOpen, closeModal }) {
  return (
    <ModalContainer
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      title="Delete"
    >
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="flex justify-center ">
          <h1 className="text-base font-semibold text-black text-center">
            Are You Sure You Want To Delete?
          </h1>
        </div>

        <div className="flex gap-2 justify-center">
          <button
            onClick={closeModal}
            className="w-24 py-1 px-2 border border-primary text-primary rounded-lg"
          >
            No
          </button>
          <button className="w-24 py-1 px-2 bg-primary text-white rounded-lg">
            Yes
          </button>
        </div>
      </div>
    </ModalContainer>
  );
}
