import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

export default function Insurances({ onNextStep }) {
  const [dates, setDates] = useState({   
   
    startedDate: null,
    endedDate: null,
  
  });

  // Generic date change handler
  const handleDateChange = (date, fieldName) => {
    setDates((prevDates) => ({
      ...prevDates,
      [fieldName]: date,
    }));
  };
  return (
    <div className="w-3/4 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">Insurances </h2>
      </div>

      {/* Insurance Information Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Insurance and Grade */}
        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
            Insurance
          </label>
          <input
            type="text"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
          />
        </div>

        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
            Grade
          </label>
          <input
            type="text"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
          />
        </div>

        {/* Start Date and End Date */}
        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
            Start Date
          </label>
          <DatePicker
            selected={dates.startedDate}
            onChange={(date) => handleDateChange(date, 'startedDate')}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/yy"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full sm:w-[150%] md:w-[110%] lg:w-[188%] p-2 rounded transition text-[#454545]"
          />
        </div>

        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
            End Date
          </label>
          <DatePicker
            selected={dates.endedDate}
            onChange={(date) => handleDateChange(date, 'endedDate')}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/yy"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full sm:w-[150%] md:w-[110%] lg:w-[188%] p-2 rounded transition text-[#454545]"
          />
        </div>
        {/* Deduction */}
        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
            Deduction
          </label>
          <input
            type="number"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
          />
        </div>

        {/* Placeholder div to maintain grid structure */}
        <div></div>

        {/* Dependence Covered Checkbox */}
        <div className="relative group flex items-center col-span-2">
          <input
            type="checkbox"
            className="mr-2 border-2 border-gray-300 focus:outline-none focus:ring-primaryhover transition"
          />
          <label className="text-[#252525]">Dependence Covered</label>
        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <button
          className="bg-primary-gradient text-white w-40 px-6 py-2 rounded"
          onClick={onNextStep} // Trigger next step on Save
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
