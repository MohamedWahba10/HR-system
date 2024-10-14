import React, { useState } from "react";
import Layout from "../../Layouts/Layout";
import Pagination from "../Client/Components/Pagination";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import FormField from "../../Common/FormField";
import moment from "moment";
import * as XLSX from "xlsx"; // Import XLSX for exporting to Ex
import CustomizeReportModal from "./CustomizeReportModal";

export default function SalesReport() {
  const [data] = useState([
    {
      id: 1,
      companyName: "Tech Corp",
      companyNameArabic: "تك كورب",
      companyOwner: "John Doe",
      companyOwnerArabic: "جون دو",
      holdingCompany: "Tech Corp Holding",
      holdingCompanyArabic: "تك كورب هولدنغ",
      sector: "Technology",
      branch: "Tech Corp",
      employeeName: "John Doe",
      employeeNameArabic: "جون دو",
      position: "Manager",
      positionArabic: "مدير",
      email: "ZgUeh@example.com",
      phone: "123-456-7890",
      ourEmployee: "John Doe",
      ourEmployeeArabic: "جون دو",
      firstInteraction: "2025-07-15",
      lastInteraction: "2025-07-15",
      state: "Postive",
      nextStep: "send offer",
    },
    {
      id: 2,
      companyName: "Horse Selling",
      companyOwner: "John Doe",
      sector: "Technology",
      employeeName: "John Doe",
      position: "Manager",
      email: "ZgUeh@example.com",
      phone: "123-456-7890",
      firstInteraction: "2025-07-15",
      lastInteraction: "2025-07-15",
      state: "Negative",
      nextStep: "send offer",
      ourEmployee: "John Doe",
    },
    {
      id: 3,
      companyName: "Tech Corp",
      companyOwner: "John Doe",
      sector: "Technology",
      employeeName: "John Doe",
      position: "Manager",
      email: "ZgUeh@example.com",
      phone: "123-456-7890",
      firstInteraction: "2025-07-15",
      lastInteraction: "2025-07-15",
      state: "Postive",
      nextStep: "send offer",
      ourEmployee: "John Doe",
    },
    {
      id: 4,
      companyName: "Tech Corp",
      companyOwner: "John Doe",
      sector: "Technology",
      employeeName: "John Doe",
      position: "Manager",
      email: "ZgUeh@example.com",
      phone: "123-456-7890",
      firstInteraction: "2025-07-15",
      lastInteraction: "2025-07-15",
      state: "Postive",
      nextStep: "send offer",
      ourEmployee: "John Doe",
    },
    {
      id: 5,
      companyName: "Tech Corp",
      companyOwner: "John Doe",
      sector: "Technology",
      employeeName: "John Doe",
      position: "Manager",
      email: "ZgUeh@example.com",
      phone: "123-456-7890",
      firstInteraction: "2025-07-15",
      lastInteraction: "2025-07-15",
      state: "Postive",
      nextStep: "send offer",
      ourEmployee: "John Doe",
    },
    {
      id: 6,
      companyName: "Tech Corp",
      companyOwner: "John Doe",
      sector: "Technology",
      employeeName: "John Doe",
      position: "Manager",
      email: "ZgUeh@example.com",
      phone: "123-456-7890",
      firstInteraction: "2025-07-15",
      lastInteraction: "2025-07-15",
      state: "Postive",
      nextStep: "send offer",
      ourEmployee: "John Doe",
    },
    {
      id: 7,
      companyName: "Tech Corp",
      companyOwner: "John Doe",
      sector: "Technology",
      employeeName: "John Doe",
      position: "Manager",
      email: "ZgUeh@example.com",
      phone: "123-456-7890",
      firstInteraction: "2025-07-15",
      lastInteraction: "2025-07-15",
      state: "Postive",
      nextStep: "send offer",
      ourEmployee: "John Doe",
    },
    {
      id: 8,
      companyName: "Tech Corp",
      companyOwner: "John Doe",
      sector: "Technology",
      employeeName: "John Doe",
      position: "Manager",
      email: "ZgUeh@example.com",
      phone: "123-456-7890",
      firstInteraction: "2025-07-15",
      lastInteraction: "2025-07-15",
      state: "Postive",
      nextStep: "send offer",
      ourEmployee: "John Doe",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [showEntries, setShowEntries] = useState(15);
  const [filterType, setFilterType] = useState("");
  const [sortConfig, setSortConfig] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [firstInteraction, setFirstInteraction] = useState("");
  const [lastInteraction, setLastInteraction] = useState("");
  const [state, setState] = useState("");
  const [nextStep, setNextStep] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [columns, setColumns] = useState([
    { id: "companyName", label: "Company Name", visible: true },
    { id: "companyOwner", label: "Company Owner", visible: true },
    { id: "sector", label: "Sector", visible: true },
    { id: "employeeName", label: "Employee Name", visible: true },
    { id: "position", label: "Position", visible: true },
    { id: "email", label: "Email", visible: true },
    { id: "phone", label: "Phone", visible: true },
    { id: "firstInteraction", label: "First Interaction", visible: true },
    { id: "lastInteraction", label: "Last Interaction", visible: true },
    { id: "state", label: "State", visible: true },
    { id: "nextStep", label: "Next Step", visible: true },
    { id: "ourEmployee", label: "Our Employee", visible: true },
  ]);

  // Number of items per page
  const itemsPerPage = 15;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Function to format the start date
  const formatDate = (date) => {
    return moment(date).format("DD-MM-YYYY"); // Using moment.js for formatting to dd-mm-yyyy
  };

  // Function to calculate remaining time in days

  // Toggle filter fields
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const handleFilterClick = () => {
    setShowAdvancedFilters(!showAdvancedFilters);
  };

  // Filtering logic
  const filteredData = data.filter((item) => {
    const matchesSearchQuery =
      !filterType ||
      item[filterType.toLowerCase()]
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());

    const matchesFirstInteraction =
      !firstInteraction ||
      moment(item.firstInteraction).isSameOrAfter(firstInteraction, "day");
    const matchesLastInteraction =
      !lastInteraction ||
      moment(item.lastInteraction).isSameOrBefore(lastInteraction, "day");
    const matchesState = !state || item.state === state;
    const matchesNextStep =
      !nextStep || item.nextStep.toLowerCase().includes(nextStep.toLowerCase());

    return (
      matchesSearchQuery &&
      matchesFirstInteraction &&
      matchesLastInteraction &&
      matchesState &&
      matchesNextStep
    );
  });

  // Function to export data to Excel
  const exportToSheet = () => {
    const exportData = filteredData.map((item) => ({
      "Company Name": item.companyName,
      "Company Owner": item.companyOwner,
      Sector: item.sector,
      "Employee Name": item.employeeName,
      Position: item.position,
      Email: item.email,
      Phone: item.phone,
      "First Interaction": formatDate(item.firstInteraction),
      "Last Interaction": formatDate(item.lastInteraction),
      State: item.state,
      "Next Step": item.nextStep,
      "Our Employee": item.ourEmployee,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sales");
    XLSX.writeFile(workbook, "SalesData.xlsx");
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Layout>
      <h1 className="text-xl font-semibold mb-4">Sales Report</h1>
      <div className="container mx-auto p-6 bg-white shadow-round rounded-2xl">
        {showAdvancedFilters && (
          <div className="mb-10">
            <h3 className="text-md font-base mb-4">Filters</h3>
            <div className="advanced-filters grid grid-cols-5 gap-4">
              <FormField
                type="date"
                value={firstInteraction}
                onChange={(e) => setFirstInteraction(e.target.value)}
                placeholder="First Interaction"
              />
              <FormField
                type="date"
                value={lastInteraction}
                onChange={(e) => setLastInteraction(e.target.value)}
                placeholder="Last Interaction"
              />
              <FormField
                type="select"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="State"
                options={["Postive", "Negative"]}
              />
              <FormField
                type="text"
                value={nextStep}
                onChange={(e) => setNextStep(e.target.value)}
                placeholder="Next Step"
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
                className="flex items-center gap-2 border border-gray-200 rounded-md py-[5px] pl-2  text-textprimary"
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
              <button
                onClick={openModal}
                className="text-sm bg-primary text-white rounded-md px-4 py-2"
              >
                Customize Report
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
              <tr className="bg-white divide-x divide-gray-300 text-gray-600 uppercase text-sm my-5">
                {columns
                  .filter((col) => col.visible)
                  .map((col) => (
                    <th
                      key={col.id}
                      className="text-sm font-medium px-4 text-center truncate"
                    >
                      {col.label}
                    </th>
                  ))}
              </tr>
            </thead>

            <tbody className="text-sm font-light text-[#6D6D6D] divide-y divide-gray-200">
            {paginatedData.map((item) => (
                <tr key={item.id} className="bg-white hover:bg-gray-50">
                  {columns.filter(col => col.visible).map(col => (
                    <td key={col.id} className="py-4 text-sm px-4 text-center truncate">
                      {item[col.id]}
                    </td>
                  ))}
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

        {isModalOpen && (
          <CustomizeReportModal
            isOpen={isModalOpen}
            closeModal={closeModal}
            columns={columns}
            setColumns={setColumns}
          />
        )}
      </div>
    </Layout>
  );
}
