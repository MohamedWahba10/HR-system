import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

function SetupTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: 'Packages', path: '/setup/packages' },
    { name: 'Modules', path: '/setup/modules' },
    { name: 'App', path: '/setup/app' },
  ];

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex gap-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => navigate(tab.path)}
            className={`w-[15%]  py-3 -mb-px text-sm font-medium rounded-t-lg
                        ${location.pathname === tab.path ? 'text-primary bg-white' : 'border-transparent bg-[#EFF7FF]'} 
                        hover:border-primaryhover focus:outline-none`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      
      {/* Render the selected component */}
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default SetupTabs;
