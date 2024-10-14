import React, { useState } from "react";
import Layout from "../../Layouts/Layout";
import Pagination from "../Client/Components/Pagination";
import FormField from "../../Common/FormField";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import * as XLSX from "xlsx"; // Import XLSX for exporting to Ex
import moment from "moment";
import CustomizeReportModal from "./CustomizeReportModal";

export default function ModuleAndFeaturesReport() {
  const [data] = useState([
    {
      id: 1,
      companyName: "Asab LLC",
      companyId: "C12345",
      module: "Attendence Module",
      feature: "Attendence",
      package: "Premium",
      addedDate: "2022-01-01",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [showEntries, setShowEntries] = useState(15);
  const [filterType, setFilterType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [addedDate, setaddedDate] = useState("");
  const [Package, setpackage] = useState("");
  const [module, setModule] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [columns, setColumns] = useState([
    { id: "companyName", label: "Company Name", visible: true },
    { id: "companyId", label: "Company ID", visible: true },
    { id: "module", label: "Module Name", visible: true },
    { id: "feature", label: "Feature", visible: true },
    { id: "package", label: "Package", visible: true },
    { id: "addedDate", label: "Added Date", visible: true },
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

    const matchesaddedDate =
      !addedDate || moment(item.addedDate).isSameOrAfter(addedDate, "day");
    const matchespackage = !Package || item.package === Package;
    const matchesModule =
      !module || item.module.toLowerCase().includes(module.toLowerCase());

    return (
      matchesSearchQuery && matchesaddedDate && matchespackage && matchesModule
    );
  });

  // Function to export data to Excel
  const exportToSheet = () => {
    const exportData = filteredData.map((item) => ({
      "Company Name": item.companyName,
      "Company ID": item.companyId,
      "Module Name": item.moduleName,
      Feature: item.feature,
      Package: item.package,
      "Added Date": formatDate(item.addedDate),
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "ModuleAndFeatures");
    XLSX.writeFile(workbook, "ModuleAndFeaturesData.xlsx");
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
                type="text"
                value={Package}
                onChange={(e) => setpackage(e.target.value)}
                placeholder="Package Name"
              />
              <FormField
                type="text"
                value={module}
                onChange={(e) => setModule(e.target.value)}
                placeholder="Module"
              />
              <FormField
                type="date"
                value={addedDate}
                onChange={(e) => setaddedDate(e.target.value)}
                placeholder="Added Date"
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
                  {columns
                    .filter((col) => col.visible)
                    .map((col) => (
                      <td
                        key={col.id}
                        className="py-4 text-sm px-4 text-center truncate"
                      >
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
