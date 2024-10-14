import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

const Tab = ({ tabs }) => {
  const location = useLocation();
  return (
    <div className='bg-white  p-2'>
      <div className="flex justify-center  py-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.label}
            to={tab.path}
            end
            className={({ isActive }) => 
              `px-4 py-2 cursor-pointer  text-[15px] ${isActive || location.pathname.includes(tab.path) ? 'border-b-2 border-primary font-bold text-primary' : 'hover:bg-gray-100 border-b-2 border-gray-400 text-primary'}`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Tab;
