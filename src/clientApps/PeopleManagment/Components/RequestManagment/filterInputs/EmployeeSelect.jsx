import React, { useState } from 'react';
import arrow from '../../../../../assets/svgs/arrow.svg';

// eslint-disable-next-line react/prop-types
const EmployeeSelect = ({ employees, selectedEmployees, onEmployeeChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // To toggle dropdown

  const handleCheckboxChange = (employeeName) => {
    let newSelectedEmployees;
    if (selectedEmployees.includes(employeeName)) {
      // If the employee is already selected, remove it
      newSelectedEmployees = selectedEmployees.filter(name => name !== employeeName);
    } else {
      // Otherwise, add it to the selected employees
      newSelectedEmployees = [...selectedEmployees, employeeName];
    }
    onEmployeeChange(newSelectedEmployees); // Update parent state
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };



  return (
    <div className="relative group">
      {/* Custom dropdown button */}
      <div

        
className={`appearance-none border-2 border-gray-300 focus:outline-none focus:border-primary hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#A3A3A3] pr-10 bg-white cursor-pointer ${
  dropdownOpen ? 'border-primaryhover' : ''
}`}
      onClick={toggleDropdown}
      >
        <span>{selectedEmployees.length > 0 ? `${selectedEmployees.length} Selected` : 'Select Employees'}</span>
        <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2">
          <img src={arrow} alt="arrow" className={`w-3 h-3 text-[#A3A3A3] mt-1 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
        </span>
      </div>

      {/* Dropdown menu */}
      {dropdownOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          <ul className="p-2">
            {/* 'All Employees' checkbox */}
            <li className="flex items-center">
              <input
                type="checkbox"
                checked={selectedEmployees.includes('All Employees')}
                onChange={() => {
                  if (selectedEmployees.includes('All Employees')) {
                    onEmployeeChange([]); // Deselect all
                  } else {
                    onEmployeeChange(['All Employees']); // Select all employees
                  }
                }}
                className="form-checkbox h-4 w-4"
              />
              <label className="ml-2 text-sm text-gray-700">All Employees</label>
            </li>

            {/* Employee checkboxes */}
            {employees.map((employee, index) => (
              <li key={index} className="flex items-center mt-1">
                <input
                  type="checkbox"
                  checked={selectedEmployees.includes(employee.name)}
                  onChange={() => handleCheckboxChange(employee.name)}
                  className="form-checkbox h-4 w-4"
                />
                <label className="ml-2 text-sm text-gray-700">{employee.name}</label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EmployeeSelect;
