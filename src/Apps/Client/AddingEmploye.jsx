import React from 'react'
import SubTab from '../../Common/SubTab';
import { Navigate, Route, Routes } from 'react-router-dom';
import Information from './Components/Information';
import Layout from '../../Layouts/Layout';
import Attendance from './Components/Employees/Attendance';
import EmployeeSchedule from './Components/Employees/EmployeeSchedule';
import BankInfo from './Components/Employees/BankInfo';
import Payroll from './Components/Employees/Payroll';
import Vacation from './Components/Employees/Vacation';
import Document from './Components/Employees/Document';


export default function AddingEmploye() {
    const subtabs = [
        { label: 'Information', path: 'information', component: <Information /> },
        { label: 'Attendence', path: 'attendance', component: <Attendance /> },
        { label: 'Employee Schedule' , path: 'schedule', component: <EmployeeSchedule /> },
        {label: 'Bank Information' , path: 'bank-information', component: <BankInfo />},
        {label: 'Payroll' , path: 'payroll', component: <Payroll />},
        {label: 'Vacations' , path: 'vacations', component: <Vacation />},
        {label: 'Document' , path: 'document', component: <Document />},
    
      ];

    return (
    <Layout>
        <h1 className="text-xl font-semibold p-4">Adding New Employee</h1>
      <SubTab tabs={subtabs} />
      <div className="p-4 bg-backgroundDefault">
        <Routes>
          <Route path="/*" element={<Navigate to="information" />} />
          {subtabs.map((tab) => (
            <Route key={tab.path} path={tab.path} element={tab.component} />
          ))}
        </Routes>
      </div>
    </Layout>
  );
}
