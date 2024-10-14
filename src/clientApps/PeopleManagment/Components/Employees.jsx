import React, { useState } from 'react';
import { FaEdit, FaEye, FaPlus} from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa"; // Importing the correct icons
import X from '../../../assets/svgs/X.svg'
import arrow from '../../../assets/svgs/arrow.svg'

export default function Employees() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 9;

  // Dummy employee data (example with 20 entries for demonstration)
  const employees = Array.from({ length: 20 }, (_, index) => ({
    name: 'Jordan Stevenson',
    id: `12345678${index}`,
    position: 'IT technician',
    status: 'Current employee',
    joiningDate: '10/10/2024', 
  }));

  // Filtered employees based on search term
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  // Get the employees to be displayed on the current page
  const displayedEmployees = filteredEmployees.slice(
    (currentPage - 1) * employeesPerPage,
    currentPage * employeesPerPage
  );

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="p-0">



        <div className="flex justify-between items-center mb-4">
      {/* Select for showing employees per page */}
      <div className="flex items-center">
        <label htmlFor="show" className="mr-2 text-[#A3A3A3]">Show</label>

        <div className="relative">
          <select
            id="show"
            className="appearance-none border border-gray-300 rounded-md px-6 py-2 pr-10 text-[#A3A3A3] bg-white"
            value={employeesPerPage}
            disabled
          >
            <option value={employeesPerPage}>{employeesPerPage}</option>
          </select>
          {/* Custom Arrow */}
          <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-2 mt-1">
            <img src={arrow} alt="arrow" className="w-2.5 h-2.5 text-[#A3A3A3]" />
          </span>
        </div>
      </div>

      {/* Search and New Employee button */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border focus:outline-none focus:border-primaryhover hover:border-[#5D5D5D] rounded px-4 py-2 mr-2"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page on search
          }}
        />
        <button className="bg-primary-gradient text-white px-4 py-2 rounded flex items-center">
          <FaPlus className="mr-2" /> New Employee
        </button>
      </div>
    </div>




      <div className="overflow-x-auto">




      <table className="min-w-full bg-white rounded-lg shadow-md">
  <thead className="border-b-2 border-t-2 border-gray-300">
    <tr className="uppercase text-sm">
      {/* Employee Name */}
      <th className="w-1/6 text-sm text-[#454545] font-medium">
        <div className="relative flex justify-center items-center h-12">
          <span className="text-center">Employee Name</span>
          {/* Vertical line, centered and shortened */}
          <div className="absolute right-0 h-6 border-r-2 border-gray-300"></div>
        </div>
      </th>

      {/* Employee ID */}
      <th className="w-1/6 text-sm text-[#454545] font-medium">
        <div className="relative flex justify-center items-center h-12">
          <span className="text-center">Employee ID</span>
          <div className="absolute right-0 h-6 border-r-2 border-gray-300"></div>
        </div>
      </th>

      {/* Position */}
      <th className="w-1/6 text-sm text-[#454545] font-medium">
        <div className="relative flex justify-center items-center h-12">
          <span className="text-center">Position</span>
          <div className="absolute right-0 h-6 border-r-2 border-gray-300"></div>
        </div>
      </th>

      {/* Employee Status */}
      <th className="w-1/6 text-sm text-[#454545] font-medium">
        <div className="relative flex justify-center items-center h-12">
          <span className="text-center">Employee Status</span>
          <div className="absolute right-0 h-6 border-r-2 border-gray-300"></div>
        </div>
      </th>

      {/* Joining Date */}
      <th className="w-1/6 text-sm text-[#454545] font-medium">
        <div className="relative flex justify-center items-center h-12">
          <span className="text-center">Joining Date</span>
          <div className="absolute right-0 h-6 border-r-2 border-gray-300"></div>
        </div>
      </th>

      {/* Procedure */}
      <th className="w-1/6 text-sm text-[#454545] font-medium">
        <div className="relative flex justify-center items-center h-12">
          <span className="text-center">Procedure</span>
        </div>
      </th>
    </tr>
  </thead>

  {/* Table Body */}
  <tbody className="text-sm font-light text-[#6D6D6D] divide-y divide-gray-200">
    {displayedEmployees.map((employee, index) => (
      <tr key={index} className="bg-white hover:bg-gray-50">
        <td className="py-4 px-4 text-center truncate text-[#6D6D6D]">
          <div className="flex items-center justify-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10 rounded-full"
                src="https://via.placeholder.com/40"
                alt=""
              />
            </div>
            <div className="ml-4">{employee.name}</div>
          </div>
        </td>
        <td className="py-4 px-4 text-center truncate">{employee.id}</td>
        <td className="py-4 px-4 text-center truncate">{employee.position}</td>
        <td className="py-4 px-4 text-center truncate">{employee.status}</td>
        <td className="py-4 px-4 text-center truncate">{employee.joiningDate}</td>
        <td className="py-4 px-4 text-center truncate">
          <div className="flex space-x-2 justify-center">
            <button className="hover:text-[#0085C0] flex items-center group mr-2">
              <img
                src={X}
                alt="Termination"
                className="mr-1 group-hover:text-[#0085C0]"
              /> Termination
            </button>
            <button className="hover:text-[#0085C0] flex items-center group">
              <FaEdit className="mr-1 text-primary group-hover:text-[#0085C0]" /> Edit
            </button>
            <button className="hover:text-[#0085C0] flex items-center group">
              <FaEye className="mr-1 text-primary group-hover:text-[#0085C0]" /> View
            </button>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>





        <div className="mt-4 flex justify-between items-center">
  <div className="text-gray-600">
    Showing {(currentPage - 1) * employeesPerPage + 1} to {Math.min(currentPage * employeesPerPage, filteredEmployees.length)} of {filteredEmployees.length} entries
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
      </div>
    </div>
  );
}





