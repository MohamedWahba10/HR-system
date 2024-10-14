import React, { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight ,FaEye} from 'react-icons/fa';
import arrow from '../../../../assets/svgs/arrow.svg';
import leaves from '../../../../assets/svgs/leavesIcon.svg'
import whiteleaves from '../../../../assets/svgs/whiteLeavesIcon.svg'
import vacation from '../../../../assets/svgs/vacationIocn.svg'
import whitevacation from '../../../../assets/svgs/whiteVacationIcon.svg'
import MissingPunch from '../../../../assets/svgs/missingPunshIcon.svg'
import whiteMissingPunch from '../../../../assets/svgs/whiteMissingPunchIocn.svg'
import EmployeeSelect from './filterInputs/EmployeeSelect';
import { IoArrowBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Modal from './HRrequestModal';
import RequestFilterDropdown from './filterInputs/RequestFilterDropdown'
import HRrequestModal2View from './HRrequestModal2View'; // For Viewing Request Details






export default function TimeRequest() {
  const [showFilters, setShowFilters] = useState(false); // State to show/hide filters
  const [currentPage, setCurrentPage] = useState(1);
  const [activeIcon , setActiveIcon] = useState('leaves')
  const [selectedEmployees, setSelectedEmployees] = useState([]); // To hold multiple selected employees
  const [modalTitle, setModalTitle] = useState(''); // Modal title for New Request
  const [isModalVisible, setModalVisible] = useState(false); // Modal visibility state
  const [modalContent, setModalContent] = useState(''); // Modal content for the request
  const [selectedRequestTypes, setSelectedRequestTypes] = useState([]); // hold multiple request types
  const [isViewModalVisible, setViewModalVisible] = useState(false); // Modal visibility for View Request





  const requestsPerPage = 5;

  const navigate = useNavigate()


  let handleBackClick = ()=>{

    navigate('../peopleManagement/requestsManagement/AllRequest')
  }


// Custom Previous Arrow
const CustomPrevArrow = ({ onClick }) => (
  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
    <IoIosArrowBack className="text-primary w-6 h-6" onClick={onClick} />
  </div>
);

// Custom Next Arrow
const CustomNextArrow = ({ onClick }) => (
  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
    <IoIosArrowForward className="text-primary w-6 h-6" onClick={onClick} />
  </div>
);
  const employees = [
    {
      name: "leo anderes",
      id: "123456789",
      type: "Vacation",
      createTime: "05:00 pm",
      createDate: "10/10/2024",
      createdBy: "Admin",
      status:"Accepted",
     
     
    },
    {
      name: " Stevenson",
      id: "123456789",
      type: "Vacation",
      createTime: "05:00 pm",
      createDate: "10/10/2024",
      createdBy: "Admin",
      status:"Accepted"
     
    },
    {
      name: "Jordan Stevenson",
      id: "123456789",
      type: "Vacation",
      createTime: "05:00 pm",
      createDate: "10/10/2024",
      createdBy: "Admin",
      status:"Accepted"
     
    },
    {
      name: "Jordan Stevenson",
      id: "123456789",
      type: "Vacation",
      createTime: "05:00 pm",
      createDate: "10/10/2024",
      createdBy: "Admin",
      status:"Accepted"
     
    },
    {
      name: "Jordan Stevenson",
      id: "123456789",
      type: "Vacation",
      createTime: "05:00 pm",
      createDate: "10/10/2024",
      createdBy: "Admin",
      status:"Accepted"
     
    },
  ];

  const filteredEmployees = selectedEmployees.length === 0 || selectedEmployees.includes('All Employees')
  ? employees
  : employees.filter(employee => selectedEmployees.includes(employee.name));


  // Calculate the total number of pages based on filtered employees
  const totalPages = Math.ceil(filteredEmployees.length / requestsPerPage);

  // Get the employees to be displayed on the current page
  const displayedEmployees = filteredEmployees.slice(
    (currentPage - 1) * requestsPerPage,
    currentPage * requestsPerPage
  );



  const handleEmployeeFilterChange = (selectedOptions) => {
    setSelectedEmployees(selectedOptions); // Set multiple selected employees
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  


 // Close View Request modal
 const closeViewModal = () => {
  setViewModalVisible(false);
};



  const toggleFilters = () => {
    setShowFilters(!showFilters); // Toggle the visibility of filters
  };



  const getRequestTypes = (activeIcon) => {
    switch (activeIcon) {
  
      case 'vacation':
        return [
          'Annual',
          'Sick',
          'Marriage',
          'Examination',
          'Birth of new child',
          'Death',
          'Iddah',
          'Hajj',
          'Unpaid'
        ];
    
      // New case for time request - leave
      case 'leaves':
        return ['Personal', 'Business', 'Remote'];
      default:
        return ['Select Request Type'];
    }
  };
  
  // Example of usage inside JSX:
  const requestTypes = getRequestTypes(activeIcon);


  
  
  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
    setSelectedRequestTypes([]); // Reset request type when switching icons
  };
  const handleRequestTypesChange = (selectedOptions) => {
    setSelectedRequestTypes(selectedOptions); // Set multiple selected request types
  }

   // Handle New Request modal click
 const handleNewRequestClick = () => {
  setModalTitle(getModalTitleBasedOnIcon()); // Set the dynamic title
  setModalContent(getModalContentBasedOnIcon()); // Set the dynamic content
  setModalVisible(true); // Show modal when clicked
};

   // Dynamic content based on activeIcon
   const getModalTitleBasedOnIcon = () => {   
    switch (activeIcon) {
      case 'vacation':
        return 'New Vacation Request';
      case 'leaves':
        return 'New Leave Request';
      case 'MissingPunch':
        return 'New Missing Punch Request';
      default:
        return 'Default Request Form';
    }
  };
  const getModalContentBasedOnIcon = () => {
        return 'Request Details';
    
  }
  // Close modal
  const closeModal = () => {
    setModalVisible(false);
  };

  // Handle View Button click to show request details
const handleViewClick = () => {
  setModalContent(getModalContentBasedOnIcon());
  setViewModalVisible(true);
};




  return (
    <>
       <div className="flex items-center mb-6">
          <IoArrowBackSharp
            className="text-xl mr-2 cursor-pointer"
            onClick={handleBackClick} // Handle click to navigate
          />
          <h2 className="text-lg font-semibold">Time Requests</h2>
        </div>
 {/* _________________________________________________________________________________________________________________________ */}


   {/* icons Section */}
   <div className="mb-4 flex justify-around ms-10 me-10">
     
          {/* leaves Icon */}
          <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => handleIconClick('leaves')}>
            <div className={`w-16 h-16 rounded-full flex justify-center items-center mx-auto ${activeIcon === 'leaves' ? 'bg-primary-gradient text-white' : 'bg-[#EDF0F8]'}`}>
              <img src={activeIcon === 'leaves' ? whiteleaves : leaves} alt="Letters Icon" className="w-8 h-8" />
            </div>
            <p className="mt-2 text-center text-sm w-full">Leaves</p>
          </div>

          {/* vacation Icon */}
          <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => handleIconClick('vacation')}>
            <div className={`w-16 h-16 rounded-full flex justify-center items-center mx-auto ${activeIcon === 'vacation' ? 'bg-primary-gradient text-white' : 'bg-[#EDF0F8]'}`}>
              <img src={activeIcon === 'vacation' ? whitevacation : vacation} alt="Share Icon" className="w-8 h-8" />
            </div>
            <p className="mt-2 text-center text-sm w-full">Vacation</p>
          </div>

          {/* MissingPunch Icon */}
          <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => handleIconClick('MissingPunch')}>
            <div className={`w-16 h-16 rounded-full flex justify-center items-center mx-auto ${activeIcon === 'MissingPunch' ? 'bg-primary-gradient text-white' : 'bg-[#EDF0F8]'}`}>
              <img src={activeIcon === 'MissingPunch' ? whiteMissingPunch : MissingPunch} alt="Government Relations Icon" className="w-8 h-8" />
            </div>
            <p className="mt-2 text-center text-sm w-full">Missing Punch</p>
          </div>

       
         
      
      </div>






  {/* _________________________________________________________________________________________________________________________ */}

      <div className="p-4 mt-8 shadow-md bg-white">
      
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
          {/* More options */}
        </select>
        <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mb-5">
          <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-6" />
        </span>
      </div>

      {/* Branch Select */}
      <div className="relative group">
        <select className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#A3A3A3] pr-10 bg-white">
          <option>Branch</option>
          {/* More options */}
        </select>
        <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mb-5">
          <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-6" />
        </span>
      </div>

      
           {/* Request Type Filter */}
           {activeIcon !== 'MissingPunch' && (  
  <RequestFilterDropdown
    requestTypes={requestTypes}
    selectedRequestTypes={selectedRequestTypes}
    onRequestTypesChange={handleRequestTypesChange}
  />
)}

      {/* Create Date Select */}
      <div className="relative group">
        <select className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#A3A3A3] pr-10 bg-white">
          <option>Create Date</option>
          {/* More options */}
        </select>
        <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mb-5">
          <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-6" />
        </span>
      </div>

      {/* Create By Select */}
      <div className="relative group">
        <select className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#A3A3A3] pr-10 bg-white">
          <option>Create By</option>
          {/* More options */}
        </select>
        <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mb-5">
          <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-6" />
        </span>
      </div>

      {/* Status Select */}
      <div className="relative group">
        <select className="appearance-none border-2 border-gray-300 focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] w-full p-2 rounded transition text-[#A3A3A3] pr-10 bg-white">
          <option>Status</option>
          {/* More options */}
        </select>
        <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mb-5">
          <img src={arrow} alt="arrow" className="w-3 h-3 text-[#A3A3A3] mt-6" />
        </span>
      </div>
    </div>
  </>
)}



      {/* Top Section with Select, Search and Export */}
      <div className="flex justify-between items-center mb-4 ">
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
            {/* Custom Arrow */}
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
  
  <button
        className="bg-primary-gradient text-white px-4 py-1 rounded flex items-center"
        onClick={handleNewRequestClick}
      >
    <span className="text-2xl mr-2">+</span> New Request
  </button>
</div>

      </div>

   


      <div className="overflow-x-auto">
  <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="border-b-2 border-t-2 border-gray-300">
            <tr className="uppercase text-sm">
              {/* Employee Name */}
              <th className="w-[12%] text-sm text-[#454545] font-medium">
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


{/* Conditional Type/*/} 
  {activeIcon !== 'bank' && activeIcon !== 'misccellaneous' && (
                 <th className="w-[10%] text-sm text-[#454545] font-medium">
                 <div className="relative flex justify-center items-center h-12">
                   <span className="text-center">Type</span>
                   <div className="absolute right-0 h-6 border-r-2 border-gray-300"></div>
                 </div>
               </th>
                )}


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
                  <div className="absolute right-0 h-6 border-r-2   border-gray-300"></div>
                </div></th>

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
                  <div className="absolute right-0 h-6  border-gray-300"></div>
                </div></th>
                
            </tr>
            
          </thead>
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
                {(activeIcon !== 'bank' && activeIcon !== 'misccellaneous') && (
  <td className="py-2 px-0 text-center text-[#6D6D6D] text-[0.8rem]">
    {activeIcon === 'letters' ? 'Employment Certificate with salary (En)' : 'Share the moment'}
  </td>
)}

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
                <td className="py-2 px-4 text-center text-[#6D6D6D]">    <button className="hover:text-[#0085C0] flex items-center group" onClick={handleViewClick}>
              <FaEye className="mr-1 ms-6 text-primary group-hover:text-[#0085C0]" /> View
            </button></td>
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
          <span className="px-4 py-1 bg-primary text-white rounded-lg text-sm">{currentPage}</span>
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
      </div>









           {/* New Request Modal */}
           <Modal isVisible={isModalVisible} onClose={closeModal} title={modalTitle} requestTypes={requestTypes}>
        {modalContent}
      </Modal>


  {/* View Request Modal */}
  <HRrequestModal2View isVisible={isViewModalVisible} onClose={closeViewModal} activeIcon={activeIcon} >
        {modalContent}
      </HRrequestModal2View>
    </>
  );


}


 