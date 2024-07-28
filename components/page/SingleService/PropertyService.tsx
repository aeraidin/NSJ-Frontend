/** @format */
"use client";
import useGetSingleService from "@/util/hook/SingleService/useGetSingleService";
import { TickCircle } from "iconsax-react";
import { notFound } from "next/navigation";
import React, { useEffect } from "react";

function PropertyService({ id }: { id: string }) {
  const data = useGetSingleService({ id: id });
  useEffect(() => {
    if (data.isError) {
      return notFound()
    }
  }, [data.isError])
  return (
    <>
      {data.data?.value ? (
        <div className="Container">
          <h2 className=" font-semibold text-gray-500 mb-6  mt-6 lg:mt-10">
            ویژگی ها و امکانات
          </h2>

          {data.data?.value?.facilities.length !== 0 ? (
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6  ">
              {data.data?.value.facilities.map((item: any, index: number) => {
                return (
                  <>
                    <div key={index} className=" gap-x-3 flex  items-center">
                      <TickCircle size={32} className=" text-third-300" />
                      <p>{item}</p>
                    </div>
                  </>
                );
              })}
            </div>
          ) : (
            <p className=" text-gray-400 text-center">
              قوانین و مقررات وجود ندارد
            </p>
          )}
        </div>
      ) : (
        <>
          <PropertyServiceLoading />
        </>
      )}
    </>
  );
}

export default PropertyService;

export function PropertyServiceLoading() {
  return (
    <>
      <div className=" w-full Container gap-y-6 flex flex-col animate-pulse ">
        <div className=" w-full max-w-[200px] rounded-lg h-5  mt-10">
          <h2 className=" text-gray-500 font-semibold">ویژگی ها و امکانات</h2>
        </div>
        <div className=" grid grid-cols-1 gap-y-4 lg:grid-cols-4">
          <div className=" flex gap-x-3">
            <div className=" rounded-full h-5 w-5 bg-gray-300"></div>
            <div className=" w-full max-w-[120px] bg-gray-200 h-4 rounded-lg"></div>
          </div>
          <div className=" flex gap-x-3">
            <div className=" rounded-full h-5 w-5 bg-gray-300"></div>
            <div className=" w-full max-w-[120px] bg-gray-200 h-4 rounded-lg"></div>
          </div>
          <div className=" flex gap-x-3">
            <div className=" rounded-full h-5 w-5 bg-gray-300"></div>
            <div className=" w-full max-w-[120px] bg-gray-200 h-4 rounded-lg"></div>
          </div>

          <div className=" flex gap-x-3">
            <div className=" rounded-full h-5 w-5 bg-gray-300"></div>
            <div className=" w-full max-w-[120px] bg-gray-200 h-4 rounded-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
}
