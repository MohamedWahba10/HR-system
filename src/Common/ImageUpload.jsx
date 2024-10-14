import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageUpload = ({ label, onImageSelect }) => {
  const [logoPreview, setLogoPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
        onImageSelect(file.name); // Callback to parent component
      };
      reader.readAsDataURL(file);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddLogo = () => {
    closeModal();
  };

  return (
    <div className="w-full">
      <label className="block text-black  text-sm my-2">{label}</label>
      <div className="mt-1 flex gap-2 items-center w-full">
        <input
          type="text"
          value={fileName}
          readOnly
          className="w-full border border-gray-300 focus:outline-none  focus:ring-2 focus:primaryLight rounded-lg px-4 py-2"
        />
        <button
          type="button"
          onClick={openModal}
          className="bg-primary text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add company logo"
        className="bg-white p-6 rounded-lg max-w-md mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
      >
        <h2 className="text-xl mb-4">Add company logo</h2>
        {logoPreview ? (
          <img src={logoPreview} alt="Company Logo" className="mb-4 h-20 w-20 rounded-full" />
        ) : (
          <div className="mb-4 h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
            <span>No image</span>
          </div>
        )}
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={handleAddLogo}
            className="bg-primary text-white px-4 py-2 rounded mr-2"
          >
            Add
          </button>
          <button
            type="button"
            onClick={closeModal}
            className=" text-primary border border-primary px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ImageUpload;
