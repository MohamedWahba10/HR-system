import React from 'react';
import Layout from '../../Layouts/Layout';
import Tab from '../../Common/Tab';
import { Routes, Route, Navigate } from 'react-router-dom';
import CompanyInfo from './Components/CompanyInfo';
import Setup from './Components/Setup';
import Branch from './Branch';
import Department from './Department';
import Positions from './Positions';
import Employees from './Employees';
import OrganizationalStructure from './OrganizationalStructure';
import Documents from './Documents';


const tabs = [
  { label: 'Company Information', path: 'company-information', component: <CompanyInfo /> },
  { label: 'Setup', path: 'setup/*', component: <Setup /> },
  { label: 'Branches', path: 'branches/*', component: <Branch /> },
  { label: 'Departments', path: 'departments/*', component: <Department /> },
  { label: 'Positions', path: 'positions', component: <Positions /> },
  { label: 'Employees', path: 'employees', component: <Employees /> },
  { label: 'Organizational Structure', path: 'organizational-structure', component: <OrganizationalStructure /> },
  { label: 'Documents', path: 'documents', component: <Documents /> },
];

const ClientSetup = () => {
  return (
    <Layout>
      <div className="w-full shadow-none">
      <h1 className='block font-semibold text-xl px-4 pt-2 bg-white'>Adding New Company</h1>
        <Tab tabs={tabs} />
        <div className="">
          <Routes>
            <Route path="/" element={<Navigate to="company-information" />} />
            {tabs.map((tab) => (
              <Route key={tab.path} path={tab.path} element={tab.component} />
            ))}
          </Routes>
        </div>
      </div>
    </Layout>
  );
};

export default ClientSetup;
