// AllRequestTypeSelect.jsx
import React, { useState } from 'react';
import arrow from '../../../../../assets/svgs/arrow.svg'; // Adjust the path to arrow.svg as per your project structure

const AllRequestTypeSelect = ({ selectedRequestTypes, onRequestTypeChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const requestTypes = [
    "letters",
    "Share the moment",
    "Government relations",
    "Medical form",
    "Your voice is heard",
    "Resignation",
    "Change bank IBAN",
    "Miscellaneous",
    "Leaves",
    "Vacation",
    "Missing Punch",
    "Loan",
    "Business Trip",
    "Expenses"
  ];

  const handleRequestTypeChange = (type) => {
    if (selectedRequestTypes.includes(type)) {
      onRequestTypeChange(selectedRequestTypes.filter(t => t !== type));
    } else {
      onRequestTypeChange([...selectedRequestTypes, type]);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative group">
      {/* Dropdown Button */}
      <div
        className="appearance-none border-2 border-gray-300 w-full p-2 rounded cursor-pointer bg-white text-[#A3A3A3] flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <span>{selectedRequestTypes.length > 0 ? `${selectedRequestTypes.length} Selected` : 'Select Request Type'}</span>
        <img src={arrow} alt="arrow" className={`w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
      </div>

      {/* Dropdown List */}
      {dropdownOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          <ul className="p-2">
            {requestTypes.map((type, index) => (
              <li key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={selectedRequestTypes.includes(type)}
                  onChange={() => handleRequestTypeChange(type)}
                  className="form-checkbox h-4 w-4 text-primary mr-2"
                />
                <label className="text-sm text-[#454545]">{type}</label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AllRequestTypeSelect;
