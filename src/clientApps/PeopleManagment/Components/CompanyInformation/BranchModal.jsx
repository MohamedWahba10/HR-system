import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import BranchIcon from '../../../../assets/svgs/Branches icon .svg';
import locatiOIcon from '../../../../assets/svgs/location.svg';
import Employessicon from '../../../../assets/svgs/employess.svg';
import SamplePDF from '../../../../assets/pdfs/test.pdf';
import PdfIcon from '../../../../assets/svgs/PDFIcon.svg'

const BranchModal = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-end z-50">
      <div className="bg-white w-80 md:w-96 h-full shadow-lg p-4 overflow-y-auto pt-6">
      <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">View AL-olya Branch</h2>
          <button onClick={onClose} className="text-gray-600 font-bold text-lg">X</button>
        </div>
        <div className="p-4 rounded-lg mb-4 border border-grey-100">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-700">About Branch</h3>
            <button className="bg-primary-gradient text-white px-3 py-1 rounded flex items-center gap-1 pt-1.5 pb-1.5">
              <MdEdit />
              Edit
            </button>
          </div>
          <p className="flex items-center mb-2">
            <img src={BranchIcon} alt="Branch Icon" className="mr-2 w-4 h-4" />
            <span className="font-semibold text-primary">Branch Name:</span>
            <span className="ml-1" style={{ color: '#454545' }}> AL-OLYA</span>  
          </p>
          <p className="flex items-center mb-2">
            <img src={locatiOIcon} alt="Location Icon" className="mr-2 w-4 h-4" />
            <span className="font-semibold text-primary">Location:</span>
            <span className="ml-1" style={{ color: '#454545' }}> Rawdah, Riyadh</span>
          </p>
          <p className="flex items-center mb-2">
            <img src={Employessicon} alt="Employees Icon" className="mr-2 w-4 h-4" />
            <span className="font-semibold text-primary">Employees:</span>
            <span className="ml-1" style={{ color: '#454545' }}> 10 employees</span>
          </p>
        </div> 
        <ul className="space-y-4"> {/* Adjust margin between sections */}
          {['Branch Info', 'Bank Info', 'Departments', 'Sites', 'Projects', 'Document', 'Employees'].map((item) => (
            <li key={item} className="border border-gray-100 p-4 rounded-lg"> {/* Add padding, border, and rounded corners */}
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(item)}
                style={{color : '#454545'}}
              >
                {item}
                {expandedSection === item ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>
              {expandedSection === item && (
                <div className="p-2 mt-2 text-sm"> {/* Add margin-top for spacing */}
                  {/* Detailed Info for Each Section */}
                  {item === 'Branch Info' && (
                    <>
                      <p className='mb-4'><span className="font-semibold text-primary">Branch Register ID:</span> <span className="text-gray-600">12345678</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Register ID start date:</span> <span className="text-gray-600">10/10/2024</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Register ID Expiration date:</span> <span className="text-gray-600">10/10/2024</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Tax file ID:</span> <span className="text-gray-600">123456</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Tax file ID start date:</span> <span className="text-gray-600">10/10/2024</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Tax file ID Expiration date:</span> <span className="text-gray-600">10/10/2024</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Email:</span> <span className="text-gray-600">example@domain.com</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Phone number:</span> <span className="text-gray-600">123456</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Country:</span> <span className="text-gray-600">lorem ipsum</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">City:</span> <span className="text-gray-600">lorem ipsum</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Location:</span> <span className="text-gray-600">lorem ipsum</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Geofence:</span> <span className="text-gray-600">lorem ipsum</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Postal code:</span> <span className="text-gray-600">123456</span></p>
                    </>
                  )}
                  {item === 'Bank Info' && (
                    <>
                      <p className='mb-4'><span className="font-semibold text-primary">Bank Name:</span> <span className="text-gray-600">Bank of Ipsum</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Account Number:</span> <span className="text-gray-600">987654321</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">IBAN:</span> <span className="text-gray-600">AE12345678901234567890</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">SWIFT Code:</span> <span className="text-gray-600">IPSMBANK</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Branch Name:</span> <span className="text-gray-600">Main Branch</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Branch Address:</span> <span className="text-gray-600">123 Ipsum Street</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">City:</span> <span className="text-gray-600">Ipsum City</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Country:</span> <span className="text-gray-600">Lorem Country</span></p>
                    </>
                  )}
                  {item === 'Departments' && (
                    <>
                      <p className='mb-4'><span className="font-semibold text-primary">Department Name:</span> <span className="text-gray-600">Human Resources</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Head of Department:</span> <span className="text-gray-600">John Doe</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Number of Employees:</span> <span className="text-gray-600">25</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Contact:</span> <span className="text-gray-600">hr@domain.com</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Phone:</span> <span className="text-gray-600">555-1234</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Location:</span> <span className="text-gray-600">1st Floor, Building A</span></p>
                    </>
                  )}
                  {item === 'Sites' && (
                    <>
                      <p className='mb-4'><span className="font-semibold text-primary">Site Name:</span> <span className="text-gray-600">Main Office</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Address:</span> <span className="text-gray-600">456 Main St, Ipsum City</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Contact Person:</span> <span className="text-gray-600">Jane Smith</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Email:</span> <span className="text-gray-600">site@domain.com</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Phone:</span> <span className="text-gray-600">555-6789</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Operating Hours:</span> <span className="text-gray-600">9 AM - 6 PM</span></p>
                    </>
                  )}
                  {item === 'Projects' && (
                    <>
                      <p className='mb-4'><span className="font-semibold text-primary">Project Name:</span> <span className="text-gray-600">Project Alpha</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Start Date:</span> <span className="text-gray-600">01/01/2024</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">End Date:</span> <span className="text-gray-600">12/31/2024</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Status:</span> <span className="text-gray-600">In Progress</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Project Manager:</span> <span className="text-gray-600">Emily Johnson</span></p>
                      <p className='mb-4'><span className="font-semibold text-primary">Budget:</span> <span className="text-gray-600">$1,000,000</span></p>
                    </>
                  )}
                    {item === 'Document' && (
                <div className="flex space-x-4">
                {/* Document 1 */}
                <a 
                  href={SamplePDF} 
                  download="Document1.pdf" 
                  className="p-4 w-1/2 text-center rounded cursor-pointer"
                >
                  <div className="hover:translate-x-[-2px] hover:translate-y-[2px] transition-transform duration-200 ease-in-out">
                    <img 
                      src={PdfIcon} 
                      alt="PDF Icon" 
                      className="mx-auto mb-2"
                    />
                    <span>PDF</span>
                  </div>
                </a>
                
                {/* Document 2 */}
                <a 
                  href={SamplePDF} 
                  download="Document2.pdf" 
                  className="p-4 w-1/2 text-center rounded cursor-pointer"
                >
                  <div className="hover:translate-x-[-2px] hover:translate-y-[2px] transition-transform duration-200 ease-in-out">
                    <img 
                      src={PdfIcon} 
                      alt="PDF Icon" 
                      className="mx-auto mb-2"
                    />
                    <span>PDF</span>
                  </div>
                </a>
              </div>
              
                  )}
                  {item === 'Employees' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-200 p-2 text-center rounded text-[#5D5D5D] hover:text-[#0085C0]">leo</div>
                      <div className="bg-gray-200 p-2 text-center rounded text-[#5D5D5D] hover:text-[#0085C0]">ney</div>
                      <div className="bg-gray-200 p-2 text-center rounded text-[#5D5D5D] hover:text-[#0085C0]">Mohamed </div>
                      <div className="bg-gray-200 p-2 text-center rounded text-[#5D5D5D] hover:text-[#0085C0]">Sarah </div>
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

export default BranchModal;
