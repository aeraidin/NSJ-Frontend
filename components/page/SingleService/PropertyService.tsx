/** @format */
"use client";
import useGetSingleService from "@/util/hook/SingleService/useGetSingleService";
import { TickCircle } from "iconsax-react";
import React from "react";

function PropertyService({ id }: { id: string }) {
  const data = useGetSingleService({ id: id });
  return (
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
        <p className=" text-gray-400 text-center">قوانین و مقررات وجود ندارد</p>
      )}
    </div>
  );
}

export default PropertyService;
