/** @format */
"use client";
import Pagination from "@/components/Layout/Pagination/Pagination";
import TransactionTable, {
  TransactionTableLoading,
} from "@/components/page/Profile/Tables/TransactionTable";
import useGetTransactions from "@/util/hook/Wallet/useGetTransactions";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";

function Page() {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  const transactions = useGetTransactions(currentPage + 1);
  useEffect(() => {
    if (transactions.isSuccess) {
      setTotalPages(transactions?.data?.value.totalCount);
    }
  }, [
    currentPage,
    totalPages,
    transactions?.data?.value.totalCount,
    transactions.isSuccess,
  ]);

  return (
    <div className=" w-full">
      <Link
        href={"/profile"}
        className=" gap-x-2 mb-9 px-3  mt-10 lg:hidden flex"
      >
        <ArrowRight className=" text-gray-500" />
        <p className=" text-sm  text-gray-600">بازگشت</p>
      </Link>
      {transactions.isPending ? (
        <>
          <TransactionTableLoading />
        </>
      ) : (
        <>
          <TransactionTable
            data={transactions?.data?.value.list}
            selectedRow={(e: any) => console.log(e)}
          />
        </>
      )}
      <div className=" w-full my-10  h-fit">
        {totalPages > 1 ? (
          <Pagination
            currentPage={currentPage}
            totalPagesNumber={transactions?.data?.value.totalCount}
            onPageChange={handlePageChange}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Page;
