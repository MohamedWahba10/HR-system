import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SubTab from '../../../Common/SubTab';
import Organization from './Organization';
import Vacations from './Vacations';
import WorkShift from './WorkShift';
import Package from './Package';
import ClientApp from './ClientApp';


const subtabs = [
  { label: 'Organization', path: 'organization', component: <Organization /> },
  { label: 'Vacations', path: 'vacations/*', component: <Vacations /> },
  { label: 'WorkShift', path: 'workshift', component: <WorkShift /> },
  { label: 'Package', path: 'package', component: <Package /> },
  { label: 'App', path: 'app', component: <ClientApp /> },
];

const Setup = () => {
  return (
    <div className="my-4">
      <SubTab tabs={subtabs} />
      <div className="p-4 bg-white">
        <Routes>
          <Route path="/*" element={<Navigate to="organization" />} />
          {subtabs.map((tab) => (
            <Route key={tab.path} path={tab.path} element={tab.component} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default Setup;
