/** @format */
"use client";
import { Call, Location } from "iconsax-react";
import React, { useEffect, useState } from "react";
import useGetSingleService from "@/util/hook/SingleService/useGetSingleService";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

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
  useEffect(() => {
    if (data.isError) {
      return notFound()
    }
  }, [data.isError])
  const [Latlng, setLatlng] = useState<string | null>(
    "51.506747489229525,-0.1246154308319092"
  );

  const address = data.data?.value.contacts.find((item: any) => {
    return item.type === Contact.Address;
  });

  const phone = data.data?.value.contacts.filter((item: any) => {
    return item.type === Contact.Phone;
  });
  const map = data.data?.value.contacts.find((item: any) => {
    return item.type === Contact.Map;
  });

  return (
    <>
      {data.data?.value ? (
        <div className=" w-full flex flex-col md:flex-row h-[379px] Container pt-6 lg:pt-10">
          <div className=" w-full">
            <h2 className=" mb-5 md:mb-14 text-gray-500 font-semibold">
              موقعیت مکانی و آدرس
            </h2>
            <div className=" flex-col flex gap-y-6">
              <div className=" flex gap-x-3">
                <div className=" gap-3 flex">
                  <Location
                    size={24}
                    variant="Bold"
                    className=" text-gray-200"
                  />
                  <p>آدرس :</p>
                </div>
                <p className=" text-gray-500">{address?.value}</p>
              </div>

              {/* .......number commented........ */}

              {/* <div className=" flex gap-x-3">
                <div className=" gap-3 flex">
                  <Call size={24} variant="Bold" className=" text-gray-200" />

                  <p>شماره تماس :</p>
                </div>
                {phone?.map((item: any, index: number) => {
                  return (
                    <a
                      href={`tel:${item.value}`}
                      key={index}
                      className=" text-gray-500"
                    >
                      {item.value}
                    </a>
                  );
                })}
              </div> */}
            </div>
          </div>
          <div className=" w-full h-[200px] md:h-[296px] mt-7 md:mt-0 ">
            <DynamicMapComponent
              selectedValue={map?.value}
              id="map"
              latlng={(e: any) => {
                setLatlng(e.join(","));
              }}
            />
          </div>
        </div>
      ) : (
        <>
          <ContactServiceLoading />
        </>
      )}
    </>
  );
}

export default ContactService;

export function ContactServiceLoading() {
  return (
    <>
      <div className=" Container  w-full flex flex-col gap-y-6 animate-pulse">
        <div className=" w-full max-w-[200px] rounded-lg h-5  mt-10">
          <h2 className=" text-gray-500 font-semibold">موقعیت مکانی و آدرس</h2>
        </div>
        <div className=" flex w-full flex-col gap-y-6 lg:gap-y-0 lg:flex-row">
          <div className=" flex flex-col w-full gap-y-6">
            <div className=" flex gap-x-2 w-full ">
              <div className=" w-5 h-5 rounded-full bg-gray-300"></div>
              <div className=" w-full max-w-[240px] rounded-lg h-5 bg-gray-200"></div>
            </div>

            <div className=" flex gap-x-2 w-full ">
              <div className=" w-5 h-5 rounded-full bg-gray-300"></div>
              <div className=" w-full max-w-[440px] rounded-lg h-5 bg-gray-200"></div>
            </div>
          </div>

          <div className=" w-full  rounded-lg h-[200px] lg:h-[296px] bg-gray-200"></div>
        </div>
      </div>
    </>
  );
}
