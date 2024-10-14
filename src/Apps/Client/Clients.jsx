import React, { useState } from "react";
import Layout from "../../Layouts/Layout";
import moment from "moment"; // For date formatting
import { NavLink } from "react-router-dom";
import { FaSortDown, FaEye, FaEdit } from "react-icons/fa";
import * as XLSX from "xlsx"; // Import XLSX for exporting to Excel
import Pagination from "./Components/Pagination";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FormField from "../../Common/FormField";
import { GoPlus } from "react-icons/go";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Clients = () => {
  const [data] = useState([
    {
      id: 1,
      companyName: "Tech Corp",
      companyOwner: "John Doe",
      companyId: "C12345",
      registerId: "R67890",
      companyType: "Technology",
      package: "Premium",
      startDate: "2024-07-15",
      expirationDate: "2025-07-15",
      branches: 5,
      departments: 10,
      users: 50,
      usersCanBeAdded: 10,
      admin: 2,
    },
    {
      id: 2,
      companyName: "Design Studio",
      companyOwner: "Jane Smith",
      companyId: "C67890",
      registerId: "R12345",
      companyType: "Design",
      package: "Standard",
      startDate: "2024-08-01",
      expirationDate: "2025-08-01",
      branches: 3,
      departments: 5,
      users: 20,
      usersCanBeAdded: 5,
      admin: 1,
    },
    {
      id: 3,
      companyName: "Design Studio",
      companyOwner: "Jane Smith",
      companyId: "C67890",
      registerId: "R12345",
      companyType: "Design",
      package: "Standard",
      startDate: "2024-08-01",
      expirationDate: "2025-08-01",
      branches: 3,
      departments: 5,
      users: 20,
      usersCanBeAdded: 5,
      admin: 1,
    },
    {
      id: 4,
      companyName: "Design Studio",
      companyOwner: "Jane Smith",
      companyId: "C67890",
      registerId: "R12345",
      companyType: "Design",
      package: "Standard",
      startDate: "2024-08-01",
      expirationDate: "2025-08-01",
      branches: 3,
      departments: 5,
      users: 20,
      usersCanBeAdded: 5,
      admin: 1,
    },
    {
      id: 5,
      companyName: "Design Studio",
      companyOwner: "Jane Smith",
      companyId: "C67890",
      registerId: "R12345",
      companyType: "Design",
      package: "Standard",
      startDate: "2024-08-01",
      expirationDate: "2025-08-01",
      branches: 3,
      departments: 5,
      users: 20,
      usersCanBeAdded: 5,
      admin: 1,
    },
    // Add more clients here...
  ]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // State for the number of entries to show
  const [showEntries, setShowEntries] = useState(10);

  // States for filter inputs
  const [companyTypeFilter, setCompanyTypeFilter] = useState("");
  const [packageFilter, setPackageFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [expirationDateFilter, setExpirationDateFilter] = useState("");
  const [remainingTimeFilter, setRemainingTimeFilter] = useState("");

  // State for advanced filters toggle
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Number of items per page
  const itemsPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Function to format the start date
  const formatDate = (date) => {
    return moment(date).format("DD-MM-YYYY");
  };

  // Function to calculate remaining time in months
  const calculateRemainingTimeInMonths = (expirationDate) => {
    const now = moment();
    const expiration = moment(expirationDate);
    return expiration.diff(now, "months");
  };

  // Function to filter data
  const filteredData = data.filter((item) => {
    const matchesCompanyType =
      !companyTypeFilter ||
      item.companyType.toLowerCase().includes(companyTypeFilter.toLowerCase());
    const matchesPackage =
      !packageFilter ||
      item.package.toLowerCase().includes(packageFilter.toLowerCase());
    const matchesStartDate =
      !startDateFilter || formatDate(item.startDate).includes(startDateFilter);
    const matchesExpirationDate =
      !expirationDateFilter ||
      formatDate(item.expirationDate).includes(expirationDateFilter);
    const matchesRemainingTime =
      !remainingTimeFilter ||
      calculateRemainingTimeInMonths(item.expirationDate) ===
        parseInt(remainingTimeFilter);

    return (
      matchesCompanyType &&
      matchesPackage &&
      matchesStartDate &&
      matchesExpirationDate &&
      matchesRemainingTime
    );
  });

  // Function to export data to Excel
  const exportToSheet = () => {
    const exportData = filteredData.map((item) => ({
      "Company Name": item.companyName,
      "Company Owner": item.companyOwner,
      "Company ID": item.companyId,
      "Register ID": item.registerId,
      "Company Type": item.companyType,
      Package: item.package,
      "Start Date": formatDate(item.startDate),
      "Expiration Date": formatDate(item.expirationDate),
      "Remaining Time (Months)": calculateRemainingTimeInMonths(
        item.expirationDate
      ),
      Branches: item.branches,
      Departments: item.departments,
      Users: item.users,
      "Users Can Be Added": item.usersCanBeAdded,
      Admin: item.admin,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Clients");
    XLSX.writeFile(workbook, "ClientsData.xlsx");
  };

  const handleFilterClick = () => {
    setShowAdvancedFilters(!showAdvancedFilters);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Paginate filtered data
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

    // Function to calculate remaining time in days
    const calculateRemainingTime = (startDate, expirationDate) => {
      const now = moment();
      const expiration = moment(expirationDate);
      return expiration.diff(now, "days");
    };
  return (
    <Layout>
      <h1 className="text-xl font-semibold mb-4">Clients</h1>
      <div className="container mx-auto p-6 bg-white shadow-round rounded-2xl">
        {showAdvancedFilters && (
          <div className="mb-10">
            <h3 className="text-md font-base text-start mb-4">Filters</h3>
            <div className="advanced-filters grid grid-cols-4 gap-4">
              <FormField
                type="text"
                value={companyTypeFilter}
                onChange={(e) => setCompanyTypeFilter(e.target.value)}
                placeholder="Company Type"
              />
              <FormField
                type="text"
                value={packageFilter}
                onChange={(e) => setPackageFilter(e.target.value)}
                placeholder="Package"
              />
              <FormField
                type="date"
                value={startDateFilter}
                onChange={(e) => setStartDateFilter(e.target.value)}
                placeholder="Start Date"
              />
              <FormField
                type="date"
                value={expirationDateFilter}
                onChange={(e) => setExpirationDateFilter(e.target.value)}
                placeholder="Expiration Date"
              />
              <FormField
                type="number"
                value={remainingTimeFilter}
                onChange={(e) => setRemainingTimeFilter(e.target.value)}
                placeholder="Remaining Time (Months)"
              />
            </div>
          </div>
        )}
        <div className="flex justify-between items-center gap-2 py-4 border-b-2 mb-4">
          <div className="flex items-center gap-2">
            <div>
              <select
                value={showEntries}
                onChange={(e) => setShowEntries(parseInt(e.target.value))}
                className="border border-gray-200 rounded-md py-2 px-2 text-textprimary"
              >
                <option value={5}>Show 5</option>
                <option value={10}>Show 10</option>
                <option value={15}>Show 15</option>
                <option value={20}>Show 20</option>
              </select>
            </div>
            <div>
            <button
                className={`flex items-center gap-2 border hover:border-black  rounded-md py-[5px] pl-2  text-textprimary ${showAdvancedFilters ? "border-[#007BFF]" : "border-gray-200"}`}
                onClick={handleFilterClick}
              >
                Filters{" "}
                {showAdvancedFilters ? (
                  <MdKeyboardArrowUp
                    className="text-textprimary font-semibold ml-"
                    size={22}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    className="text-textprimary font-bold "
                    size={22}
                  />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="">
              <input
                type="text"
                placeholder="Search"
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={exportToSheet}
                className="text-sm border border-primary text-primary rounded-md px-4 py-2"
              >
                Export Sheet
              </button>
              <NavLink
                to="/client/client-setup/company-information"
                className="text-sm bg-primary text-white rounded-md px-4 py-[9px] flex items-center gap-1"
              >
               <GoPlus size={22} />
               Add New Client
              </NavLink>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-white divide-x divide-gray-300 text-gray-600 uppercase text-sm my-5">
                <th className="text-sm font-medium px-4 text-center truncate">
                  Company Name
                </th>
                <th className="text-sm font-medium px-4 text-center truncate">
                  Company Owner
                </th>
                <th className="text-sm font-medium px-4 text-center truncate">Company ID</th>
                <th className="text-sm font-medium px-4 text-center truncate">Register ID</th>
                <th className="text-sm font-medium px-4 text-center truncate">
                  Company Type
                </th>
                <th className="text-sm font-medium px-4 text-center truncate">Package</th>
                <th className="text-sm font-medium px-4 text-center truncate">Start Date</th>
                <th className="text-sm font-medium px-4 text-center truncate">
                  Expiration Date
                </th>
                <th className="text-sm font-medium px-4 text-center truncate">
                  Remaining Time
                </th>
                <th className="text-sm font-medium px-4 text-center truncate">Branches</th>
                <th className="text-sm font-medium px-4 text-center truncate">Departments</th>
                <th className="text-sm font-medium px-4 text-center truncate">Users</th>
                <th className="text-sm font-medium px-4 text-center truncate">Users Limit</th>
                <th className="text-sm font-medium px-4 text-center truncate">Admin</th>
                <th className="text-sm font-medium px-4 text-center truncate">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm font-light text-[#6D6D6D] divide-y divide-gray-200">
              {paginatedData.map((item) => (
                <tr key={item.id} className="bg-white hover:bg-gray-50">
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {item.companyName}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {item.companyOwner}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {item.companyId}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {item.registerId}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {item.companyType}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {item.package}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {formatDate(item.startDate)}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {formatDate(item.expirationDate)}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {calculateRemainingTime(
                      item.startDate,
                      item.expirationDate
                    )}{" "}
                    Days
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {item.branches}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {item.departments}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {item.users}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {item.usersCanBeAdded}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {item.admin}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    <div className="flex items-center gap-2">
                      <FaEye
                        className="text-primary cursor-pointer hover:text-blue-500"
                        title="View"
                      />
                      <FaEdit
                        className="text-primary cursor-pointer hover:text-blue-500"
                        title="Edit"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Render Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </Layout>
  );
};
export default Clients;
