/** @format */
"use client";
import useGetSingleService from "@/util/hook/SingleService/useGetSingleService";
import React, { useState } from "react";
import { Collapse } from "react-collapse";

interface AboutServiceProps {
  id: string;
}

function AboutService({ id }: AboutServiceProps) {
  const [expanded, setExpanded] = useState(false);
  const data = useGetSingleService({ id: id });

  console.log(data.data?.value.description);

  // const para = `        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
  //           برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
  //           ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال
  //           و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
  //           شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
  //           فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت
  //           که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
  //           رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
  //           پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`;
  return (
    <>
      {data.data?.value ? (
        <div className="flex gap-y-6 flex-col Container pt-6 lg:pt-10">
          <h2 className="text-gray-500 font-semibold">{`معرفی`}</h2>
          <div className="w-full  overflow-hidden">
            {/* <Collapse isOpened={expanded}>
          <p></p>
        </Collapse> */}

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
        <div className=" w-full max-w-[180px] h-5 rounded-lg  bg-gray-200"></div>
        <div className=" w-full max-w-[780px] h-4  rounded-lg  bg-gray-200"></div>
        <div className=" w-full max-w-[310px] h-4  rounded-lg  bg-gray-200"></div>
        <div className=" w-full max-w-[910px] h-4  rounded-lg  bg-gray-200"></div>
      </div>
    </>
  );
}
