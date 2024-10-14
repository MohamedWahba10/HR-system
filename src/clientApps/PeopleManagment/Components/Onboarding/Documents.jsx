import React from 'react';
import arrow from '../../../../assets/svgs/arrow.svg'; // Make sure to import the custom arrow

export default function Documents() {
  return (
    <div className="w-3/4 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">Documents</h2>
        <button className="bg-primary-gradient text-white px-4 py-1 rounded flex items-center">
          <span className="text-xl mr-2">+</span> {/* Icon size and spacing */}
          Document
        </button>
      </div>

      {/* Document Type and Supporting Document */}
      <div className="grid grid-cols-2 gap-6">
        {/* Document Type Select with Custom Arrow */}
        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
            Document Type
          </label>
          <select
            className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
          >
            <option>Select document type</option>
            <option>ID Card</option>
            <option>Passport</option>
            <option>Driver's License</option>
            <option>Other</option>
          </select>
          {/* Custom Arrow */}
          <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
            <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-6" />
          </span>
        </div>

        {/* Supporting Document with Choose Button */}
        <div className="relative group flex items-center">
          <div className="w-full">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
              Supporting Document
            </label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
              placeholder="No file chosen"
              readOnly
            />
          </div>
          <button className="ml-4 text-primary bg-[#23489533] px-4 py-2 rounded mt-8">  

            Choose
          </button>    
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="flex justify-center space-x-4 mt-36">
        <button className="bg-primary-gradient text-white w-40 px-6 py-2 rounded">
          Save
        </button>
        <button className="text-primary w-40 px-6 py-2 rounded border-[1px] border-primary ">
          Cancel
        </button>
      </div>
    </div>
  );
}
