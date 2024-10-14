import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

function EmployeeTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: 'Employees', path: '/peopleManagement/employees' },
    { name: 'Employee Structure', path: '/peopleManagement/employeeStructure' },
    { name: 'OnBoarding', path: '/peopleManagement/onBoarding' },
    { name: 'OffBoarding', path: '/peopleManagement/offBoarding' },
  ];

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex gap-2 border-b border-gray-300 ">
        {tabs.map((tab, index) => (
       <button
       key={index}
       onClick={() => navigate(tab.path)}
       className={`text-sm font-medium rounded-t-lg w-[160px] 
                   ${
                     location.pathname === tab.path
                       ? 'text-primary bg-white text-[15px] h-12' 
                       : 'text-black bg-[#EFF7FF] h-12 text-[15px]'
                   } 
                   `}
     >
       {tab.name}
     </button>
     
     
        ))}
      </div>

      {/* Render the selected component */}
      <div className="p-4 bg-white rounded-lg shadow">
        <Outlet />
      </div>
    </div>
  );
}

export default EmployeeTabs;
