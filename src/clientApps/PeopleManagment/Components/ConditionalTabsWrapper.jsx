import React from 'react';
import { useLocation } from 'react-router-dom';
import CompanyTabs from './CompanyTabs'
import EmployeeTabs from './EmployeeTabs';

function ConditionalTabsWrapper() {
  const location = useLocation();

  // Determine which tabs to show based on the current route
  const showCompanyTabs =
    location.pathname.includes('/peopleManagement/companyInformation') ||
    location.pathname.includes('/peopleManagement/companyStructure');

  const showEmployeeTabs =
    location.pathname.includes('/peopleManagement/employees') ||
    location.pathname.includes('/peopleManagement/employeeStructure') ||
    location.pathname.includes('/peopleManagement/onBoarding') ||
    location.pathname.includes('/peopleManagement/offBoarding');

  return (
    <>
      {showCompanyTabs && <CompanyTabs />}
      {showEmployeeTabs && <EmployeeTabs />}
   
    </>
  );
}

export default ConditionalTabsWrapper;
