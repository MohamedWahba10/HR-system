import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';
import arrow from '../../../../assets/svgs/arrow.svg';
import HRrequestModal2View from './HRrequestModal2View'; // Importing the View Modal
import DateInputWithPlaceholder from './filterInputs/DateInputWithPlaceholder';
import { IoArrowBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import EmployeeSelect from './filterInputs/EmployeeSelect';
import StatusFilter from './filterInputs/StatusFilter';
import AllRequestTypeSelect from './filterInputs/AllRequestTypeSelect'; // Import your renamed component


export default function AllRequest() {
  const [showFilters, setShowFilters] = useState(false); // State to show/hide filters
  const [currentPage, setCurrentPage] = useState(1);
  const [isViewModalVisible, setViewModalVisible] = useState(false); // Modal visibility for View Request
  const [selectedRequestType, setSelectedRequestType] = useState(''); // State to hold the selected request type
  const [selectedEmployees, setSelectedEmployees] = useState([]); // To hold multiple selected employees
  const [selectedStatuses, setSelectedStatuses] = useState([]); // To hold multiple selected statuses
  const [selectedDate, setSelectedDate] = useState(''); // State for the selected date
  const [selectedRequestTypes, setSelectedRequestTypes] = useState([]); // State to hold multiple selected request types for filtering



  const requestsPerPage = 5;

  let navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('../peopleManagement/offBoarding'); // Navigate to EmployeesStructure
  };

 // Example employee data
 const employees = [
  { name: "Jordan Stevenson", id: "123456789", request: "letters", createTime: "05:00 pm", createDate: "2020-04-25", createdBy: "Admin", status: "Pending" },
  { name: "Leo Andres", id: "987654321", request: "Vacation", createTime: "05:00 pm", createDate: "2024-01-10", createdBy: "Admin", status: "Accepted" },
  { name: "Mohamed Ahmed", id: "456789123", request: "Leaves", createTime: "05:00 pm", createDate: "2019-08-08", createdBy: "Admin", status: "Withdraw" },
  { name: "Adam Joe", id: "789123456", request: "Voice", createTime: "05:00 pm", createDate: "2021-04-10", createdBy: "Admin", status: "Accepted" },
  { name: "Marc Andre", id: "159357456", request: "Change bank IBAN", createTime: "05:00 pm", createDate: "2024-10-05", createdBy: "Admin", status: "Rejected" },
  { name: "Carla Jone", id: "357159753", request: "Share the moment", createTime: "05:00 pm", createDate: "2010-10-10", createdBy: "Admin", status: "Pending" }
];

  const filteredEmployees = selectedEmployees.length === 0 || selectedEmployees.includes('All Employees')
  ? employees
  : employees.filter(employee => selectedEmployees.includes(employee.name));

// Apply status filtering
const statusFilteredEmployees = selectedStatuses.length === 0
  ? filteredEmployees
  : filteredEmployees.filter(employee => selectedStatuses.includes(employee.status));


    // Apply date filtering
    const dateFilteredEmployees = selectedDate === ''
    ? statusFilteredEmployees
    : statusFilteredEmployees.filter(employee => employee.createDate === selectedDate);

     // Apply Request filtering
    const requestFilteredEmployees = selectedRequestTypes.length === 0
  ? statusFilteredEmployees // Or dateFilteredEmployees if date is applied first
  : statusFilteredEmployees.filter(employee => selectedRequestTypes.includes(employee.request));



  const finalFilteredEmployees = requestFilteredEmployees;  // After applying all filters
  const totalPages = Math.ceil(finalFilteredEmployees.length / requestsPerPage);
  
  const displayedEmployees = finalFilteredEmployees.slice(
    (currentPage - 1) * requestsPerPage,
    currentPage * requestsPerPage
  );
  
 


  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters); // Toggle the visibility of filters
  };

  // Handle View Button click to show request details
  const handleViewClick = (requestType) => {
    setSelectedRequestType(requestType); // Set dynamic content based on request type
    setViewModalVisible(true);
  };

  // Close View Request modal
  const closeViewModal = () => {
    setViewModalVisible(false);
  };

  const handleEmployeeFilterChange = (selectedOptions) => {
    setSelectedEmployees(selectedOptions); // Set multiple selected employees
  };
  
  return (
    <>
      <div className="flex items-center mb-6">
        <IoArrowBackSharp
          className="text-xl mr-2 cursor-pointer"
          onClick={handleBackClick} // Handle click to navigate
        />
        <h2 className="text-lg font-semibold">All Requests</h2>
      </div>

      <div className="p-4 shadow-md bg-white">

        {/* Filters Section (Toggles visibility) */}
        {showFilters && (
          <>
            <h2 className="text-lg font-semibold ms-5">Filters</h2>
            <div className="mb-4 grid grid-cols-4 gap-4 p-4 rounded-lg bg-white">
              
              {/* Employee Select */}
         
                  <EmployeeSelect
                  employees={employees}
                  selectedEmployees={selectedEmployees}
                  onEmployeeChange={handleEmployeeFilterChange}
                />
              {/* Department Select */}
              <div className="relative group">
                <select className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#A3A3A3] pr-10 bg-white">
                  <option>Department</option>
                </select>
                <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mb-5">
                  <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-6" />
                </span>
              </div>

              {/* Branch Select */}
              <div className="relative group">
                <select className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#A3A3A3] pr-10 bg-white">
                  <option>Branch</option>
                </select>
                <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mb-5">
                  <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-6" />
                </span>
              </div>

              {/* Request Type Multi-Select */}
              <AllRequestTypeSelect
  selectedRequestTypes={selectedRequestTypes} // Should be an array
  onRequestTypeChange={setSelectedRequestTypes} // Pass the setter for multiple selected types
/>



              {/*  DateInputWithPlaceholder) */}
              <div className="relative group">
                          
              <DateInputWithPlaceholder
            placeholder="Select Date"
            onDateChange={setSelectedDate} // Set the selected date to filter
          />
                          </div>


              {/* Create Date Select */}
              <div className="relative group">
                <select className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#A3A3A3] pr-10 bg-white">
                  <option>Create by</option>
                  <option>Admin</option>
                  <option>Employee</option>
                </select>
                <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mb-5">
                  <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-6" />
                </span>
              </div>

      
           
              
              {/* Status Filter */}
              <StatusFilter
                selectedStatuses={selectedStatuses}
                onStatusChange={setSelectedStatuses}
              />
            </div>
          </>
        )}

        {/* Top Section with Select, Search and Export */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <label htmlFor="show" className="mr-2 text-[#A3A3A3]">Show</label>
            <div className="relative">
              <select
                id="show"
                className="appearance-none border border-gray-300 rounded-md px-6 py-2 pr-10 text-[#A3A3A3] bg-white"
                value={requestsPerPage}
                disabled
              >
                <option value={requestsPerPage}>{requestsPerPage}</option>
              </select>
              <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
                <img src={arrow} alt="arrow" className="w-2.5 h-2.5 text-[#A3A3A3]" />
              </span>
            </div>

            <button
              className={`ml-4 border rounded-md text-[#A3A3A3] px-4 py-2 flex items-center transition-colors 
              ${showFilters ? 'border-primaryhover text-primary' : 'border-gray-300'}`}
              onClick={toggleFilters}
            >
              Filters
              <img
                src={arrow}
                alt="Arrow Icon"
                className={`ml-2 transform transition-transform ${showFilters ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] rounded px-4 py-2 mr-2"
            />
            <button className="bg-primary-gradient text-white px-4 py-2 rounded">Export Sheet</button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="border-b-2 border-t-2 border-gray-300">
              <tr className="uppercase text-sm">
                {/* Employee Name */}
                <th className="w-[15%] text-sm text-[#454545] font-medium">
                  <div className="relative flex justify-center items-center h-12">
                    <span className="text-center">Employee Name</span>
                    <div className="absolute right-0 h-6 border-r-2 border-gray-300"></div>
                  </div>
                </th>

                {/* Employee ID */}
                <th className="w-[10%] text-sm text-[#454545] font-medium">
                  <div className="relative flex justify-center items-center h-12">
                    <span className="text-center">Employee ID</span>
                    <div className="absolute right-0 h-6 border-r-2 border-gray-300"></div>
                  </div>
                </th>

                {/* Requests */}
                <th className="w-[10%] text-sm text-[#454545] font-medium">
                  <div className="relative flex justify-center items-center h-12">
                    <span className="text-center">Requests</span>
                    <div className="absolute right-0 h-6 border-r-2 border-gray-300"></div>
                  </div>
                </th>

                {/* Create Time */}
                <th className="w-[10%] text-sm text-[#454545] font-medium">
                  <div className="relative flex justify-center items-center h-12">
                    <span className="text-center">Create Time</span>
                    <div className="absolute right-0 h-6 border-r-2 border-gray-300"></div>
                  </div>
                </th>

                {/* Create Date */}
                <th className="w-[10%] text-sm text-[#454545] font-medium">
                  <div className="relative flex justify-center items-center h-12">
                    <span className="text-center">Create Date</span>
                    <div className="absolute right-0 h-6 border-r-2 border-gray-300"></div>
                  </div>
                </th>

                {/* Created By */}
                <th className="w-[10%] text-sm text-[#454545] font-medium">
                  <div className="relative flex justify-center items-center h-12">
                    <span className="text-center">Create By</span>
                    <div className="absolute right-0 h-6 border-r-2 border-gray-300"></div>
                  </div>
                </th>

                {/* Status */}
                <th className="w-[10%] text-sm text-[#454545] font-medium">
                  <div className="relative flex justify-center items-center h-12">
                    <span className="text-center">Status</span>
                    <div className="absolute right-0 h-6 border-r-2 border-gray-300"></div>
                  </div>
                </th>

                {/* Procedure */}
                <th className="w-[10%] text-sm text-[#454545] font-medium">
                  <div className="relative flex justify-center items-center h-12">
                    <span className="text-center">Procedure</span>
                  </div>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-sm divide-y divide-gray-200">
              {displayedEmployees.map((employee, index) => (
                <tr key={index} className="bg-white hover:bg-gray-50">
                  {/* Employee Name with Image */}
                  <td className="py-4 text-[#6D6D6D] px-4">
                    <div className="flex items-center">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://via.placeholder.com/40"
                        alt="profile"
                      />
                      <div className="ml-4">{employee.name}</div>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-center text-[#6D6D6D]">{employee.id}</td>
                  <td className="py-2 px-4 text-center text-[#6D6D6D]">{employee.request}</td>
                  <td className="py-2 px-4 text-center text-[#6D6D6D]">{employee.createTime}</td>
                  <td className="py-2 px-4 text-center text-[#6D6D6D]">{employee.createDate}</td>
                  <td className="py-2 px-4 text-center text-[#6D6D6D]">{employee.createdBy}</td>
                  <td className="py-2 px-4 text-center">
                    <div
                      className={`ms-6 py-1 rounded-md w-24 ${
                        employee.status === 'Pending'
                          ? 'bg-[#4D73F829] text-[#4D73F8]'
                          : employee.status === 'Accepted'
                          ? 'bg-[#22985629] text-[#229856]'
                          : employee.status === 'Withdraw'
                          ? 'bg-[#FF9F4329] text-[#FF9F43]'
                          : employee.status === 'Rejected'
                          ? 'bg-[#FF4C5129] text-[#FF4C51]'
                          : ''
                      }`}
                    >
                      {employee.status}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      className="hover:text-[#0085C0] flex items-center group"
                      onClick={() => handleViewClick(employee.request)} // Pass the request type
                    >
                      <FaEye className="mr-1 ms-6 text-primary group-hover:text-[#0085C0]" /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-between items-center">
          <div className="text-gray-600">
            Showing {(currentPage - 1) * requestsPerPage + 1} to {Math.min(currentPage * requestsPerPage, employees.length)} of {employees.length} entries
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className={`p-2 ${currentPage === 1 ? 'text-gray-300' : 'text-gray-400'} hover:text-gray-800`}
            >
              <FaAngleDoubleLeft />
            </button>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 ${currentPage === 1 ? 'text-gray-300' : 'text-gray-400'} hover:text-gray-800`}
            >
              <FaAngleLeft />
            </button>
            <span className="px-4 py-1 bg-primary text-white rounded-lg text-sm">
              {currentPage}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 ${currentPage === totalPages ? 'text-gray-300' : 'text-gray-400'} hover:text-gray-800`}
            >
              <FaAngleRight />
            </button>
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              className={`p-2 ${currentPage === totalPages ? 'text-gray-300' : 'text-gray-400'} hover:text-gray-800`}
            >
              <FaAngleDoubleRight />
            </button>
          </div>
        </div>

        {/* View Request Modal */}
        <HRrequestModal2View isVisible={isViewModalVisible} onClose={closeViewModal} activeIcon={selectedRequestType}>
          {/* Dynamic content inside the modal */}
        </HRrequestModal2View>
      </div>
    </>
  );
}
