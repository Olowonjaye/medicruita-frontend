interface PaginationPageProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationPageProps> = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 3;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1, 2, 3);

      if (currentPage > maxPagesToShow + 1) {
        pages.push("...");
      }

      if (currentPage > maxPagesToShow && currentPage < totalPages - maxPagesToShow) {
        pages.push(currentPage);
      }

      if (currentPage < totalPages - maxPagesToShow) {
        pages.push("...");
      }

      pages.push(totalPages - 2, totalPages - 1, totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-between w-full px-6 mt-4">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center px-2 py-1 text-sm border border-[#D0D5DD] font-medium rounded-md 
        ${currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-[#0D2B4E] hover:text-white"}`}
      >
        <img src="/prev.png" alt="Prev" className="w-4 h-4 mr-1" />
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-7">
        {generatePageNumbers().map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              className={`px-2 py-1 text-sm border rounded-md ${
                currentPage === page ? "bg-[#0D2B4E] text-white" : "hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="px-1 text-gray-500">
              {page}
            </span>
          )
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center px-2 py-1 text-sm border border-[#D0D5DD] font-medium rounded-md 
        ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-[#0D2B4E] hover:text-white"}`}
      >
        Next
        <img src="/nex.png" alt="Next" className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
};

export default Pagination;
