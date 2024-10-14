import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import arrow from '../../../../assets/svgs/arrow.svg';

export default function TerminationPolicy({ onNextStep }) {

  const [dates, setDates] = useState({   
   
    TerminationDate: null,
    
  
  });

  // Generic date change handler
  const handleDateChange = (date, fieldName) => {
    setDates((prevDates) => ({
      ...prevDates,
      [fieldName]: date,
    }));
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Termination Policy</h2>
      <form className="space-y-4">
        
        {/* Row 1 */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm text-gray-600">Employee Name</label>
            <input type="text" className="w-full border border-gray-300 rounded p-2" />
          </div>
          <div className="w-1/2">
            <label className="block text-sm text-gray-600">STB Policy</label>
            <div className="relative group">
              <select className="appearance-none border border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#454545] pr-10 bg-white">
                <option>Select</option>
              </select>
              <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
                <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3]" />
              </span>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block mb-2 text-gray-600">Termination Category</label>
            <div className="relative group">
              <select className="appearance-none border border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#454545] pr-10 bg-white">
                <option>Select</option>
                <option>Saudi</option>
                <option>Other</option>
              </select>
              <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
                <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] " />
              </span>
            </div>
          </div>
          <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
          Termination Date
          </label>
          <DatePicker
            selected={dates.TerminationDate}
            onChange={(date) => handleDateChange(date, 'TerminationDate')}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/yy"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full sm:w-[150%] md:w-[110%] lg:w-[188%] p-2 rounded transition text-[#454545]"
          />
        </div>
        </div>

        {/* Row 3 */}
        <div className="flex space-x-4">
         
          <div className="w-1/2">
            <label className="block text-sm text-gray-600">Exclude Gosi</label>
            <div className="relative group">
              <select className="appearance-none border border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#454545] pr-10 bg-white">
                <option>No</option>
                <option>Yes</option>
              </select>
              <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
                <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] " />
              </span>
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div>
          <label className="block text-sm text-gray-600">Notes</label>
          <textarea className="w-full border border-gray-300 rounded p-2" rows="4" placeholder="Enter category description..."></textarea>
        </div>
      </form>
    </div>
  );
}
