import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

function CompanyTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: 'Company Information', path: '/peopleManagement/companyInformation' },
    { name: 'Company Structure', path: '/peopleManagement/companyStructure' },
  ];

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-0">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => navigate(tab.path)}
            className={`py-2 px-6 text-sm font-medium rounded-t-lg 
                        ${
                          location.pathname === tab.path
                            ? 'text-primary bg-white text-[15px]' 
                            : 'text-black bg-[#EFF7FF] py-3 text-[15px]'
                        } 
                        hover:bg-white hover:text-primary focus:outline-none`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Render the selected component */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default CompanyTabs;
