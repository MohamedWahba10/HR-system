import React, { useState } from 'react';
import arrow from '../../../../../assets/svgs/arrow.svg';

const StatusFilter = ({ selectedStatuses, onStatusChange }) => {
  const [isOpen, setIsOpen] = useState(false); // To toggle dropdown

  const statuses = ['Pending', 'Accepted', 'Rejected', 'Withdraw'];

  const handleStatusChange = (status) => {
    if (selectedStatuses.includes(status)) {
      // Remove the status if it's already selected
      onStatusChange(selectedStatuses.filter((item) => item !== status));
    } else {
      // Add the status if it's not already selected
      onStatusChange([...selectedStatuses, status]);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative group">
      {/* Custom dropdown button */}
      <div
        className={`appearance-none border-2 border-gray-300 focus:outline-none focus:border-primary hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#A3A3A3] pr-10 bg-white cursor-pointer ${
          isOpen ? 'border-primaryhover' : ''
        }`}
        onClick={toggleDropdown}
      >
        <span>{selectedStatuses.length > 0 ? `${selectedStatuses.length} Selected` : 'Select Status'}</span>
        <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2">
          <img
            src={arrow}
            alt="arrow"
            className={`w-3 h-3 text-[#A3A3A3] mt-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </span>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          <ul className="p-2">
            {/* Status checkboxes */}
            {statuses.map((status, index) => (
              <li key={index} className="flex items-center mt-1">
                <input
                  type="checkbox"
                  checked={selectedStatuses.includes(status)}
                  onChange={() => handleStatusChange(status)}
                  className="form-checkbox h-4 w-4"
                />
                <label className="ml-2 text-sm text-gray-700">{status}</label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StatusFilter;
