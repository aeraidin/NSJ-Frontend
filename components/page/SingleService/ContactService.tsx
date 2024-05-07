/** @format */
"use client";
import { Call, Location } from "iconsax-react";
import React, { useState } from "react";
import useGetSingleService from "@/util/hook/SingleService/useGetSingleService";
import dynamic from "next/dynamic";

const DynamicMapComponent = dynamic(
  () => import("@/components/Layout/Map/Map"),
  {
    ssr: false,
  }
);

interface ContactServiceProps {
  id: string;
}

enum Contact {
  Address = 0,
  Phone = 1,
  PostalCode = 2,
  Map = 3,
}

function ContactService({ id }: ContactServiceProps) {
  const data = useGetSingleService({ id: id });

  const [Latlng, setLatlng] = useState<string | null>(
    "51.506747489229525,-0.1246154308319092"
  );

  const address = data.data?.value.contacts.find((item: any) => {
    return item.type === Contact.Address;
  });

  const phone = data.data?.value.contacts.find((item: any) => {
    return item.type === Contact.Phone;
  });

  const map = data.data?.value.contacts.find((item: any) => {
    return item.type === Contact.Map;
  });

  return (
    <div className=" w-full flex h-[379px] Container pt-10">
      <div className=" w-full">
        <h2 className=" mb-14 text-gray-500 font-semibold">
          موقعیت مکانی و آدرس
        </h2>
        <div className=" flex-col flex gap-y-6">
          <div className=" flex gap-x-3">
            <Location size={24} variant="Bold" className=" text-gray-200" />
            <p className=" text-gray-500">{address?.value}</p>
          </div>
          <div className=" flex gap-x-3">
            <Call size={24} variant="Bold" className=" text-gray-200" />
            <p className=" text-gray-500">{phone?.value}</p>
          </div>
        </div>
      </div>
      <div className=" w-full ">
        <DynamicMapComponent
          selectedValue={map?.value}
          id="map"
          latlng={(e: any) => {
            console.log(e);

            setLatlng(e.join(","));
          }}
        />
      </div>
    </div>
  );
}

export default ContactService;
