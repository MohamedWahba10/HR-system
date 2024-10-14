import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

const SubTab = ({ tabs }) => {
  const location = useLocation();
  return (
    <div className=''>
      <div className="flex justify-between bg-white shadow-round py-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.label}
            to={tab.path}
            end
            className={({ isActive }) => 
              `w-full px-4 py-2 cursor-pointer ${isActive || location.pathname.includes(tab.path) ? 'border-b-2 border-primary font-bold text-primary text-center ' : 'hover:bg-gray-100 border-b-2 border-gray-400 text-center text-primary'}`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

SubTab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SubTab;
