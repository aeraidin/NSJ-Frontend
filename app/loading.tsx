/** @format */

import MainLayout from "@/components/Layout/MainLayout";
import React from "react";

function Loading() {
  return (
    <MainLayout>
      <div className=" Container  mt-16 animate-pulse">
        <div className=" w-full flex-col flex gap-12">
          <div>
            <div className=" w-full relative flex justify-center aspect-w-16 aspect-h-6 h-[190px] lg:h-[504px] bg-gray-300  rounded-2xl lg:mb-32">
              <div className=" w-full absolute hidden lg:block bottom-[-88px] top-[80%] lg:max-w-[850px] mx-auto  xl:max-w-[1168px] h-[168px] bg-gray-100  rounded-2xl"></div>
            </div>

            <div className=" flex gap-4 w-full mt-2 ">
              <div className=" w-full   lg:hidden  h-[63px] bg-gray-100  rounded-2xl"></div>
              <div className=" w-full   lg:hidden   h-[63px] bg-gray-100  rounded-2xl"></div>
            </div>
          </div>

          {/* {RecomendedlistLoading} */}
          <h1 className=" text-gray-300 mb-2">پیشنهاد های ویژه</h1>
          <div className=" hidden lg:flex gap-x-5 w-full ">
            <div className=" w-full max-w-[321px] h-[380px] bg-gray-200  rounded-2xl"></div>
            <div className=" w-full max-w-[321px] h-[380px] bg-gray-200 rounded-2xl"></div>
            <div className=" w-full max-w-[321px] h-[380px] bg-gray-200  rounded-2xl"></div>
            <div className=" w-full max-w-[321px] h-[380px] bg-gray-200  rounded-2xl"></div>
          </div>

          <div className=" hidden md:flex lg:hidden gap-x-5 w-full ">
            <div className=" w-full max-w-[321px] h-[380px] bg-gray-200  rounded-2xl"></div>
            <div className=" w-full max-w-[321px] h-[380px] bg-gray-200 rounded-2xl"></div>
            <div className=" w-full max-w-[120px] h-[380px] bg-gray-200  rounded-2xl"></div>
          </div>

          <div className=" flex md:hidden gap-x-5 w-full ">
            <div className=" w-full max-w-[321px] h-[380px] bg-gray-200  rounded-2xl"></div>
            <div className=" w-full flex-1 h-[380px] bg-gray-200  rounded-2xl"></div>
          </div>

          {/* {HighestDiscountComplexLoading} */}
          <div className=" w-full hidden bg-gray-300 lg:flex  relative h-[320px] rounded-2xl mt-24">
            <div className=" w-full bg-gray-300  max-w-[320px]   rounded-2xl mt-24">
              <div className=" w-full max-w-[220px] mt-4 mx-20 bg-gray-200  h-8 rounded-lg"></div>
            </div>
            <div className=" w-full   bg-gray-300 relative h-full gap-x-5 rounded-2xl flex px-16 ">
              <div className=" w-full flex absolute top-[-88px] gap-x-10 right-0 px-16">
                <div className=" w-full   max-w-[321px] h-[320px] bg-gray-200   rounded-2xl"></div>
                <div className=" w-full  max-w-[321px] h-[320px] bg-gray-200  rounded-2xl"></div>
                <div className=" w-full   max-w-[321px] h-[320px] bg-gray-200  rounded-2xl"></div>
              </div>
            </div>
          </div>

          <div className=" w-full bg-gray-300 flex justify-center items-center flex-col lg:hidden relative h-[518px] rounded-2xl mt-24">
            <div className=" w-full bg-gray-200  max-w-[290px] h-[180px] absolute top-[-60px] rounded-2xl "></div>

            <div className=" w-full mt-36 px-10">
              <div className=" w-full">
                <h2 className=" text-gray-100 font-bold">بیشترین تخفیف ها</h2>
              </div>

              <div className=" w-full flex justify-start items-center mt-10  gap-x-10">
                <div className=" w-full bg-gray-200  max-w-[320px] h-[220px]   rounded-2xl "></div>

                <div className=" w-full bg-gray-200 hidden max-w-[55px] md:max-w-[320px] h-[220px]   rounded-2xl "></div>
                <div className=" w-full bg-gray-200 hidden md:block  max-w-[120px] h-[220px]   rounded-2xl "></div>
              </div>
            </div>
          </div>

          {/* {SecondBanner} */}
          {/* <div className=" w-full flex flex-col   gap-y-2 lg:gap-x-4 lg:flex-row">
            <div className=" w-full h-[100px] lg:h-[210px] lg:max-w-[548px] bg-gray-200  rounded-2xl"></div>
            <div className=" w-full h-[100px] lg:h-[210px] bg-gray-200  rounded-2xl"></div>
          </div> */}

          <div className="aspect-w-16 aspect-h-10 lg:aspect-h-3   relative">
            <div className="grid grid-cols-1 lg:grid-cols-9 w-full h-full gap-6 ">
              <div className="relative lg:col-span-4">
                <div className=" w-full h-[100px] md:h-[180px] lg:h-[210px] lg:max-w-[548px] bg-gray-200  rounded-2xl"></div>
              </div>
              <div className="relative lg:col-span-5">
                <div className=" w-full h-[100px] md:h-[180px] lg:h-[210px] bg-gray-200  rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* {HighestRateComplexLoading} */}
          <h1 className=" text-gray-300">برترین مجموعه ها</h1>
          <div className=" hidden lg:flex gap-x-5 w-full ">
            <div className=" w-full max-w-[321px] h-[380px] bg-gray-200  rounded-2xl"></div>
            <div className=" w-full max-w-[321px] h-[380px] bg-gray-200 rounded-2xl"></div>
            <div className=" w-full max-w-[321px] h-[380px] bg-gray-200  rounded-2xl"></div>
            <div className=" w-full max-w-[321px] h-[380px] bg-gray-200  rounded-2xl"></div>
          </div>

          <div className=" hidden md:flex lg:hidden gap-x-5 w-full ">
            <div className=" w-full max-w-[321px] h-[380px] bg-gray-200  rounded-2xl"></div>
            <div className=" w-full max-w-[321px] h-[380px] bg-gray-200 rounded-2xl"></div>
            <div className=" w-full max-w-[120px] h-[380px] bg-gray-200  rounded-2xl"></div>
          </div>

          <div className=" flex md:hidden gap-x-5 w-full ">
            <div className=" w-full max-w-[321px] h-[380px] bg-gray-200  rounded-2xl"></div>
            <div className=" w-full  h-[380px] flex-1 bg-gray-200  rounded-2xl"></div>
          </div>

          {/* {ThirdBanner} */}
          <div className=" w-full flex flex-col mb-10    gap-y-2 lg:gap-x-4 lg:flex-row">
            <div className=" w-full  h-[440px]  bg-gray-200  rounded-2xl"></div>
            <div className=" w-full flex lg:flex-col gap-x-2 gap-y-4">
              <div className=" w-full  sm:max-w-full h-[100px] sm:h-[210px] bg-gray-200  rounded-2xl"></div>
              <div className=" w-full   sm:max-w-full h-[100px]  sm:h-[210px] bg-gray-200  rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Loading;
