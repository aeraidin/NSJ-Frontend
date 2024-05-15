/** @format */
"use client";
import React, { useState } from "react";
import { LandingQuestions } from "@/util/Data/LandingQuestions";
import { ArrowDown2 } from "iconsax-react";
import { Collapse } from "react-collapse";
function Questions() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  console.log(activeIndex);

  return (
    <div className="  w-full flex flex-col  items-center lg:items-start lg:flex-row lg:justify-between px-3 lg:px-24 ">
      <div className=" w-full text-center mt-14 mb-6">
        <p className=" text-primary-600 text-2xl lg:text-4xl font-bold">
          ســــــــــــــــوالات{" "}
          <span className=" text-secondary-500">متــــــــــــــــداول</span>
        </p>
      </div>

      <div className=" w-full max-w-[659px] flex-col gap-6 flex h-fit">
        {/* <div
          onClick={() => setIsOpen(!isOpen)}
          className={` w-full max-w-[659px] flex-col cursor-pointer py-4 px-4 bg-gray-25 flex  rounded-[20px] ${
            isOpen ? "h-fit min-h-[94px]" : "min-h-[74px] justify-center "
          }  `}
        >
          <div className=" w-full flex justify-between items-center ">
            <p className=" text-gray-600 font-semibold text-base text-justify">
              این متن تست است
            </p>
            {isOpen ? (
              <>
                <ArrowDown2 className=" text-gray-300 w-8 rotate-180 duration-200 h-8" />
              </>
            ) : (
              <>
                <ArrowDown2 className=" text-gray-300 w-8 h-8" />
              </>
            )}
          </div>

          <Collapse isOpened={isOpen}>
            <p className=" text-gray-500">
              این متن تست است این متن تست است این متن تست است
            </p>
          </Collapse>
        </div> */}

        {LandingQuestions.map((item: any, index: number) => {
          return (
            <>
              <div
                key={index}
                onClick={() => {
                  setIsOpen(activeIndex !== index || !isOpen);
                  setActiveIndex(activeIndex !== index ? index : null);
                }}
                className={` shadow-CMSHADOWHover w-full max-w-[659px] flex-col cursor-pointer py-4 px-4 bg-gray-25 flex  rounded-[20px] ${
                  isOpen && activeIndex === index
                    ? "h-fit min-h-[94px]"
                    : "min-h-[74px] justify-center "
                }  `}
              >
                <div className=" w-full  flex justify-between gap-x-10 items-center ">
                  <p className=" select-none  text-gray-600 font-semibold text-sm lg:text-base text-justify">
                    {item.question}
                  </p>
                  {isOpen && activeIndex === index ? (
                    <>
                      <ArrowDown2 className=" text-gray-300 w-8 rotate-180 duration-200 h-8" />
                    </>
                  ) : (
                    <>
                      <ArrowDown2 className=" text-gray-300  duration-200 w-8 h-8" />
                    </>
                  )}
                </div>

                <Collapse isOpened={isOpen && activeIndex === index}>
                  <p className=" text-gray-500 mt-2 lg:mt-0 text-xs lg:text-sm">
                    {item.answer}
                  </p>
                </Collapse>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Questions;
