/** @format */

"use client";
import React, { useState } from "react";
import { LandingQuestions } from "@/util/Data/LandingQuestions";
import { ArrowDown2 } from "iconsax-react";
import { Collapse } from "react-collapse";
function Questions() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className=" w-full grid lg:grid-cols-2  max-w-[1224px] mx-auto  ">
      <div className="w-full text-center flex items-start pb-10 lg:pt-16 justify-center ">
        <p className=" text-primary-600 text-2xl lg:text-4xl font-bold">
          ســــــــــــــــوالات{" "}
          <span className=" text-secondary-500">متــــــــــــــــداول</span>
        </p>
      </div>

      <div className=" w-full  flex-col gap-6 flex h-fit">
        {LandingQuestions.map((item: any, index: number) => {
          return (
            <div
              key={index}
              onClick={() => {
                setActiveIndex((prev) => (prev === item.id ? null : item.id));
              }}
              className={`w-full flex-col cursor-pointer py-6 px-6 border  ${
                activeIndex === item.id
                  ? "border-gray-200  shadow-CMSHADOWHover"
                  : "border-gray-50"
              } duration-200 flex rounded-2xl`}
            >
              <div className=" w-full flex justify-between gap-4 items-center ">
                <p className=" select-none  text-gray-500 font-semibold text-sm lg:text-base text-justify">
                  {item.question}
                </p>
                <ArrowDown2
                  className={`text-gray-300  ${
                    activeIndex === item.id ? "rotate-180" : "rotate-0"
                  } duration-200`}
                />
              </div>

              <Collapse isOpened={activeIndex === item.id}>
                <p className=" text-gray-500 text-xs text-justify lg:text-sm pt-6 select-none">
                  {item.answer}
                </p>
              </Collapse>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Questions;
