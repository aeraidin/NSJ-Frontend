/** @format */

import { ArrowLeft2, Location, Trash } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { NumericFormat } from "react-number-format";
import image from "../../../public/Banner/435x210.jpg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addRemoveFavorites } from "@/util/api/Profile/AddRemoveFavorites";
function FavoriteCards({ data }: { data: favoriteCard }) {
  const queryClient = useQueryClient();
  const RemoveFavorite = useMutation({
    mutationFn: addRemoveFavorites,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ["FavoriteList"] });
    },
    onError(error, variables, context) {},
  });
  return (
    <div className="w-full  select-none relative bg-white flex flex-col xl:flex-row  h-fit border border-gray-50 rounded-2xl overflow-hidden hover:shadow-CMSHADOW duration-200 group">
      <div
        onClick={() => {
          RemoveFavorite.mutate({
            sportComplexServiceId: data.id,
          });
        }}
        className=" p-3 border cursor-pointer bg-white  border-error-100 absolute rounded-2xl opacity-0 lg:group-hover:opacity-100 left-5 duration-200 top-5 hidden lg:block "
      >
        <div className="  bg-white hidden xl:flex   duration-200 justify-center items-center  rounded-2xl">
          {RemoveFavorite.isPending ? (
            <svg className="h-6 w-6 animate-spin" viewBox="3 3 18 18">
              <path
                className="fill-error-400/20"
                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
              ></path>
              <path
                className="fill-error-400"
                d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
              ></path>
            </svg>
          ) : (
            <Trash variant="Bold" className=" text-error-500 " />
          )}
        </div>
      </div>

      <div className="    w-full  mx-auto overflow-hidden xl:w-[290px]">
        <div className="aspect-w-8 aspect-h-5  md:aspect-w-16 md:aspect-h-9  xl:aspect-w-16 xl:aspect-h-9  overflow-hidden relative">
          <Image
            fill
            className="object-cover   group-hover:scale-110 duration-150"
            alt={data.filePath}
            src={`${process.env.NEXT_PUBLIC_API_BASE_URLIMAGE}${data.filePath}`}
            sizes="90vw"
          />

          <div className="  flex xl:hidden   rounded-2xl items-start justify-end gap-1 absolute py-[18px] px-6 -translate-x-0  opacity-100 xl:opacity-0 xl:group-hover:opacity-100 group-hover:translate-x-0 duration-150 ">
            <div
              onClick={() => {
                RemoveFavorite.mutate({
                  sportComplexServiceId: data.id,
                });
              }}
              className=" w-9 h-9  bg-white cursor-pointer xl:hover:bg-white/80 duration-200 flex justify-center items-center  rounded-2xl"
            >
              {RemoveFavorite.isPending ? (
                <svg className="h-6 w-6 animate-spin" viewBox="3 3 18 18">
                  <path
                    className="fill-error-400/20"
                    d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                  ></path>
                  <path
                    className="fill-error-400"
                    d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                  ></path>
                </svg>
              ) : (
                <Trash variant="Bold" className=" text-error-500 " />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-3">
        {/* Info Part */}
        <div className="flex w-full flex-col  gap-3 pb-3">
          <div
            className="w-full flex items-center  gap-x-3
          "
          >
            <Link className="  truncate" href={`/service/${data.id}`}>
              <h3>
                {data.serviceName} {data.service.name}
              </h3>
            </Link>
            <div className="flex items-center gap-2 justify-center">
              <h5 className="leading-[12px]">{data.rate.toFixed(1)}</h5>
              <FaStar className="text-secondary-600" size={20} />
            </div>
          </div>
          <div className="w-full flex items-center gap-2 ">
            {/* Location */}
            <div className="flex items-center border-l border-gray-300 pl-2 gap-1">
              <Location size="20" className="text-gray-300" variant="Bold" />
              <h5>{data.location}</h5>
            </div>
            <Link href={`category/${data.service.id}`} className="group/item">
              <h5 className="group-hover/item:text-third-500 group-hover/item:underline duration-150">
                {data.service.name}
              </h5>
            </Link>
          </div>
          <div
            className={`flex items-center gap-2 ${
              data.hasDiscount ? "opacity-100" : "opacity-0"
            }`}
          >
            <h5 className="text-gray-200 line-through">
              {" "}
              <NumericFormat
                value={data.price}
                displayType={"text"}
                thousandSeparator={","}
              />{" "}
            </h5>
            <div className="px-2 py-1 border border-error-500 rounded-xl">
              <h5 className="text-error-500 leading-4">
                تا {data.discountPresentage}٪ تخفیف
              </h5>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full xl:min-w-[500px] justify-between">
          <p>
            <NumericFormat
              value={data.hasDiscount ? data.priceAfterDiscount : data.price}
              displayType={"text"}
              thousandSeparator={","}
            />{" "}
            تومان
          </p>
          <Link
            href={`/service/${data.id}`}
            className="text-third-600 flex items-center   lg:justify-end  gap-1 -translate-x-0 xl:-translate-x-32 opacity-100 xl:group-hover:opacity-100 xl:group-hover:-translate-x-0 xl:opacity-0    duration-150 "
          >
            <h5 className="text-third-600">مشاهده و خرید</h5>
            <ArrowLeft2 size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCards;

export function FavoriteCardsLoading() {
  return (
    <div className=" select-none bg-white  w-full h-fit flex flex-col  xl:flex-row border border-gray-50 rounded-2xl overflow-hidden hover:shadow-CMSHADOW duration-200 group animate-pulse ">
      <div className=" w-full xl:max-w-[290px] overflow-hidden relative">
        <div className="aspect-w-8 aspect-h-5  md:aspect-w-16 md:aspect-h-9  xl:aspect-w-8 xl:aspect-h-5  bg-gray-300"></div>
      </div>
      <div className="p-3">
        {/* Info Part */}
        <div className="flex flex-col gap-3 pb-3">
          <div className="w-full flex items-center  gap-4">
            <div className=" w-[100px] h-3 rounded-full bg-gray-200"></div>
            <div className="flex items-center gap-2 justify-center">
              <h5 className="leading-[12px]">5</h5>
              <FaStar className="text-secondary-600" size={20} />
            </div>
          </div>
          <div className="w-full flex items-center gap-2 ">
            {/* Location */}
            <div className="flex items-center border-l border-gray-300 pl-2 gap-1">
              <Location size="20" className="text-gray-300" variant="Bold" />
              <div className="w-[50px] h-2 bg-gray-100 rounded-full"></div>
            </div>
            <div className="group/item">
              <div className="w-[100px] h-2 rounded-full  bg-gray-100"></div>
            </div>
          </div>
          <div className={`flex items-center gap-2  opacity-0`}>
            <div className="w-full max-w-[100px] h-2 rounded-full bg-gray-100"></div>

            <div className="px-2 py-1 border border-error-500 rounded-xl">
              <h5 className="text-error-500 leading-4">تا 20٪ تخفیف</h5>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full xl:min-w-[500px] justify-between">
          <div className="w-full max-w-[100px] rounded-2xl h-2 bg-gray-100"></div>
          <div className="text-third-600 flex items-center gap-1 -translate-x-32 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0 duration-150">
            <h5 className="text-third-600">مشاهده و خرید</h5>
            <ArrowLeft2 size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
