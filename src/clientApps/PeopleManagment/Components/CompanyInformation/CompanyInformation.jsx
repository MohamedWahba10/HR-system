import React, { useState } from 'react';
import Slider from 'react-slick';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import icon1 from '../../../../assets/svgs/asab_logo2.svg';
import DepartmentIcon from '../../../../assets/svgs/department.svg';
import Employessicon from '../../../../assets/svgs/employess.svg';
import packageIcon from '../../../../assets/svgs/package Icon.svg';
import BranchIcon from '../../../../assets/svgs/Branches icon .svg';
import locatiOIcon from '../../../../assets/svgs/location.svg';
import hoveredPackageIcon from  '../../../../assets/svgs/hoveredpackageicon .svg'
import BranchModal from './BranchModal';  // Import the BranchModal component
import PackageModal from './PackageModal ';  // Import the PackageModal component
import DepartmentModal from './DepartmentModal ';  // Import the DepartmentModal component
import branchLargeIcon from '../../../../assets/svgs/iconLarger.svg'
import DepartmentLargeIcon from '../../../../assets/svgs/departmentLargeicon.svg'


// Custom Arrow Component
const CustomPrevArrow = ({ onClick }) => (
  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
    <IoIosArrowBack className="text-primary w-6 h-6" onClick={onClick} />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
    <IoIosArrowForward className="text-primary w-6 h-6" onClick={onClick} />
  </div>
);

export default function CompanyInformation() {
  const [isBranchModalOpen, setBranchModalOpen] = useState(false);
  const [isPackageModalOpen, setPackageModalOpen] = useState(false);
  const [isDepartmentModalOpen, setDepartmentModalOpen] = useState(false); 

  const openBranchModal = () => setBranchModalOpen(true);
  const closeBranchModal = () => setBranchModalOpen(false);

  const openPackageModal = () => setPackageModalOpen(true);
  const closePackageModal = () => setPackageModalOpen(false);


  const openDepartmentModal = () => setDepartmentModalOpen(true); // Open DepartmentModal
  const closeDepartmentModal = () => setDepartmentModalOpen(false); // Close DepartmentModal

  const [isHovered, setIsHovered] = useState(false); // State to manage hover package icon

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Show 4 items at a time
    slidesToScroll: 1, // Scroll one item at a time
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="font-sans text-sm font-semibold leading-[16.45px] text-left p-0 bg-white shadow-md rounded-lg">
      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 p-4 flex flex-col items-center bg-[#F4F6FA]">
          <img
            src={icon1}
            alt="ASAB Company Logo"
            className="w-24 h-24 mb-4 rounded-full mt-6 border-2 border-lightblue-00"
          />
          <h1 className="text-2xl font-semibold mb-2 text-center">ASAB Company</h1>
          <ul className="text-gray-700 mt-4 space-y-4 text-center">
            <li className="flex items-center">
              <img src={Employessicon} alt="Employees Icon" className="w-5 h-5 mr-2" />
              <span className="font-semibold text-gray-500">Employees number:</span> <span style={{ color: '#252525' }}>40</span>
            </li>
            <li className="flex items-center">
              <img src={locatiOIcon} alt="Location Icon" className="w-5 h-5 mr-2" />
              <span className="font-semibold">Location:</span> Ar Rawdah, Riyadh
            </li>
            <li className="flex items-center">
              <img src={BranchIcon} alt="Branch Icon" className="w-5 h-5 mr-2" />
              <span className="font-semibold">Branches Numbers:</span> 2
            </li>
            <li className="flex items-center">
              <img src={DepartmentIcon} alt="Department Icon" className="w-5 h-5 mr-2" />
              <span className="font-semibold">Departments Numbers:</span> 10
            </li>
            <li 
      className="flex items-center group"
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
    >
      <img 
        src={isHovered ? hoveredPackageIcon : packageIcon} // Conditionally render icon
        alt="Package Icon" 
        className="w-5 h-5 mr-2 cursor-pointer"
      />
      <button 
        onClick={openPackageModal} 
        className={`font-semibold ${isHovered ? 'text-[#0085C0]' : 'text-gray-800'} cursor-pointer`}
      >
        Package Details
      </button>
    </li>
          </ul>
        </div>

        {/* Middle Section */}
        <div className="w-full lg:w-1/3 p-4">
          <h2 className="text-lg font-semibold mb-4">Company Information:</h2>
          <div className="grid grid-cols-1 gap-2">
            <p className='mb-3.5'><span className="font-semibold">Sector:</span> <span className="text-primary">Lorem Ipsum</span></p>
            <p className='mb-3.5'><span className="font-semibold">Company name:</span> <span className="text-primary">Lorem Ipsum</span></p>
            <p className='mb-3.5'><span className="font-semibold">Company owner name:</span> <span className="text-primary">Abi Al Darda</span></p>
            <p className='mb-3.5'><span className="font-semibold">Company register ID:</span> <span className="text-primary">123456</span></p>
            <p className='mb-3.5'><span className="font-semibold">Register ID start date:</span> <span className="text-primary">20/10/2024</span></p>
            <p className='mb-3.5'><span className="font-semibold">Register ID expiration date:</span> <span className="text-primary">20/10/2024</span></p>
            <p className='mb-3.5'><span className="font-semibold">Company Tax file ID:</span> <span className="text-primary">1234566</span></p>
            <p className='mb-3.5'><span className="font-semibold">Tax file start date:</span> <span className="text-primary">20/10/2024</span></p>
            <p className='mb-3.5'><span className="font-semibold">Tax file expiration date:</span> <span className="text-primary">20/10/2024</span></p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 p-4">
          <div className="flex justify-between mb-0">
            <h2 className="text-lg font-semibold"></h2>
            <button className="bg-primary-gradient text-white px-4 py-2 mt-2 rounded-md flex items-center gap-2">
              <MdEdit />
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 gap-2 mt-2">
            <p className='mb-3.5'><span className="font-semibold">Company ID:</span> <span className="text-primary">123456</span></p>
            <p className='mb-3.5'><span className="font-semibold">Company email:</span> <span className="text-primary">Lorem Ipsum@gmail.com</span></p>
            <p className='mb-3.5'><span className="font-semibold">Company website:</span> <span className="text-primary">Lorem Ipsum@gmail.com</span></p>
            <p className='mb-3.5'><span className="font-semibold">Company Phone Number:</span> <span className="text-primary">12345678</span></p>
            <p className='mb-3.5'><span className="font-semibold">Company Location:</span> <span className="text-primary">Riyadh, Saudi Arabia</span></p>
            <p className='mb-3.5'><span className="font-semibold">Geofence:</span> <span className="text-primary">5 meter</span></p>
          </div>
        </div>
      </div>
      <hr className=''/>
      {/* Company Branches Section */}
      <div className="mt-8 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold ml-9">Company Branches:</h2>
          <button className="bg-primary-gradient text-white px-4 py-2 rounded-md mr-4">+ Branch</button>
        </div>
        <div className="px-2"> {/* Add padding around the slider */}
          <Slider {...sliderSettings}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <div key={index} className="px-7"> {/* Add horizontal padding to each item */}
                <div className="bg-white shadow-md rounded-lg p-4 h-56 text-center border border-gray-300 hover:border-primary transition-all duration-300 group flex flex-col items-center justify-center">
                  <div className="w-12 h-12 mb-2 rounded-full border-0 border-primary flex items-center justify-center bg-[#e5ecf9] transition-colors duration-300 group-hover:bg-primary">
                    <img src={branchLargeIcon} alt="Branch Icon" className="w-8 h-8 transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                  </div>
                  <h4 className="text-lg text-gray-500 mb-2">AL-olya Branch</h4>
                  
                  {/* Employee Icon and Text on the Same Line */}
                  <div className="flex items-center mb-4">
                    <img src={Employessicon} alt="Employees Icon" className="inline-block mr-1" /> 
                    <span>Employees number: <span className='text-gray-500'></span>40</span>
                  </div>

                  {/* Location Icon and Text on the Same Line */}
                  <div className="flex items-center mb-1">
                    <img src={locatiOIcon} alt="Location Icon" className="inline-block mr-1" /> 
                    <span>Location: <span className='text-gray-500'></span> Ar Rawdah, Riyadh</span>
                  </div>

                  <button onClick={openBranchModal} className="mt-2 bg-primary-gradient text-white px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-2 rounded-md pt-3 pb-3">View Branch</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
<hr className='mt-9'/>
      {/* Company Departments Section */}
      <div className="mt-8 relative mb-4 pb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold ml-9 ">Company Departments:</h2>
          <button className="bg-primary-gradient text-white px-4 py-2 rounded-md mr-4">+ Department</button>
        </div>
        <div className="px-2"> {/* Add padding around the slider */}
          <Slider {...sliderSettings}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <div key={index} className="px-7"> {/* Add horizontal padding to each item */}
                <div className="bg-white shadow-md rounded-lg p-4  h-56 text-center border border-gray-300 hover:border-primary transition-all duration-300 group flex flex-col items-center justify-center">
                  <div className="w-12 h-12 mb-2 rounded-full border-0 border-primary flex items-center justify-center bg-[#e5ecf9] transition-colors duration-300 group-hover:bg-primary">
                    <img src={DepartmentLargeIcon} alt="Department Icon" className="w-8 h-8 transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                  </div>
                  <h3 className="text-lg mb-2 text-gray-500 font-semibold">Marketing Department</h3>

                  {/* Employee Icon and Text on the Same Line */}
                  <div className="flex items-center mb-4">
                    <img src={Employessicon} alt="Employees Icon" className="inline-block mr-1" />
                    <span>Employees number: <span className='text-gray-500'>40</span></span>
                  </div>

                  <button onClick={openDepartmentModal} className="mt-2 bg-primary-gradient text-white px-8 py-2 rounded-md pt-3 pb-3">View Department</button>
                  
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Modals */}
      <BranchModal isOpen={isBranchModalOpen} onClose={closeBranchModal} />
      <PackageModal isOpen={isPackageModalOpen} onClose={closePackageModal} />
      <DepartmentModal isOpen={isDepartmentModalOpen} onClose={closeDepartmentModal} /> 
    </div>
  );
}
