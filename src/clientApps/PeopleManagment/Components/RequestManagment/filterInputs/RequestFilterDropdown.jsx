import React, { useState } from 'react';
import arrow from '../../../../../assets/svgs/arrow.svg';

// eslint-disable-next-line react/prop-types
const RequestFilterDropdown = ({ requestTypes, selectedRequestTypes, onRequestTypesChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCheckboxChange = (requestType) => {
    let newSelectedRequestTypes;
    if (selectedRequestTypes.includes(requestType)) {
      // If the request type is already selected, remove it
      newSelectedRequestTypes = selectedRequestTypes.filter(type => type !== requestType);
    } else {
      // Otherwise, add it to the selected request types
      newSelectedRequestTypes = [...selectedRequestTypes, requestType];
    }
    onRequestTypesChange(newSelectedRequestTypes); // Update parent state
  };

  return (
    <div className="relative group">
      {/* Dropdown Button */}
      <div
        className={`appearance-none border-2 border-gray-300 focus:outline-none focus:border-primary hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#A3A3A3] pr-10 bg-white cursor-pointer ${
          dropdownOpen ? 'border-primaryhover' : ''
        }`}
        onClick={toggleDropdown}
      >
        <span>{selectedRequestTypes.length > 0 ? `${selectedRequestTypes.length} Selected` : 'Select Request Type'}</span>
        <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2">
          <img
            src={arrow}
            alt="arrow"
            className={`w-3 h-3 text-[#A3A3A3] mt-1 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
          />
        </span>
      </div>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          <ul className="p-2">
            {/* Render the request types as selectable options with checkboxes */}
            {requestTypes.map((requestType, index) => (
              <li key={index} className="flex items-center mt-1">
                <input
                  type="checkbox"
                  checked={selectedRequestTypes.includes(requestType)}
                  onChange={() => handleCheckboxChange(requestType)}
                  className="form-checkbox h-4 w-4"
                />
                <label className="ml-2 text-sm text-gray-700">{requestType}</label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RequestFilterDropdown;
