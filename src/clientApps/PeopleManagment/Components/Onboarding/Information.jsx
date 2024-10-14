import React, { useState } from 'react'
import Modal from './Modal'
import arrow from '../../../../assets/svgs/arrow.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

export default function Information({ onNextStep }) {
  const [isModalOpen, setIsModalOpen] = useState(false);  // Modal state
  const [dates, setDates] = useState({
    birthDate: null,
    joiningDate: null,
    expirationDate: null,
    startedDate: null,
    completedDate: null,
    wifeIdExpiration: null,
    sonIdExpiration: null,
  });

  // Generic date change handler
  const handleDateChange = (date, fieldName) => {
    setDates((prevDates) => ({
      ...prevDates,
      [fieldName]: date,
    }));
  };


    return (
      <>
      
      <div className="w-3/4 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Personal Information</h2>
          <div className="space-x-4">
            <button className="bg-primary-gradient text-white px-4 py-2 rounded">Download Template</button>
            <button className="bg-primary-gradient text-white px-4 py-2 rounded">+ Upload data automatically</button>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="grid grid-cols-2 gap-6">
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">First name</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">First name in Arabic</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Second name</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Second name in Arabic</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Third name</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Third name in Arabic</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Last name</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Last name in Arabic</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
            Birth Date
          </label>
          <DatePicker
            selected={dates.birthDate}
            onChange={(date) => handleDateChange(date, 'birthDate')}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/yy"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full sm:w-[150%] md:w-[110%] lg:w-[188%] p-2 rounded transition text-[#454545]"
          />
        </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover ">
              Age
            </label>
            <input
              type="number"
              value=""
              readOnly
              className="border-2 border-gray-300  cursor-not-allowed w-full p-2 rounded transition bg-[#FAFAFA] text-[#454545]"
            />
          </div>
          <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
           Gender
          </label>
          <select
            className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
          >
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
           
          </select>
          {/* Custom Arrow */}
          <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
            <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
          </span>
        </div>


           <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
          Religion
          </label>
          <select
            className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
          >
            <option>Select</option>
            <option>muslim</option>
            <option>christian</option>
           
          </select>
          {/* Custom Arrow */}
          <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
            <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
          </span>
        </div>


        </div>

         {/* Organization Information Section */}
         <hr className="mt-12" />
         <h2 className="text-lg font-bold mt-8 mb-4">Organization Information</h2>
         <div className="grid grid-cols-2 gap-6">

<div className="relative group">
  <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Position</label>
  <select
    className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
  >
    <option>Select</option>
  </select>
  <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
    <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
  </span>
</div>

<div className="relative group">
  <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Employee ID</label>
  <input
    type="text"
    className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
  />
</div>

<div className="relative group">
  <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Probation</label>
  <input
    type="text"
    className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
  />
</div>

<div className="relative group">
  <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Work Shift</label>
  <select
    className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
  >
    <option>Select</option>
  </select>
  <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
    <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
  </span>
</div>

<div className="relative group">
  <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Department</label>
  <select
    className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
  >
    <option>Select</option>
  </select>
  <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
    <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
  </span>
</div>

<div className="relative group">
  <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Sector</label>
  <input
    type="text"
    className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
  />
</div>

<div className="relative group">
  <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Branch</label>
  <select
    className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
  >
    <option>Select</option>
  </select>
  <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
    <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
  </span>
</div>

<div className="relative group">
  <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Section</label>
  <select
    className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
  >
    <option>Select</option>
  </select>
  <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
    <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
  </span>
</div>

<div className="relative group">
  <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Grade</label>
  <select
    className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
  >
    <option>Select</option>
  </select>
  <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
    <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
  </span>
</div>

<div className="relative group">
  <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Project</label>
  <select
    className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
  >
    <option>Select</option>
  </select>
  <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
    <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
  </span>
</div>

<div className="relative group">
  <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Site</label>
  <select
    className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
  >
    <option>Select</option>
  </select>
  <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
    <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
  </span>
</div>

<div className="relative group">
  <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Contract</label>
  <select
    className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
  >
    <option>Select</option>
  </select>
  <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
    <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
  </span>
</div>
<div className="relative group">
  <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Work mode</label>
  <select
    className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
  >
    <option>Select</option>
  </select>
  <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
    <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
  </span>
</div>
        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
            Joining Date
          </label>
          <DatePicker
            selected={dates.joiningDate}
            onChange={(date) => handleDateChange(date, 'joiningDate')}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/yy"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full sm:w-[150%] md:w-[110%] lg:w-[188%] p-2 rounded transition text-[#454545]"
          />
        </div>
        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
            Expiration Date
          </label>
          <DatePicker
            selected={dates.expirationDate}
            onChange={(date) => handleDateChange(date, 'expirationDate')}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/yy"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full sm:w-[150%] md:w-[110%] lg:w-[188%] p-2 rounded transition text-[#454545]"
          />
        </div>

          <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
         City
          </label>
          <select
            className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
          >
            <option>Select</option>
         
           
          </select>
          {/* Custom Arrow */}
          <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
            <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
          </span>
        </div>
        
          <div className="relative group">
              <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">County</label>
              <select
                className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
              >
                <option>Select</option>
              </select>
              <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
                <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
              </span>
            </div>

        </div>


        {/* Contact Section */}
        <hr className="mt-12" />
        <h2 className="text-lg font-bold mt-8 mb-4">Contact</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Work email</label>
            <input
              type="email"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Phone number</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Personal email</label>
            <input
              type="email"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Personal phone number</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
        </div>

        {/* Emergency Contact Section */}
        <h2 className="text-lg font-bold mt-8 mb-4">Emergency Contact</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Name</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Name in Arabic</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
              <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Relationship</label>
              <select
                className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
              >
                <option>Select</option>
              </select>
              <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
                <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
              </span>
            </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Email</label>
            <input
              type="email"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Phone number</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
        </div>

        {/* Address Section */}
        <hr className="mt-12" />
        <h2 className="text-lg font-bold mt-8 mb-4">Address</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Short address</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Building number</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Street name</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Street name in Arabic</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">District</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">District in Arabic</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Postal code</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Additional number</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">City</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
        </div>

        {/* Educational Information Section */}
        <hr className="mt-12" />
        <h2 className="text-lg font-bold mt-8 mb-4">Educational Information</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Degree</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Degree in Arabic</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">University or school</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">University or school in Arabic</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Major</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Major in Arabic</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Grade point average (GPA)</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
              <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">City</label>
              <select
                className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
              >
                <option>Select</option>
              </select>
              <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
                <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
              </span>
            </div>
          <div className="relative group">
              <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">County</label>
              <select
                className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
              >
                <option>Select</option>
              </select>
              <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
                <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
              </span>
            </div>
          {/* Started Date Input */}
          <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
            Started Date
          </label>
          <DatePicker
            selected={dates.startedDate}
            onChange={(date) => handleDateChange(date, 'startedDate')}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/yy"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full sm:w-[150%] md:w-[110%] lg:w-[188%] p-2 rounded transition text-[#454545]"
          />
        </div>

        {/* Completed Date Input */}
        <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
            Completed Date
          </label>
          <DatePicker
            selected={dates.completedDate}
            onChange={(date) => handleDateChange(date, 'completedDate')}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/yy"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full sm:w-[150%] md:w-[110%] lg:w-[188%] p-2 rounded transition text-[#454545]"
          />
        </div>
        </div>

        {/* Dependence Section */}
        <hr className="mt-12" />
        <h2 className="text-lg font-bold mt-8 mb-4 flex items-center justify-between">
          Dependence
          {/* Trigger Modal on Button Click */}
          <button
            className="w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center text-3xl"
            onClick={() => setIsModalOpen(true)}
          >
            +
          </button>
        </h2>

        {/* Modal Component */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <div className="grid grid-cols-2 gap-6">
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Wife name</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Wife name in Arabic</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>


          <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
           Nationality
          </label>
          <select
            className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
          >
            <option>Select</option>
           
          </select>
          {/* Custom Arrow */}
          <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
            <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
          </span>
        </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Age</label>
            <input
              type="number"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>


          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">ID Number/Iqama</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
            Male ID Expiration Date
          </label>
          <DatePicker
            selected={dates.wifeIdExpiration}
            onChange={(date) => handleDateChange(date, 'maleIdExpirationDate')}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/yy"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full sm:w-[150%] md:w-[110%] lg:w-[188%] p-2 rounded transition text-[#454545]"
          />
        </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Son name</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Son name in Arabic</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
       <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
          Nationality
          </label>
          <select
            className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
          >
            <option>Select</option>
       
           
          </select>
          {/* Custom Arrow */}
          <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
            <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
          </span>
        </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Age</label>
            <input
              type="number"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">ID Number/Iqama</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
          <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">
            Son ID Expiration Date
          </label>
          <DatePicker
            selected={dates.sonIdExpirationDate}
            onChange={(date) => handleDateChange(date, 'sonIdExpirationDate')}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/yy"
            className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full sm:w-[150%] md:w-[110%] lg:w-[188%] p-2 rounded transition text-[#454545]"
          />
        </div>
        </div>

        {/* Login Information Section */}
        <hr className="mt-12" />
        <h2 className="text-lg font-bold mt-8 mb-4">Login Information</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Username</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
              <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Role</label>
              <select
                className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-[9px] rounded transition text-[#454545] pr-10 bg-white"
              >
                <option>Select</option>
              </select>
              <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
                <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-7" />
              </span>
            </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Email</label>
            <input
              type="email"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Phone number</label>
            <input
              type="text"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Password</label>
            <input
              type="password"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
          </div>
          <div className="relative group">
            <label className="block mb-2 text-[#252525] transition-colors group-focus-within:text-primaryhover">Confirm password</label>
            <input
              type="password"
              className="border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition"
            />
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
      </>
      );
}
