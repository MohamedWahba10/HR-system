import React from 'react';
import arrow from '../../../../assets/svgs/arrow.svg'; // Make sure to import the custom arrow

export default function OffboardingAsset() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Asset</h2>
      <form className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600">Asset Name</label>
          <input type="text" className="w-full border border-gray-300 rounded p-2" />
        </div>
        
        {/* Asset has been handed over select dropdown with custom arrow */}
        <div className="relative group">
          <label className="block text-sm text-gray-600">Asset has been handed over</label>
          <select className="appearance-none border border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#454545] pr-10 bg-white">
            <option>Yes</option>
          </select>
          {/* Custom Arrow */}
          <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
            <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-6" />
          </span>
        </div>

        <div>
          <label className="block text-sm text-gray-600">Asset handed over date</label>
          <input type="text" className="w-full border border-gray-300 rounded p-2" />
        </div>
        
        <div className="col-span-2">
          <label className="block text-sm text-gray-600">Notes</label>
          <textarea className="w-full border border-gray-300 rounded p-2" rows="4" placeholder="Enter category description..."></textarea>
        </div>
      </form>
    </div>
  );
}
