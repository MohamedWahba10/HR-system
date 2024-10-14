import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight ,FaEye} from 'react-icons/fa';
import arrow from '../../../../assets/svgs/arrow.svg';
import letters from '../../../../assets/svgs/letters.svg'
import whiteletters from '../../../../assets/svgs/whitelettericon.svg'
import share from '../../../../assets/svgs/share.svg'
import whiteshare from '../../../../assets/svgs/whiteShareIcon.svg'
import governmentRelations from '../../../../assets/svgs/GovermentRelations.svg'
import whitegovernmentRelations from '../../../../assets/svgs/whiteGvernmentrelations.svg'
import medicl from '../../../../assets/svgs/medicalform.svg'
import whitemedicl from '../../../../assets/svgs/whiteMedicalicon.svg'
import voice from '../../../../assets/svgs/voice.svg'
import whitevoice from '../../../../assets/svgs/whitevoiceicon.svg'
import bank from '../../../../assets/svgs/fxemoji_bank.svg'
import whitebank from '../../../../assets/svgs/whiteBankicon.svg'
import resignation from '../../../../assets/svgs/Registration.svg'
import whiteresignation from '../../../../assets/svgs/whiteRegistionIcon.svg'
import misccellaneous from '../../../../assets/svgs/mescileos.svg'
import whitemisccellaneous from '../../../../assets/svgs/whitemiscellaneousicon.svg'
import { IoArrowBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Modal from './HRrequestModal';
import HRrequestModal2View from './HRrequestModal2View'; // For Viewing Request Details
import EmployeeSelect from './filterInputs/EmployeeSelect';
import StatusFilter from './filterInputs/StatusFilter';
import DateInputWithPlaceholder from './filterInputs/DateInputWithPlaceholder'
import RequestFilterDropdown from './filterInputs/RequestFilterDropdown'






export default function HRRequest() {
  const [showFilters, setShowFilters] = useState(false); // State to show/hide filters
  const [currentPage, setCurrentPage] = useState(1);
  const [activeIcon, setActiveIcon] = useState('letters');
  const [isModalVisible, setModalVisible] = useState(false); // Modal visibility for New Request
  const [isViewModalVisible, setViewModalVisible] = useState(false); // Modal visibility for View Request
  const [modalTitle, setModalTitle] = useState(''); // Modal title for New Request
  const [modalContent, setModalContent] = useState(''); // Modal content for View Request
  const [selectedEmployees, setSelectedEmployees] = useState([]); // To hold multiple selected employees
  const [selectedStatuses, setSelectedStatuses] = useState([]); // To hold multiple selected statuses
  const [selectedDate, setSelectedDate] = useState(''); // State for the selected date
  const [selectedRequestTypes, setSelectedRequestTypes] = useState([]); // hold multiple request types
  const [isEditMode, setIsEditMode] = useState(false); // Track whether it's in edit mode


  const requestsPerPage = 5;

  const navigate = useNavigate()


  let handleBackClick = ()=>{

    navigate('../peopleManagement/requestsManagement/AllRequest')
  }

  // Handle the "Edit" button click from the child component
  const handleEditClick = (icon) => {
    setModalTitle(getModalTitleBasedOnIcon(icon));
    setModalVisible(true); // Open new request modal
    setIsEditMode(true); // Set the modal in "edit" mode
    setViewModalVisible(false); // Close the view modal
  };


 // Function to get the title based on activeIcon
 const getModalTitleBasedOnIcon = () => {
  switch (activeIcon) {
    case 'letters':
      return 'New Letters Request';
    case 'share':
      return 'New Share the Moment Request';
    case 'governmentRelations':
      return 'New Government Relations Request';
    case 'medicl':
      return 'New Medical Form Request';
    case 'voice':
      return 'New Your Voice is Heard Request';
    case 'bank':
      return 'New Change Bank IBAN Request';
    case 'resignation':
      return 'New Resignation Request';
    case 'misccellaneous':
      return 'New Miscellaneous Request';
    default:
      return 'Request Details';
  }
};


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

  // Handle request type change
  // const handleRequestTypeChange = (type) => {
  //   setSelectedRequestType(type);
  // };


  // Define request types based on active icon
  const getRequestTypes = () => {
    switch (activeIcon) {
      case 'letters':
        return [
          'Employment Certificate (En/Ar)',
          'Employment Certificate without salary (Ar)',
          'Employment Certificate without salary (En)',
          'Employment Certificate with salary (Ar)',
          'Employment Certificate with salary (En)',
          'Salary Confirmation Letter'
        ];;
      case 'share':
        return ['Marriage', 'New Child Birth', 'Condolence', 'Graduation'];
      case 'governmentRelations':
        return [
          'Iqama Renewal',
          'Iqama Issue',
          'Iqama Printing',
          'Passport Update',
          'Profession Alteration',
          'Exit and Re-entry Visa',
          'Exit and Re-entry Visa Cancellation',
          'Final Exit Visa',
          'Sponsorship Transfer'
        ];;
      case 'medicl':
        return ['Addition', 'Deletion'];
      case 'voice':
        return ['Work Environment', 'Career Planning', 'Performance Evaluation , Bad Behaviour'];
      case 'resignation':
        return [
          'Found a new job',
          'Career change',
          'Schedules and work hours',
          'Difficult work environment',
          'Going back to school',
          'Management issues',
          'Other'
        ];
      default:
        return [];
    }
  };

  const requestTypes = getRequestTypes();

   // Example employee data
   const employees = [
    { name: "Jordan Stevenson", id: "123456789", request: "letters", createTime: "05:00 pm", createDate: "2020-04-25", createdBy: "Admin", status: "Pending" },
    { name: "Leo Andres", id: "987654321", request: "Vacation", createTime: "05:00 pm", createDate: "2020-04-25", createdBy: "Admin", status: "Accepted" },
    { name: "Mohamed Ahmed", id: "456789123", request: "Vacation", createTime: "05:00 pm", createDate: "2020-08-02", createdBy: "Admin", status: "Withdraw" },
    { name: "Adam Joe", id: "789123456", request: "Vacation", createTime: "05:00 pm", createDate: "2020-10-25", createdBy: "Admin", status: "Accepted" },
    { name: "Marc Andre", id: "159357456", request: "Vacation", createTime: "05:00 pm", createDate: "2020-04-20", createdBy: "Admin", status: "Rejected" },
    { name: "Carla Jone", id: "357159753", request: "Vacation", createTime: "05:00 pm", createDate: "2020-08-15", createdBy: "Admin", status: "Pending" }
  ];


   // Apply all filters including employees, statuses, date, and request types
   const filteredEmployees = employees
   .filter(employee => selectedEmployees.length === 0 || selectedEmployees.includes('All Employees') || selectedEmployees.includes(employee.name))
   .filter(employee => selectedStatuses.length === 0 || selectedStatuses.includes(employee.status))
   .filter(employee => !selectedDate || employee.createDate === selectedDate)
   .filter(employee => selectedRequestTypes.length === 0 || selectedRequestTypes.includes(employee.request));

 const totalPages = Math.ceil(filteredEmployees.length / requestsPerPage);
 const displayedEmployees = filteredEmployees.slice((currentPage - 1) * requestsPerPage, currentPage * requestsPerPage);

// // Apply status filtering
// const statusFilteredEmployees = selectedStatuses.length === 0
//   ? filteredEmployees
//   : filteredEmployees.filter(employee => selectedStatuses.includes(employee.status));

//    // Apply date filtering
//    const dateFilteredEmployees = selectedDate === ''
//    ? statusFilteredEmployees
//    : statusFilteredEmployees.filter(employee => employee.createDate === selectedDate);




 
  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters); // Toggle the visibility of filters
  };


  
  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
    setSelectedRequestTypes([]); // Reset request type when switching icons
  };

  // Handle New Request modal click
  const handleNewRequestClick = () => {
    setModalTitle(getModalTitleBasedOnIcon()); // Set the dynamic title
    setModalContent(getModalContentBasedOnIcon());
    setModalVisible(true);
  };

  // Handle View Button click to show request details
  const handleViewClick = () => {
    setModalContent(getModalContentBasedOnIcon());
    setViewModalVisible(true);
  };

  const handleEmployeeFilterChange = (selectedOptions) => {
    setSelectedEmployees(selectedOptions); // Set multiple selected employees
  };


  const handleRequestTypesChange = (selectedOptions) => {
    setSelectedRequestTypes(selectedOptions); // Set multiple selected request types
  };

  // Dynamic content based on activeIcon
  const getModalContentBasedOnIcon = () => {
    switch (activeIcon) {
      case 'letters':
        return <p>Details of Letter Request</p>;
      case 'share':
        return <p>Details of Share Moment Request</p>;
      case 'governmentRelations':
        return <p>Details of Government Relations Request</p>;
      case 'medicl':
        return <p>Details of Medical Form Request</p>;
      case 'voice':
        return <p>Details of Voice Request</p>;
      case 'bank':
        return <p>Details of Bank IBAN Request</p>;
      case 'resignation':
        return <p>Details of Resignation Request</p>;
      case 'misccellaneous':
        return <p>Details of Miscellaneous Request</p>;
      default:
        return <p>Default Request Details</p>;
    }
  };

  // Close modal
  const closeModal = () => {
    setModalVisible(false);
  };


  // Close View Request modal
  const closeViewModal = () => {
    setViewModalVisible(false);
  };






  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <CustomNextArrow />, // Use custom next arrow
    prevArrow: <CustomPrevArrow />, // Use custom prev arrow
 
  };

  return (
    <>
       <div className="flex items-center mb-6">
          <IoArrowBackSharp
            className="text-xl mr-2 cursor-pointer"
            onClick={handleBackClick} // Handle click to navigate
          />
          <h2 className="text-lg font-semibold">Hr Requests</h2>
        </div>
 {/* _________________________________________________________________________________________________________________________ */}


   {/* Slider Section */}
   <div className="mb-4 relative">
        <Slider {...settings}>
          {/* Letters Icon */}
          <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => handleIconClick('letters')}>
            <div className={`w-16 h-16 rounded-full flex justify-center items-center mx-auto ${activeIcon === 'letters' ? 'bg-primary-gradient text-white' : 'bg-[#EDF0F8]'}`}>
              <img src={activeIcon === 'letters' ? whiteletters : letters} alt="Letters Icon" className="w-8 h-8" />
            </div>
            <p className="mt-2 text-center text-sm w-full">Letters</p>
          </div>

          {/* Share Icon */}
          <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => handleIconClick('share')}>
            <div className={`w-16 h-16 rounded-full flex justify-center items-center mx-auto ${activeIcon === 'share' ? 'bg-primary-gradient text-white' : 'bg-[#EDF0F8]'}`}>
              <img src={activeIcon === 'share' ? whiteshare : share} alt="Share Icon" className="w-8 h-8" />
            </div>
            <p className="mt-2 text-center text-sm w-full">Share the moment</p>
          </div>

          {/* Government Relations Icon */}
          <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => handleIconClick('governmentRelations')}>
            <div className={`w-16 h-16 rounded-full flex justify-center items-center mx-auto ${activeIcon === 'governmentRelations' ? 'bg-primary-gradient text-white' : 'bg-[#EDF0F8]'}`}>
              <img src={activeIcon === 'governmentRelations' ? whitegovernmentRelations : governmentRelations} alt="Government Relations Icon" className="w-8 h-8" />
            </div>
            <p className="mt-2 text-center text-sm w-full">Government relations</p>
          </div>

          {/* Medical Form Icon */}
          <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => handleIconClick('medicl')}>
            <div className={`w-16 h-16 rounded-full flex justify-center items-center mx-auto ${activeIcon === 'medicl' ? 'bg-primary-gradient text-white' : 'bg-[#EDF0F8]'}`}>
              <img src={activeIcon === 'medicl' ? whitemedicl : medicl} alt="Medical Form Icon" className="w-8 h-8" />
            </div>
            <p className="mt-2 text-center text-sm w-full">Medical form</p>
          </div>

          {/* Voice Icon */}
          <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => handleIconClick('voice')}>
            <div className={`w-16 h-16 rounded-full flex justify-center items-center mx-auto ${activeIcon === 'voice' ? 'bg-primary-gradient text-white' : 'bg-[#EDF0F8]'}`}>
              <img src={activeIcon === 'voice' ? whitevoice : voice} alt="Voice Icon" className="w-8 h-8" />
            </div>
            <p className="mt-2 text-center text-sm w-full">Your voice is heard</p>
          </div>

          {/* Bank Icon */}
          <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => handleIconClick('bank')}>
            <div className={`w-16 h-16 rounded-full flex justify-center items-center mx-auto ${activeIcon === 'bank' ? 'bg-primary-gradient text-white' : 'bg-[#EDF0F8]'}`}>
              <img src={activeIcon === 'bank' ? whitebank : bank} alt="Bank Icon" className="w-8 h-8" />
            </div>
            <p className="mt-2 text-center text-sm w-full">Change bank IBAN</p>
          </div>

          {/* Resignation Icon */}
          <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => handleIconClick('resignation')}>
            <div className={`w-16 h-16 rounded-full flex justify-center items-center mx-auto ${activeIcon === 'resignation' ? 'bg-primary-gradient text-white' : 'bg-[#EDF0F8]'}`}>
              <img src={activeIcon === 'resignation' ? whiteresignation : resignation} alt="Resignation Icon" className="w-8 h-8" />
            </div>
            <p className="mt-2 text-center text-sm w-full">Resignation</p>
          </div>

          {/* Miscellaneous Icon */}
          <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => handleIconClick('misccellaneous')}>
            <div className={`w-16 h-16 rounded-full flex justify-center items-center mx-auto ${activeIcon === 'misccellaneous' ? 'bg-primary-gradient text-white' : 'bg-[#EDF0F8]'}`}>
              <img src={activeIcon === 'misccellaneous' ? whitemisccellaneous : misccellaneous} alt="Miscellaneous Icon" className="w-8 h-8" />
            </div>
            <p className="mt-2 text-center text-sm w-full">Miscellaneous</p>
          </div>
        </Slider>
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
         {activeIcon !== 'bank' && activeIcon !== 'misccellaneous' && (
              <RequestFilterDropdown
                requestTypes={requestTypes} 
                selectedRequestTypes={selectedRequestTypes}
                onRequestTypesChange={handleRequestTypesChange}
              />
            )}
       {/*  DateInputWithPlaceholder) */}
       <div className="relative group">
                          
                          <DateInputWithPlaceholder
                        placeholder="Select Date"
                        onDateChange={setSelectedDate} // Set the selected date to filter
                      />
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

       {/* Status Filter */}
       <StatusFilter
                selectedStatuses={selectedStatuses}
                onStatusChange={setSelectedStatuses}
              />
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
  <button className="bg-primary-gradient text-white px-4 py-1 rounded flex items-center" onClick={handleNewRequestClick}>
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
                <td className="py-2 px-4 text-center text-[#6D6D6D]">
                  <button className="hover:text-[#0085C0] flex items-center group" onClick={handleViewClick}>
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
      <Modal isVisible={isModalVisible}
       onClose={closeModal}
        title={modalTitle}
         requestTypes={requestTypes}
         isEditMode={isEditMode} // Pass isEditMode to the modal
         >
        {modalContent}
      </Modal>
      {/* View Request Modal */}
      <HRrequestModal2View isVisible={isViewModalVisible}
       onClose={closeViewModal}
        activeIcon={activeIcon}
        onEdit={handleEditClick} // Pass the edit handler
        >
        {modalContent}
      </HRrequestModal2View>

    </>
  );
}
