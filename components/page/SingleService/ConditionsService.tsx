/** @format */
"use client";
import useGetSingleService from "@/util/hook/SingleService/useGetSingleService";
import React from "react";
interface ConditionsServiceProps {
  param: string;
}

function ConditionsService({ param }: ConditionsServiceProps) {
  const Conditions = useGetSingleService({ id: param });
  console.log(Conditions.data?.value);

  return (
    <div className=" py-10 Container">
      <h2 className=" mb-6">قوانین و مقررات</h2>
      <ul className=" gap-y-4 flex flex-col list-disc marker:text-third-400 px-4 ">
        <li className=" text-base text-gray-500">
          20 دقیقه پایانی سانس به دوش گرفتن و تعویض لباس اختصاص دارد
        </li>
        <li className=" text-base text-gray-500">
          20 دقیقه پایانی سانس به دوش گرفتن و تعویض لباس اختصاص دارد
        </li>{" "}
        <li className=" text-base text-gray-500">
          20 دقیقه پایانی سانس به دوش گرفتن و تعویض لباس اختصاص دارد
        </li>
      </ul>
    </div>
  );
}

export default ConditionsService;
