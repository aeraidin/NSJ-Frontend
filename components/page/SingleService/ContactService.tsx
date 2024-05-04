/** @format */
"use client";
import { Call, Location } from "iconsax-react";
import React, { useState } from "react";
import DynamicMapComponent from "@/components/Layout/Map/Map";

interface ContactServiceProps {
  param: string;
}

function ContactService({ param }: ContactServiceProps) {
  const [Latlng, setLatlng] = useState<string | null>(
    "51.506747489229525,-0.1246154308319092"
  );

  return (
    <div className=" w-full flex h-[379px] Container py-10">
      <div className=" w-full">
        <h2 className=" mb-14">موقعیت مکانی و آدرس</h2>
        <div className=" flex-col flex gap-y-6">
          <div className=" flex gap-x-3">
            <Location size={24} variant="Bold" className=" text-gray-200" />
            <p className=" text-gray-500">
              تهران، شهر تهران، فلکه سوم تهرانپارس، خیابان ۱۹۶ غربی، خیابان
              طاهری شمالی
            </p>
          </div>
          <div className=" flex gap-x-3">
            <Call size={24} variant="Bold" className=" text-gray-200" />
            <p className=" text-gray-500">021-8873456 - 021-8873456</p>
          </div>
        </div>
      </div>
      <div className=" w-full">
        <div className=" w-[680px]  h-[296px] bg-gray-200 rounded-3xl">
          {/* <DynamicMapComponent
            selectedValue={Latlng}
            id="location"
            latlng={(e: any) => {
              setLatlng(e.join(","));
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default ContactService;
