import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import DepartmentIcon from '../../../../assets/svgs/department.svg';
import Employessicon from '../../../../assets/svgs/employess.svg';
import sector from '../../../../assets/svgs/sector.svg'

const DepartmentModal = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-end z-50">
      <div className="bg-white w-80 md:w-96 h-full shadow-lg p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">View Marketing Department</h2>
          <button onClick={onClose} className="text-gray-600 font-bold text-lg">X</button>
        </div>
        <div className="p-4 rounded-lg mb-4 border border-white">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-700">About Department</h3>
            <button className="bg-primary-gradient text-white px-3 py-1 rounded flex items-center gap-1 pt-1.5 pb-1.5">
              <MdEdit />
              Edit
            </button>
          </div>
          <p className="flex items-center mb-2">
            <img src={DepartmentIcon} alt="Department Icon" className="mr-2 w-4 h-4" />
            <span className="font-semibold text-primary">Department Name:</span>
            <span className="ml-1" style={{ color: '#252525' }}> Marketing</span>
          </p>
          <p className="flex items-center mb-2">
            <img src={sector} alt="Department Icon" className="mr-2 w-4 h-4" />
            <span className="font-semibold text-primary">Sector</span>
            <span className="ml-1" style={{ color: '#252525' }}> lorem990109</span>
          </p>
          <p className="flex items-center">
            <img src={Employessicon} alt="Employees Icon" className="mr-2 w-4 h-4" />
            <span className="font-semibold text-primary">Employees:</span>
            <span className="ml-1" style={{ color: '#252525' }}> 25 employees</span>
          </p>
        </div>
        <ul className="space-y-4"> {/* Adjust margin between sections */}
          {['Sections', 'Business Units', 'Employees'].map((item) => (
            <li key={item} className="border border-gray-100 p-4 rounded-lg"> {/* Add padding, border, and rounded corners */}
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(item)}
                style={{ color: '#454545' }} // Set the text color to #454545
              >
                {item}
                {expandedSection === item ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>
              {expandedSection === item && (
                <div className="p-2 mt-2 text-sm"> {/* Add margin-top for spacing */}
                  {/* Detailed Info for Each Section */}
                  {item === 'Sections' && (
                    <>
                      <p className='mb-4'><span className="font-semibold text-primary ">Section ID:</span> <span className="text-gray-600">S123456</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary ">Section Name:</span> <span className="text-gray-600">HR Policies</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary mb-4">Manager:</span> <span className="text-gray-600">Jane Doe</span></p>
                    </>
                  )}
                  {item === 'Business Units' && (
                    <>
                      <p className='mb-4'><span className="font-semibold text-primary">Unit Name:</span> <span className="text-gray-600">Operations</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Unit Head:</span> <span className="text-gray-600">John Smith</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Unit Size:</span> <span className="text-gray-600">50 employees</span></p>
                    </>
                  )}
                  {item === 'Employees' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-200 p-2 text-center rounded text-[#5D5D5D] hover:text-[#0085C0]">John Smith</div>
                      <div className="bg-gray-200 p-2 text-center rounded text-[#5D5D5D] hover:text-[#0085C0]">Emily Johnson</div>
                      <div className="bg-gray-200 p-2 text-center rounded text-[#5D5D5D] hover:text-[#0085C0]">Michael Brown</div>
                      <div className="bg-gray-200 p-2 text-center rounded text-[#5D5D5D] hover:text-[#0085C0]">Sarah Davis</div>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="mt-4 px-5 bg-primary-gradient text-white py-2 rounded">Close</button>
      </div>
    </div>
  );
};

export default DepartmentModal;
