/** @format */
"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/Layout/Pagination/Pagination";
import Link from "next/link";
import { ArrowRight } from "iconsax-react";
import Comments, { CommentsLoading } from "@/components/page/Profile/Comments";
import useGetComments from "@/util/hook/user/useGetComments";

function Page() {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const comments = useGetComments(currentPage + 1);

  useEffect(() => {
    if (comments.isSuccess) {
      setTotalPages(comments?.data?.value.totalCount);
    }
  }, [
    currentPage,
    totalPages,
    comments?.data?.value.totalCount,
    comments.isSuccess,
  ]);
  return (
    <div className=" w-full p-4 lg:p-0">
      <Link href={"/profile"} className=" gap-x-2 mb-9 lg:hidden flex">
        <ArrowRight className=" text-gray-500" />
        <p className=" text-sm  text-gray-600">بازگشت</p>
      </Link>

      <p className=" text-lg text-gray-600">نظرات من</p>

      {comments.isPending && (
        <div className=" mt-4 lg:mt-10 flex flex-col gap-y-6">
          <CommentsLoading />
          <CommentsLoading />
          <CommentsLoading />
        </div>
      )}
      {comments?.data?.value?.list.length <= 0 ? (
        <div className=" text-gray-600 text-sm lg:text-base text-center h-40 flex justify-center items-center">
          نظری ثبت نشده است
        </div>
      ) : (
        <div className=" gap-y-6 flex flex-col mt-6 px-3 lg:mt-10">
          {comments?.data?.value?.list.map((item: any, index: number) => {
            return (
              <>
                <Comments key={index} data={item} />
              </>
            );
          })}
        </div>
      )}

      <div className=" w-full mt-4  h-fit">
        {totalPages > 1 ? (
          <Pagination
            currentPage={currentPage}
            totalPagesNumber={comments?.data?.value.totalCount}
            onPageChange={handlePageChange}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Page;
