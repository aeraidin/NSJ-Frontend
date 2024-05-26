/** @format */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "iconsax-react";
import FavoriteCards, {
  FavoriteCardsLoading,
} from "@/components/Layout/Cards/FavoriteCards";
import useGetFavorites from "@/util/hook/user/useGetFavorites";
import Pagination from "@/components/Layout/Pagination/Pagination";
function Page() {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  const favorites = useGetFavorites(currentPage + 1);
  useEffect(() => {
    if (favorites.isSuccess) {
      setTotalPages(favorites?.data?.value.totalCount);
    }
  }, [
    currentPage,
    totalPages,
    favorites?.data?.value.totalCount,
    favorites.isSuccess,
  ]);

  return (
    <div className=" w-full p-4 lg:p-0">
      <Link href={"/profile"} className=" gap-x-2 mb-9 lg:hidden flex">
        <ArrowRight className=" text-gray-500" />
        <p className=" text-sm  text-gray-600">بازگشت</p>
      </Link>

      <div className=" flex gap-x-2 items-center">
        <p className=" text-lg text-gray-600">علاقه مندی</p>
        <div className=" bg-secondary-500 w-[25px] h-[18px] rounded-lg flex justify-center items-center">
          <span className=" text-white text-base font-bold">
            {favorites?.data?.value?.list.length}
          </span>
        </div>
      </div>

      {favorites.isPending && (
        <div className=" mt-4 xl:mt-10 gap-y-4 flex flex-col">
          <FavoriteCardsLoading />
          <FavoriteCardsLoading />
          <FavoriteCardsLoading />
        </div>
      )}

      {favorites?.data?.value?.list.length <= 0 ? (
        <div className=" text-gray-600 text-sm lg:text-base text-center h-40 flex justify-center items-center">
          علاقه مندی ثبت نشده است
        </div>
      ) : (
        <div className=" w-full flex justify-center  flex-col gap-y-4 mt-4 xl:mt-10">
          {favorites?.data?.value?.list.map((item: any, index: number) => {
            return (
              <>
                <FavoriteCards key={index} data={item} />
              </>
            );
          })}
        </div>
      )}

      <div className=" w-full mt-4 lg:mt-10 h-fit">
        {totalPages > 1 ? (
          <Pagination
            currentPage={currentPage}
            totalPagesNumber={favorites?.data?.value.totalCount}
            onPageChange={handlePageChange}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Page;
