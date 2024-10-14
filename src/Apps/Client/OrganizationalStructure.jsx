import React, { useState } from 'react';
import AddOrganizationalStructureModal from './Components/Organizational Structure/AddOrganizationalStructureModal';

// Dummy data for initial structure
const initialStructure = {
    id: '123456789',
    name: 'Reem Ahmad',
    role: 'UI/UX Designer',
    department: 'Design',
    image: 'https://via.placeholder.com/50', // Placeholder image from the internet
    subordinates: [
      {
        id: '12345678',
        name: 'Reem Ahmad',
        role: 'UI/UX Designer',
        department: 'Design',
        image: 'https://via.placeholder.com/50',
        subordinates: [],
      },
      {
        id: '12345679',
        name: 'Reem Ahmad',
        role: 'UI/UX Designer',
        department: 'Design',
        image: 'https://via.placeholder.com/50',
        subordinates: [],
      },
      {
        id: '12345680',
        name: 'Reem Ahmad',
        role: 'UI/UX Designer',
        department: 'Design',
        image: 'https://via.placeholder.com/50',
        subordinates: [],
      },
      {
        id: '12345681',
        name: 'Reem Ahmad',
        role: 'UI/UX Designer',
        department: 'Design',
        image: 'https://via.placeholder.com/50',
        subordinates: [],
      },
    ],
  };
  
  export default function OrganizationalStructure() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [structure, setStructure] = useState(initialStructure);
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    const addEmployee = (employee) => {
      setStructure((prevStructure) => ({
        ...prevStructure,
        subordinates: [...prevStructure.subordinates, employee],
      }));
      closeModal();
    };
  
    const renderStructure = (employee) => (
      <div key={employee.id} className="flex flex-col items-center">
        <div className="relative flex flex-col items-center bg-white py-4 px-4 shadow-round rounded-lg border border-gray-300">
          <img src={employee.image} alt={employee.name} className="w-16 h-16 rounded-full mb-2 absolute -top-8 border-4 border-white" />
          <div className="bg-blue-100 text-xs rounded-lg py-4 px-4  flex flex-col justify-start  mt-6 w-full ">
            <span className="text-sm block">{employee.name}</span>
            <span className="text-sm block">{employee.role}</span>
            <span className="tex-sm block">ID: {employee.id}</span>
            {employee.subordinates && employee.subordinates.length > 0 && (
              <div className="p-2 mt-2  bg-white rounded-md">
                {employee.subordinates.length} Employees
              </div>
            )}
          </div>
          {/* {employee.subordinates && employee.subordinates.length > 0 && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2" style={{ width: '2px', height: '20px', backgroundColor: '#000' }}></div>
          )} */}
        </div>
        {employee.subordinates && employee.subordinates.length > 0 && (
          <div className="grid grid-cols-4 gap-10 mt-10">
            {employee.subordinates.map((subordinate) => (
              <div key={subordinate.id} className="relative flex flex-col items-center">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2" style={{ width: '2px', height: '20px', backgroundColor: '#000' }}></div>
                {renderStructure(subordinate)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  
    return (
    <div className='my-4'>
        <div className='bg-white p-4 shadow-round'>
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold mb-4">Organizational Structure</h1>
          <button onClick={openModal} className="py-1 px-2 bg-primary text-white rounded-lg">
            + Organizational Structure
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {renderStructure(structure)}
        </div>
        <AddOrganizationalStructureModal modalIsOpen={modalIsOpen} closeModal={closeModal} addEmployee={addEmployee} />
      </div>
    </div>
    );
  }