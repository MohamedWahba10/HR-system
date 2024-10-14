import React from 'react';
import arrow from '../../../../assets/svgs/arrow.svg'; // Make sure to import the custom arrow

export default function Payroll({ onNextStep }) {
  return (
    <div className="w-3/4 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">Payroll</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">

        {/* Salary Type Select with Custom Arrow */}
        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Salary type</label>
          <select className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition pr-10 bg-white text-gray-600">
            <option>Select</option>
            <option>1</option>
            <option>2</option>
          </select>
          {/* Custom Arrow */}
          <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
            <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-6" />
          </span>
        </div>

        {/* Basic Salary Input */}
        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
            Basic salary
          </label>
          <input
            type="text"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
          />
        </div>

        {/* Social Insurance Type Select with Custom Arrow */}
        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Social Insurance Type</label>
          <select className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition pr-10 bg-white text-gray-600">
            <option>Select</option>
            <option>x</option>
            <option>y</option>
          </select>
          {/* Custom Arrow */}
          <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
            <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-6" />
          </span>
        </div>

        {/* Social Insurance Policy Select with Custom Arrow */}
        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Social Insurance Policy</label>
          <select className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition pr-10 bg-white text-gray-600">
            <option>Select</option>
            <option>x</option>
            <option>y</option>
          </select>
          {/* Custom Arrow */}
          <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
            <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-6" />
          </span>
        </div>

        {/* Employee Social Insurance Years Select with Custom Arrow */}
        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Employee Social Insurance Years</label>
          <select className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition pr-10 bg-white text-gray-600">
            <option>Select</option>
            <option>x</option>
            <option>y</option>
          </select>
          {/* Custom Arrow */}
          <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
            <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-6" />
          </span>
        </div>

        {/* Gross Salary Input */}
        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Gross salary</label>
          <input
            type="text"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
          />
        </div>

      </div>

      {/* Save and Cancel Buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <button
          className="bg-primary-gradient text-white w-40 px-6 py-2 rounded"
          onClick={onNextStep}
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
