/** @format */
"use client";
import useGetSingleService from "@/util/hook/SingleService/useGetSingleService";
import React from "react";
interface ConditionsServiceProps {
  id: string;
}

function ConditionsService({ id }: ConditionsServiceProps) {
  const data = useGetSingleService({ id: id });
  return (
    <>
      {data.data?.value ? (
        <div className="Container pt-6 lg:pt-10">
          <h2 className="mb-6 text-gray-500 font-semibold">قوانین و مقررات</h2>
          {data.data?.value.conditions.length !== 0 ? (
            <ul className=" gap-y-3 md:gap-y-4 flex flex-col list-disc marker:text-third-400 px-4 ">
              {data.data?.value.conditions.map((item: any, index: number) => {
                return (
                  <li key={index} className=" text-base text-gray-500">
                    {item}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className=" text-gray-400 text-center">
              قوانین و مقررات وجود ندارد
            </p>
          )}
        </div>
      ) : (
        <>
          <ConditionsServiceLoading />
        </>
      )}
    </>
  );
}

export default ConditionsService;

export function ConditionsServiceLoading() {
  return (
    <>
      <div className=" w-full Container flex flex-col gap-y-6 animate-pulse">
        <div className=" w-full max-w-[200px] rounded-lg h-5 bg-gray-200"></div>
        <div className=" flex gap-x-3 items-center">
          <div className=" rounded-full bg-gray-300 w-2 h-2"></div>
          <div className=" w-full max-w-[200px] lg:max-w-[440px] rounded-lg h-3 bg-gray-200"></div>
        </div>

        <div className=" flex gap-x-3 items-center">
          <div className=" rounded-full bg-gray-300 w-2 h-2"></div>
          <div className=" w-full max-w-[180px] rounded-lg h-3 bg-gray-200"></div>
        </div>

        <div className=" flex gap-x-3 items-center">
          <div className=" rounded-full bg-gray-300 w-2 h-2"></div>
          <div className=" w-full max-w-[220px] lg:max-w-[640px] rounded-lg h-3 bg-gray-200"></div>
        </div>
      </div>
    </>
  );
}
