/** @format */
"use client";
import useGetSingleService from "@/util/hook/SingleService/useGetSingleService";
import React, { useState } from "react";

interface AboutServiceProps {
  id: string;
}

function AboutService({ id }: AboutServiceProps) {
  const [expanded, setExpanded] = useState(false);
  const data = useGetSingleService({ id: id });
  return (
    <>
      {data.data?.value ? (
        <div className="flex gap-y-6 flex-col Container pt-6 lg:pt-10">
          <h2 className="text-gray-500 font-semibold">{`معرفی`}</h2>
          <div className="w-full  overflow-hidden">
            <p className=" text-justify">
              {expanded
                ? data.data?.value.description
                : `${data.data?.value.description.substring(0, 550)}... `}
            </p>

            {data.data?.value.description.length >= 550 ? (
              <button
                className="text-third-600  mt-6 cursor-pointer hover:text-third-400 duration-200"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                {expanded ? "توضیحات کمتر" : "توضیحات بیشتر"}
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <>
          <AboutServiceLoading />
        </>
      )}
    </>
  );
}

export default AboutService;

export function AboutServiceLoading() {
  return (
    <>
      <div className=" w-full Container flex flex-col gap-6 animate-pulse">
        <div className=" w-full max-w-[200px] rounded-lg h-5  mt-10">
          <h2 className=" text-gray-500 font-semibold">معرفی</h2>
        </div>
        <div className=" w-full max-w-[780px] h-4  rounded-lg  bg-gray-200"></div>
        <div className=" w-full max-w-[310px] h-4  rounded-lg  bg-gray-200"></div>
        <div className=" w-full max-w-[910px] h-4  rounded-lg  bg-gray-200"></div>
      </div>
    </>
  );
}
