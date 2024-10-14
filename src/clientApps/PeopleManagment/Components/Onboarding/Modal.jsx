import React from 'react';
import arrow from '../../../../assets/svgs/arrow.svg';
export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full max-h-[100vh] overflow-y-auto relative">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Add a family member</h2>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-gray-600 font-bold text-xl"
          >
            X
          </button>
        </div>

        {/* Form inside the modal */}
        <div className="grid grid-cols-1 gap-6">
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Relationship</label>
            <select
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#454545]"
            >
              <option>Select</option>
              <option>Father</option>
              <option>Mother</option>
              <option>Sibling</option>
            </select>
          </div>

          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Name</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#454545]"
            />
          </div>

          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Name in Arabic</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#454545]"
            />
          </div>

          <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
           Nationality
          </label>
          <select
            className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
          >
            <option>Select</option>
         
           
          </select>
          {/* Custom Arrow */}
          <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
            <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
          </span>
        </div>

          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Age</label>
            <input
              type="number"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#454545]"
            />
          </div>

          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">ID Number/Iqama</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#454545]"
            />
          </div>

          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">ID Expiration Date</label>
            <input
              type="date"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#454545]"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="bg-primary-gradient text-white w-40 px-6 py-2 rounded mr-4"
          >
            Add
          </button>
          <button onClick={onClose} className="text-primary w-40 px-6 py-2 rounded border-[1px] border-primary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
