/** @format */
"use client";
import Pagination from "@/components/Layout/Pagination/Pagination";
import ReservesTable, {
  ReservesTableLoading,
} from "@/components/page/Profile/Tables/ReservesTable";
import useGetReserves from "@/util/hook/user/useGetReserves";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";
function Page() {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  const reserves = useGetReserves(currentPage + 1);

  useEffect(() => {
    if (reserves.isSuccess) {
      setTotalPages(reserves?.data?.value.totalCount);
    }
  }, [
    currentPage,
    totalPages,
    reserves?.data?.value.totalCount,
    reserves.isSuccess,
  ]);

  return (
    <div className=" w-full">
      <Link href={"/profile"} className=" gap-x-2 mb-9 lg:hidden flex">
        <ArrowRight className=" text-gray-500" />
        <p className=" text-sm  text-gray-600">بازگشت</p>
      </Link>

      {reserves.isPending ? (
        <>
          <ReservesTableLoading />
        </>
      ) : (
        <>
          <ReservesTable
            data={reserves?.data?.value.list}
            selectedRow={(e: any) => console.log(e)}
          />
        </>
      )}
      <div className=" w-full mt-4  h-fit">
        {totalPages > 1 ? (
          <Pagination
            currentPage={currentPage}
            totalPagesNumber={reserves?.data?.value.totalCount}
            onPageChange={handlePageChange}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Page;
