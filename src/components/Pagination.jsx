import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center items-center mt-4 space-x-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`px-3 py-1 rounded-md ${
            currentPage === i + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } hover:bg-blue-400 transition`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
