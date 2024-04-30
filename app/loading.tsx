/** @format */

import MainLayout from "@/components/Layout/MainLayout";
import React from "react";

function Loading() {
    return (
        <MainLayout>
            <div className=" Container  mt-16 animate-pulse">
                <div className=" w-full flex-col flex gap-12">
                    <div className=" w-full relative flex justify-center h-[504px] bg-gray-300  rounded-2xl mb-32">
                        <div className=" w-full absolute bottom-[-88px]  max-w-[1168px] h-[168px] bg-gray-100  rounded-2xl"></div>
                    </div>

                    <div className=" h-8 rounded-lg bg-gray-200 max-w-[180px]"></div>

                    <div className=" flex gap-x-5 w-full ">
                        <div className=" w-full max-w-[321px] h-[380px] bg-gray-200  rounded-2xl"></div>
                        <div className=" w-full max-w-[321px] h-[380px] bg-gray-200 rounded-2xl"></div>
                        <div className=" w-full max-w-[321px] h-[380px] bg-gray-200  rounded-2xl"></div>
                        <div className=" w-full max-w-[321px] h-[380px] bg-gray-200  rounded-2xl"></div>
                    </div>

                    <div className=" w-full bg-gray-300 flex  relative h-[320px] rounded-2xl mt-24">
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

                    <div className=" h-8 rounded-lg bg-gray-200 max-w-[180px]"></div>

                    <div className=" flex gap-x-5 w-full ">
                        <div className=" w-full max-w-[321px] h-[380px] bg-gray-200  rounded-2xl"></div>
                        <div className=" w-full max-w-[321px] h-[380px] bg-gray-200 rounded-2xl"></div>
                        <div className=" w-full max-w-[321px] h-[380px] bg-gray-200  rounded-2xl"></div>
                        <div className=" w-full max-w-[321px] h-[380px] bg-gray-200  rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Loading;
