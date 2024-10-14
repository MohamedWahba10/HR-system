// src/components/Navbar.js
import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import icon1 from '../assets/svgs/translate.svg'
import icon2 from '../assets/svgs/darkmode.svg'
import icon3 from '../assets/svgs/IconButton.svg'
import icon4 from '../assets/svgs/notification_icon.svg'



const ClientNavbar = () => {
  return (
    <div className="mt-4 ml-8 mb-0.5 mr-12 bg-backgroundPaper rounded-md shadow-round max-h-16 flex items-center px-4 justify-between font-sans">
      <div className="flex items-center w-full md:w-auto">
        <div className="relative flex items-center w-full md:w-auto">
          <FaSearch className="absolute left-3 text-textSecondary" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-1 my-2 rounded-full w-full md:w-64 border border-actionHover focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 text-textPrimary">
        <img src={icon1} alt="icons" className="w-10 h-10 rounded-full" />
        <img src={icon2} alt="icons" className="w-10 h-10 rounded-full" />

        <img src={icon3} alt="icons" className="w-10 h-10 rounded-full" />
        <img src={icon4} alt="icons" className="w-12 h-12 rounded-full" />
        <div className="relative">
          <FaUserCircle className="text-2xl cursor-pointer" />
          <span className="absolute bottom-0 right-0 block h-3 w-3 bg-success rounded-full ring-2 ring-white"></span>
        </div>
      </div>
    </div>
  );
};

export default ClientNavbar;
