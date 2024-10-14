import React, { useState } from "react";
import ModalContainer from "../../../Common/ModalContainer";
import FormField from "../../../Common/FormField";

export default function DeleteFeatureModal({ modalIsOpen, closeModal ,openDeleteModal}) {

    const [selectedFeature, setSelectedFeature] = useState("");

    const handleFeatureChange = (event) => {
      setSelectedFeature(event.target.value);
    };

  return (
    <ModalContainer
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      title="Delete"
    >
      <div className="flex flex-col gap-5 h-44">
        <div className="flex justify-center">
        <FormField
            label="Select Feature"
            type="select"
            value={selectedFeature}
            onChange={handleFeatureChange}
            options={[
              { value: "feature1", label: "Feature 1" },
              { value: "feature2", label: "Feature 2" },
            ]}
          />
        </div>
        <div className="flex gap-2 justify-center mt-10">
          <button
            onClick={closeModal}
            className="w-24 py-1 px-2 border border-primary text-primary rounded-lg"
          >
            Cancel
          </button>
          <button  onClick={() => {
              openDeleteModal();
              closeModal();
            }} className="w-24 py-1 px-2 bg-primary text-white rounded-lg">
            Select
          </button>
        </div>
      </div>
    </ModalContainer>
  );
}
