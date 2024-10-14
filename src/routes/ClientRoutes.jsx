import { Navigate } from 'react-router-dom';
import ClientDashboard from '../Pages/ClientDashboard';
import CompanyInformation from '../clientApps/PeopleManagment/Components/CompanyInformation/CompanyInformation';
import CompanyStructure from '../clientApps/peoplemanagment/components/CompanyStructure/CompanyStructure';
import Employees from '../clientApps/PeopleManagment/Components/Employees';
import EmployeeStructure from '../clientApps/PeopleManagment/Components/EmployeesStructure';
import OnBoarding from '../clientApps/PeopleManagment/Components/Onboarding/OnBoarding';
import OffBoarding from '../clientApps/peoplemanagment/components/Offboarding/OffBoarding';
import AllRequest from '../clientApps/PeopleManagment/Components/RequestManagment/AllRequest';
import TimeRequest from '../clientApps/PeopleManagment/Components/RequestManagment/TimeRequest';
import HRRequest from '../clientApps/PeopleManagment/Components/RequestManagment/HRrequst';
import FinancialRequest from '../clientApps/PeopleManagment/Components/RequestManagment/FinancialRequest';
import CLientLayout from '../Layouts/ClientLayout';
import ConditionalTabsWrapper from '../clientApps/PeopleManagment/Components/ConditionalTabsWrapper'; // Tabs wrapper for non-request routes

const ClientRoutes = [
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/home", element: <ClientDashboard /> },

  // Wrap the non-request people management routes with ConditionalTabsWrapper
  {
    path: "/peopleManagement",
    element: <CLientLayout><ConditionalTabsWrapper /></CLientLayout>,
    children: [
      { path: "", element: <Navigate to="companyInformation" /> }, // Redirect to companyInformation by default
      { path: "companyInformation", element: <CompanyInformation /> },
      { path: "companyStructure", element: <CompanyStructure /> },
      { path: "employees", element: <Employees /> },
      { path: "employeeStructure", element: <EmployeeStructure /> },
      { path: "onBoarding", element: <OnBoarding /> },
      { path: "offBoarding", element: <OffBoarding /> },
    ],
  },

  // Request Management routes without wrapping in ConditionalTabsWrapper
  {
    path: "/peopleManagement/requestsManagement/AllRequest",
    element: <CLientLayout><AllRequest /></CLientLayout>,
  },
  {
    path: "/peopleManagement/requestsManagement/timeRequest",
    element: <CLientLayout><TimeRequest /></CLientLayout>,
  },
  {
    path: "/peopleManagement/requestsManagement/hrRequest",
    element: <CLientLayout><HRRequest /></CLientLayout>,
  },
  {
    path: "/peopleManagement/requestsManagement/financialRequest",
    element: <CLientLayout><FinancialRequest /></CLientLayout>,
  },
];

export default ClientRoutes;
