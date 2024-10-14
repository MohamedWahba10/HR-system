import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

export default function EmployeeProfile() {
  const [logoPreview, setLogoPreview] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setLogoPreview(null);
    setFileName("");
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-round rounded-lg p-6 sticky top-2">
      <div className="relative flex justify-center mb-4">
        {logoPreview ? (
          <img
            src={logoPreview}
            alt="Profile Logo"
            className="h-32 w-32 rounded-full object-cover border-2 border-gray-300"
          />
        ) : (
          <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-300">
            <span>No image</span>
          </div>
        )}
        <div className="absolute bottom-0  text-sm transform translate-y-1/2 bg-primary text-white px-3 py-1 rounded-md cursor-pointer hover:bg-primaryLight transition">
          <label htmlFor="upload-button" className="flex items-center space-x-1">
           <FaCamera/>
            <span>Add Pic</span>
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="upload-button"
          />
        </div>
      </div>
      <div className="text-center py-2">
        <h2 className="text-lg font-semibold mb-1">Reem Ahmed</h2>
        <p className="text-sm text-gray-600 mb-4">IT Sales</p>
      </div>
      {logoPreview && (
        <div className="flex justify-center mb-4">
          <button
            type="button"
            onClick={handleRemoveLogo}
            className=" text-red-500 px-4 py-2"
          >
            Remove Image
          </button>
        </div>
      )}
      <div className="flex flex-col justify-center items-center mt-4">
        <button
          type="button"
          className=" text-primary px-4 py-[2px] font-semibold rounded-md border border-primary w-[70%]"
        >
          Set as Admin
        </button>
        <button
          type="button"
          className=" text-textprimary px-4 py-2"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}
