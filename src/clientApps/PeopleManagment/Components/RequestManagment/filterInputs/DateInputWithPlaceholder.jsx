import React, { useState, useRef } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const DateInputWithPlaceholder = ({ placeholder, onDateChange }) => {
  const [isDateSelected, setDateSelected] = useState(false);
  const inputRef = useRef(null); // Reference to the input element

  // This function is triggered when the user picks a date
  const handleDateChange = (e) => {
    setDateSelected(true);
    onDateChange(e.target.value); // Pass the selected date to the parent component
  };

  // This function triggers the date picker when clicking on the custom icon
  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus on the input field
    }
  };

  return (
    <>
      <style>
        {`
          /* Hide the default calendar icon */
          input[type="date"]::-webkit-calendar-picker-indicator {
            display: none;
            -webkit-appearance: none;
          }
        `}
      </style>
      <div className="relative group">
        <input
          ref={inputRef} // Reference to the input element
          type="text"
          placeholder={placeholder || "Select date"}
          className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#A3A3A3] pr-10 bg-white"
          onFocus={(e) => {
            e.target.type = 'date'; // Switch input type to date when focused
          }}
          onBlur={(e) => {
            if (!e.target.value) {
              e.target.type = 'text'; // Switch back to text if no date is selected
            }
          }}
          onChange={handleDateChange} // Trigger when the date changes
        />

        {/* Custom Calendar Icon */}
        <span
          className="absolute inset-y-0 right-2 flex items-center pointer-events-auto pr-2 mb-5"
          onClick={handleIconClick} // Clicking the icon triggers the date picker
        >
          <FaCalendarAlt className="text-[#A3A3A3] w-4 h-4 mt-5 cursor-pointer" />
        </span>
      </div>
    </>
  );
};

export default DateInputWithPlaceholder;
