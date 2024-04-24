/** @format */

import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({
  totalPagesNumber,
  currentPage,
  onPageChange,
}: {
  totalPagesNumber: number;
  currentPage: number;
  onPageChange: ({ selected }: { selected: number }) => void;
}) {
  return (
    <ReactPaginate
      className=" w-full  justify-center disabled:hover:cursor-not-allowed  items-center gap-x-6 flex"
      pageCount={totalPagesNumber}
      forcePage={currentPage}
      pageClassName={
        " w-11 h-11 text-black-300 hover:cursor-pointer flex justify-center items-center "
      }
      pageLinkClassName={
        " w-full h-full flex rounded-full flex justify-center  disabled:hover:cursor-not-allowed  items-center "
      }
      pageRangeDisplayed={2}
      nextLabel={<ArrowLeft2 size={24} className="  " />}
      previousLabel={<ArrowRight2 size={24} className=" w-full h-full" />}
      previousClassName="rounded-full border text-gray-300 text-2xl w-11 h-11   border-gray-50 flex justify-center items-center"
      nextClassName="rounded-full border text-gray-300 text-2xl w-11 h-11  border-gray-50 flex justify-center items-center"
      activeClassName=" bg-gray-50 text-gray-600 w-11 h-11 rounded-full flex justify-center items-center"
      onPageChange={onPageChange}
      renderOnZeroPageCount={null}
      disabledClassName=" cursor-not-allowed opacity-60 "
    />
  );
}

export default Pagination;
