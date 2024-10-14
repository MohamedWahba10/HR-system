import React, { useState } from "react";
import Pagination from "./Pagination";
import * as XLSX from "xlsx"; // Import XLSX for exporting to Ex
import moment from "moment"; // For date formatting
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FormField from "../../../Common/FormField";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function SalesHistory() {
  const [data] = useState([
    {
      id: 1,
      updatedField: "Tech Corp",
      updatedFrom: "John Doe",
      updatedTo: "Mike",
      updatedDate: "2025-07-15",
      updatedTime: "12:00 AM",
      updatedBy: "John Doe",
    },
    {
      id: 2,
      updatedField: "Tech Corp",
      updatedFrom: "John Doe",
      updatedTo: "Mike",
      updatedDate: "2025-07-15",
      updatedTime: "12:00 AM",
      updatedBy: "John Doe",
    },
    {
      id: 3,
      updatedField: "Tech Corp",
      updatedFrom: "John Doe",
      updatedTo: "Mike",
      updatedDate: "2025-07-15",
      updatedTime: "12:00 AM",
      updatedBy: "John Doe",
    },
    {
      id: 4,
      updatedField: "Tech Corp",
      updatedFrom: "John Doe",
      updatedTo: "Mike",
      updatedDate: "2025-07-15",
      updatedTime: "12:00 AM",
      updatedBy: "John Doe",
    },
    {
      id: 5,
      updatedField: "Tech Corp",
      updatedFrom: "John Doe",
      updatedTo: "Mike",
      updatedDate: "2025-07-15",
      updatedTime: "12:00 AM",
      updatedBy: "John Doe",
    },
    {
      id: 6,
      updatedField: "Tech Corp",
      updatedFrom: "John Doe",
      updatedTo: "Mike",
      updatedDate: "2025-07-15",
      updatedTime: "12:00 AM",
      updatedBy: "John Doe",
    },
  ]);

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // State for the number of entries to show
  const [showEntries, setShowEntries] = useState(15);

  // State for sorting
  const [sortConfig, setSortConfig] = useState(null);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Number of items per page
  const itemsPerPage = 15;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

 // State for filters
 const [updatedByFilter, setUpdatedByFilter] = useState("");
 const [updatedDateFilter, setUpdatedDateFilter] = useState("");
 const [updatedTimeFilter, setUpdatedTimeFilter] = useState("");

 // State for advanced filters toggle
 const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

 // Function to format the date
 const formatDate = (date) => {
   return moment(date).format("DD-MM-YYYY"); // Using moment.js for formatting to dd-mm-yyyy
 };

 // Function to filter data
 const filteredData = data.filter((item) => {
   const matchesSearchQuery = !searchQuery || item.updatedField.toLowerCase().includes(searchQuery.toLowerCase());

   const matchesUpdatedBy = !updatedByFilter || item.updatedBy.toLowerCase().includes(updatedByFilter.toLowerCase());

   const matchesUpdatedDate = !updatedDateFilter || moment(item.updatedDate).isSame(updatedDateFilter, 'day');

   const matchesUpdatedTime = !updatedTimeFilter || moment(item.updatedTime, "hh:mm A").isSame(updatedTimeFilter, 'minute');

   return matchesSearchQuery && matchesUpdatedBy && matchesUpdatedDate && matchesUpdatedTime;
 });


 // Handle advanced filters toggle
 const handleFilterClick = () => {
   setShowAdvancedFilters(!showAdvancedFilters);
 };

 // Function to export data to Excel
 const exportToSheet = () => {
   const exportData = filteredData.map((item) => ({
     "Updated Field": item.updatedField,
     "Updated From": item.updatedFrom,
     "Updated To": item.updatedTo,
     "Updated Date": formatDate(item.updatedDate),
     "Updated Time": item.updatedTime,
     "Updated By": item.updatedBy
   }));

   const worksheet = XLSX.utils.json_to_sheet(exportData);
   const workbook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(workbook, worksheet, "SalesHistory");
   XLSX.writeFile(workbook, "SalesHistoryData.xlsx");
 };

 // Handle page change
 const handlePageChange = (page) => {
   setCurrentPage(page);
 };

 const paginatedData = filteredData.slice(
   (currentPage - 1) * itemsPerPage,
   currentPage * itemsPerPage
 );

 return (
   <>
     <div className="container mx-auto p-6 bg-white shadow-round rounded-2xl">
       {showAdvancedFilters && (
          <div className="mb-10">
            <h3 className="text-md font-base text-start mb-4">Filters</h3>
            <div className="advanced-filters grid grid-cols-3 gap-4">
              <FormField
                type="date"
                value={updatedDateFilter}
                onChange={e => setUpdatedDateFilter(e.target.value)}
                placeholder="Updated Date"
              />
              <FormField
                type="time"
                value={updatedTimeFilter}
                onChange={e => setUpdatedTimeFilter(e.target.value)}
                placeholder="Updated Time"
              />
              <FormField
                type="text"
                value={updatedByFilter}
                onChange={e => setUpdatedByFilter(e.target.value)}
                placeholder="Updated By"
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
                className="text-sm bg-primary text-white rounded-md px-4 py-2"
              >
                Export Sheet
              </button>
            
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
            <tr className="bg-white divide-x divide-gray-300 text-gray-600 uppercase text-sm my-5">
            <th className="text-sm font-medium px-4 text-center truncate">
                  Updated Field
                </th>
                <th className="text-sm font-medium px-4 text-center truncate">
                  Updated From
                </th>
                <th className="text-sm font-medium px-4 text-center truncate">
                  Updated To
                </th>
                <th className="text-sm font-medium px-4 text-center truncate">
                  Updated Date
                </th>
                <th className="text-sm font-medium px-4 text-center truncate">
                  Updated Time
                </th>
                <th className="text-sm font-medium px-4 text-center truncate">
                  Updated By
                </th>
              </tr>
            </thead>
            <tbody className="text-sm font-light text-[#6D6D6D] divide-y divide-gray-200">
              {paginatedData.map((item) => (
                <tr key={item.id} className="bg-white hover:bg-gray-50">
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {item.updatedField}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {item.updatedFrom}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {item.updatedTo}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {formatDate(item.updatedDate)}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {item.updatedTime}
                  </td>
                  <td className="py-4 text-sm px-4 text-center truncate">
                    {item.updatedBy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
