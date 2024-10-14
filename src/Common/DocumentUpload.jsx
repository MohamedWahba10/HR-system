import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const DocumentUpload = ({ label, onDocumentSelect }) => {
  const [fileName, setFileName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDocumentChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onDocumentSelect(file.name); // Callback to parent component
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddDocument = () => {
    closeModal();
  };

  return (
    <div className="w-full">
      <label className="block text-black  text-sm my-2">{label}</label>
      <div className="mt-1 flex items-center gap-2 w-full">
        <input
          type="text"
          value={fileName}
          readOnly
          className="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2"
        />
        <button
          type="button"
          onClick={openModal}
          className="bg-primary text-white px-4 py-2 rounded-lg"
        >
          Upload
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Upload a document"
        className="bg-white p-6 rounded-lg max-w-md mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
      >
        <h2 className="text-xl mb-4">Upload a document</h2>
        <input type="file" onChange={handleDocumentChange} />
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={handleAddDocument}
            className="bg-primaryLight text-white px-4 py-2 rounded mr-2"
          >
            Add
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DocumentUpload;
