import React, { useState } from "react";
import Layout from "../../Layouts/Layout";
import Pagination from "../Client/Components/Pagination";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import FormField from "../../Common/FormField";
import moment from "moment";
import * as XLSX from "xlsx"; // Import XLSX for exporting to Excel
import CustomizeReportModal from "./CustomizeReportModal";

export default function SubscriptionHistoryReport() {
  const [data] = useState([
    {
      id: 1,
      companyName: "Tech Corp",
      companyId: "C12345",
      changeFrom: "Premium",
      chnageTo: "Pro",
      date: "2025-07-15",
      status: "valid",
    },
    {
      id: 2,
      companyName: "Tech Corp",
      companyId: "C12345",
      changeFrom: "Premium",
      chnageTo: "Pro",
      date: "2025-07-15",
      status: "valid",
    },
    {
      id: 3,
      companyName: "Tech Corp",
      companyId: "C12345",
      changeFrom: "Premium",
      chnageTo: "Pro",
      date: "2025-07-15",
      status: "valid",
    },
    {
      id: 4,
      companyName: "Tech Corp",
      companyId: "C12345",
      changeFrom: "Premium",
      chnageTo: "Pro",
      date: "2025-07-15",
      status: "valid",
    },
    {
      id: 5,
      companyName: "Tech Corp",
      companyId: "C12345",
      changeFrom: "Premium",
      chnageTo: "Pro",
      date: "2025-07-15",
      status: "Invalid",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  // State for the number of entries to show
  const [showEntries, setShowEntries] = useState(10);

  // States for filter inputs
  const [dateFilter, setDateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  // State for advanced filters toggle
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [columns, setColumns] = useState([
    { id: "companyName", label: "Company Name", visible: true },
    { id: "companyId", label: "Company ID", visible: true },
    { id: "changeFrom", label: "Change From", visible: true },
    { id: "chnageTo", label: "Change To", visible: true },
    { id: "date", label: "Date", visible: true },
    { id: "status", label: "Status", visible: true },
  ]);

  const formatDate = (date) => {
    return moment(date).format("DD-MM-YYYY");
  };
  // Function to filter data
  const filteredData = data.filter((item) => {
    const matchesdate =
      !dateFilter || formatDate(item.date).includes(dateFilter);
    const matchesStatus =
      !statusFilter || formatDate(item.status).includes(statusFilter);
    return matchesdate && matchesStatus;
  });

  const exportToSheet = () => {
    const exportData = filteredData.map((item) => ({
      "Company Name": item.companyName,
      "Company ID": item.companyId,
      "Change From": item.changeFrom,
      "Change To": item.chnageTo,
      Date: formatDate(item.date),
      Status: item.status,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "SubscriptionHistory");
    XLSX.writeFile(workbook, "SubscriptionHistoryData.xlsx");
  };

  const handleFilterClick = () => {
    setShowAdvancedFilters(!showAdvancedFilters);
  };

  // Number of items per page
  const itemsPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Paginate filtered data
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Layout>
      <h1 className="text-xl font-semibold mb-4">Subscription History</h1>
      <div className="container mx-auto p-6 bg-white shadow-round rounded-2xl">
        {showAdvancedFilters && (
          <div className="mb-10">
            <h3 className="text-md font-base text-start mb-4">Filters</h3>
            <div className="advanced-filters grid grid-cols-4 gap-4">
              <FormField
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                placeholder="Date"
              />
              <FormField
                type="text"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                placeholder="Date"
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
