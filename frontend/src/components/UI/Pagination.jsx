import { ArrowLongRight, ArrowLongLeft } from "./icons/icons";

const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function getNextPage() {
    setCurrentPage((prev) => {
      if (prev < totalPages) return prev + 1;
      return prev;
    });
  }

  function getPrevPage() {
    setCurrentPage((prev) => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  }

  return (
    <>
      {totalPages > 1 && (
        <div className="absolute bottom-5 left-1/2 mt-10 flex justify-center items-center">
          <span
            className="hover:bg-slate-100 rounded-md p-1 cursor-pointer"
            onClick={getPrevPage}
          >
            <ArrowLongLeft />
          </span>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 mx-1 ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <span
            className="hover:bg-slate-100 rounded-md p-1 cursor-pointer"
            onClick={getNextPage}
          >
            <ArrowLongRight />
          </span>
        </div>
      )}
    </>
  );
};

export default Pagination;
