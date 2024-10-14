import React from "react";
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleFirstPage = () => onPageChange(1);
  const handlePreviousPage = () => onPageChange(Math.max(1, currentPage - 1));
  const handleNextPage = () => onPageChange(Math.min(totalPages, currentPage + 1));
  const handleLastPage = () => onPageChange(totalPages);

  return (
    <div className="flex justify-between items-center py-2 mt-2">
      <div className="text-gray-600 text-sm">
        Showing {currentPage * 5 - 4} to {Math.min(currentPage * 5, totalPages * 5)} of {totalPages * 5} entries
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={handleFirstPage}
          disabled={currentPage === 1}
          className={`p-2 ${currentPage === 1 ? 'text-gray-300' : 'text-gray-600'} hover:text-gray-800`}
        >
          <FaAngleDoubleLeft />
        </button>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`p-2 ${currentPage === 1 ? 'text-gray-300' : 'text-gray-600'} hover:text-gray-800`}
        >
          <FaAngleLeft />
        </button>
        <span className="px-4 py-1 bg-primary text-white rounded-lg text-sm">
          {currentPage}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`p-2 ${currentPage === totalPages ? 'text-gray-300' : 'text-gray-600'} hover:text-gray-800`}
        >
          <FaAngleRight />
        </button>
        <button
          onClick={handleLastPage}
          disabled={currentPage === totalPages}
          className={`p-2 ${currentPage === totalPages ? 'text-gray-300' : 'text-gray-600'} hover:text-gray-800`}
        >
          <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
