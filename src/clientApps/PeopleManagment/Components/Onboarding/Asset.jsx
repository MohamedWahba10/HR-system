import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import arrow from '../../../../assets/svgs/arrow.svg'; // Make sure to import the custom arrow

export default function Asset({ onNextStep }) {
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
        <h2 className="text-lg font-bold">Asset</h2>
      </div>

      {/* Insurance Information Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Gender Select with Custom Arrow */}
        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Gender</label>
          <select
            className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition pr-10 bg-white"
          >
            <option>Select</option>
            <option>x</option>
            <option>y</option>
          </select>
          {/* Custom Arrow */}
          <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
            <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
          </span>
        </div>

        {/* Start Date Input */}
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
      </div>

      {/* Save and Cancel Buttons */}
      <div className="flex justify-center space-x-4 mt-28">
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
