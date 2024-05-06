/** @format */
"use client";
import useGetSingleService from "@/util/hook/SingleService/useGetSingleService";
import React from "react";
interface ConditionsServiceProps {
  id: string;
}

function ConditionsService({ id }: ConditionsServiceProps) {
  const data = useGetSingleService({ id: id });
  console.log(data.data?.value.conditions);

  return (
    <div className="Container pt-10">
      <h2 className="mb-6 text-gray-500 font-semibold">قوانین و مقررات</h2>
      {data.data?.value.conditions.length !== 0 ? (
        <ul className=" gap-y-4 flex flex-col list-disc marker:text-third-400 px-4 ">
          {data.data?.value.conditions.map((item: any, index: number) => {
            return (
              <li key={index} className=" text-base text-gray-500">
                {item}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className=" text-gray-400 text-center">قوانین و مقررات وجود ندارد</p>
      )}
    </div>
  );
}

export default ConditionsService;
