import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

PaginationButtons.propTypes = {
   totalPages: PropTypes.number.isRequired,
   currentPage: PropTypes.number.isRequired,
   handleCurrentPage: PropTypes.func.isRequired,
};

export default function PaginationButtons({
   totalPages,
   currentPage,
   handleCurrentPage,
}) {
   const handlePageClick = ({ selected }) => {
      handleCurrentPage(selected + 1);
   };

   return (
      <nav
         aria-label="Pagination"
         className="flex items-center justify-center gap-3"
      >
         <ReactPaginate
            onPageChange={handlePageClick}
            pageCount={totalPages}
            pageRangeDisplayed={3}
            breakLabel={<span className="mx-2 text-gray-400">...</span>}
            nextLabel={
               <button
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 ${
                     currentPage < totalPages
                        ? "transition-colors duration-300 hover:bg-gray-300 hover:text-black"
                        : "cursor-not-allowed"
                  }`}
                  disabled={currentPage >= totalPages}
               >
                  <HiChevronRight />
                  <span className="sr-only">Next Page</span>
               </button>
            }
            previousLabel={
               <button
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 ${
                     currentPage > 1
                        ? "transition-colors duration-300 hover:bg-gray-300 hover:text-black"
                        : "cursor-not-allowed"
                  }`}
                  disabled={currentPage <= 1}
               >
                  <HiChevronLeft />
                  <span className="sr-only">Previous Page</span>
               </button>
            }
            pageClassName="mx-1"
            pageLinkClassName="block w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-300 hover:text-black transition-colors duration-300"
            activeClassName="bg-gray-400 text-black font-bold rounded-lg"
            disabledClassName="cursor-not-allowed text-gray-400"
            breakClassName="mx-1 text-gray-500"
            containerClassName="flex items-center"
            className="flex items-center"
         />
      </nav>
   );
}
