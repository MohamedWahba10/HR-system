import React, { useState } from 'react';
import ModalContainer from '../../../../Common/ModalContainer';
import FormField from '../../../../Common/FormField';

// Dummy data for employees
const employees = [
  { id: '123456', name: 'Reem Ahmad', department: 'IT Department', position: 'UI UX Designer' },
  { id: '123457', name: 'John Doe', department: 'Finance', position: 'Accountant' },
  { id: '123458', name: 'Jane Smith', department: 'HR', position: 'HR Manager' },
  { id: '123459', name: 'Alice Johnson', department: 'Marketing', position: 'Marketing Specialist' },
  { id: '123460', name: 'Bob Brown', department: 'Engineering', position: 'Software Engineer' },
];

export default function AddOrganizationalStructureModal({ modalIsOpen, closeModal }) {
  const [showEmployeeList, setShowEmployeeList] = useState(false);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const handleDisplayEmployees = () => {
    setShowEmployeeList(true);
  };

  const handleEmployeeSelect = (employee) => {
    setSelectedEmployees((prevSelected) => {
      if (prevSelected.some((e) => e.id === employee.id)) {
        return prevSelected.filter((e) => e.id !== employee.id);
      } else {
        return [...prevSelected, employee];
      }
    });
  };

  const handleAddEmployees = () => {
    setShowEmployeeList(false);
  };

  return (
    <ModalContainer isOpen={modalIsOpen} onRequestClose={closeModal} title="Add Employee Organizational Structure">
      {showEmployeeList ? (
        <div>
          <FormField type="text" placeholder="Search" style={{ marginBottom: '10px', width: '100%' }} />
          <button>Search</button>
          <div>
            {employees.map((employee) => (
              <div
                key={employee.id}
                onClick={() => handleEmployeeSelect(employee)}
                style={{ display: 'flex', alignItems: 'center', margin: '10px 0', cursor: 'pointer', backgroundColor: selectedEmployees.some((e) => e.id === employee.id) ? '#e0e0e0' : 'transparent' }}
              >
                <input type="checkbox" checked={selectedEmployees.some((e) => e.id === employee.id)} readOnly />
                <img src={employee.image} alt={employee.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                <div style={{ flex: 1 }}>
                  <span style={{ display: 'block', fontWeight: 'bold' }}>{employee.name}</span>
                  <span style={{ display: 'block' }}>{employee.role}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ display: 'block' }}>{employee.department}</span>
                  <span style={{ display: 'block' }}>ID: {employee.id}</span>
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-center gap-4'>
          <button className='text-center px-4 py-1 bg-primary text-white rounded-lg' onClick={handleAddEmployees} style={{ marginTop: '10px' }}>Add Employee</button>
          <button className='text-center px-4 py-1 border border-primary text-primary rounded-lg' onClick={() => setShowEmployeeList(false)} style={{ marginTop: '10px', marginLeft: '10px' }}>Back</button>
          </div>
           </div>
      ) : (
        <div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Employee
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FormField type="text" label="" name="employeeName" value={selectedEmployees.map(e => e.name).join(', ')} readOnly style={{ flex: '1', marginRight: '10px' }} />
                <button onClick={handleDisplayEmployees} className='bg-primary px-2 py-2 text-white rounded-md' style={{ flexShrink: '0' }}>Display Employees</button>
              </div>
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <FormField
              type="number"
              label="Id Number"
              name="idNumber"
              value={selectedEmployees.map(e => e.id).join(', ')}
              readOnly
              placeholder="Id Number"
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <FormField
              type="text"
              label="Position"
              name="position"
              value={selectedEmployees.map(e => e.role).join(', ')}
              readOnly
              placeholder="Position"
            />
          </div>
          <div className='flex justify-center'>
          <button className='text-center px-4 py-1 bg-primary text-white rounded-lg'>Add</button>

          </div>
        </div>
      )}
    </ModalContainer>
  );
}