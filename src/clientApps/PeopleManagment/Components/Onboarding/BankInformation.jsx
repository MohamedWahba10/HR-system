import React from 'react';

export default function BankInformation({ onNextStep }) {
  return (
    <div className="w-3/4 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">Bank Information</h2>
      </div>

      {/* Bank Information Section */}
      <div className="grid grid-cols-2 gap-6">
        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
            Bank name
          </label>
          <input
            type="text"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
          />
        </div>
        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
            Account number
          </label>
          <input
            type="text"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
          />
        </div>
        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
            IBAN Number
          </label>
          <input
            type="text"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
          />
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="flex justify-center space-x-4 mt-48">
        <button
          className="bg-primary-gradient text-white w-40 px-6 py-2 rounded"
          onClick={onNextStep} // You can use this to trigger the next step
        >
          Save
        </button>
        <button className="text-primary w-40 px-6 py-2 rounded border-[1px] border-primary">
          Cancel
        </button>
      </div>
    </div>
  );
}
