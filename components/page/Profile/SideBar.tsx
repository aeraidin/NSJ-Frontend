/** @format */
"use client";

import React from "react";
import sidebarPicture from "../../../public/profile/sidebar.png";
import walletPicture from "../../../public/profile/wallet.png";
import Image from "next/image";
import { Edit2 } from "iconsax-react";
import Links from "./Links";
import useGetUser from "@/util/hook/user/useGetUser";
import useGetBalance from "@/util/hook/Wallet/useGetBalance";
import { NumericFormat } from "react-number-format";
function SideBar() {
  const user = useGetUser();
  const balance = useGetBalance();

  return (
    <div className=" w-full flex  flex-col p-2 items-center rounded-[20px]   border border-gray-50 ">
      <div className=" w-full   ">
        <div className=" relative aspect-w-12 aspect-h-6 md:aspect-w-16 md:aspect-h-5 lg:aspect-w-16 lg:aspect-h-9">
          <Image src={sidebarPicture} fill alt="sidebar-pic" />
          <div className=" w-full relative flex justify-center">
            <div className=" rounded-full border flex justify-center items-center h-20 w-20 bg-white  absolute bottom-[-32px]   "></div>
            <div className=" bg-third-500 flex justify-center items-center w-6 h-6 rounded-full absolute bottom-[-24px] right-[78px]">
              <Edit2 size={16} className=" text-white" />
            </div>
          </div>
        </div>
      </div>
      <p className=" mt-12 text-gray-500 font-semibold">{`${user?.data?.value.firstName} ${user?.data?.value.lastName}`}</p>

      <div className=" border mt-5 h-[77px] rounded-[20px] relative px-6 border-gray-50 flex w-full">
        <div className=" absolute bottom-0 right-0  w-24 h-24">
          <Image src={walletPicture} fill alt="wallet" />
        </div>
        <div className=" flex flex-col w-full justify-center items-end">
          <p className=" text-gray-300 font-semibold text-xs">موجودی کیف پول</p>
          <p className=" text-third-500  text-base font-semibold">
            <NumericFormat
              value={balance?.data?.value.balance}
              displayType={"text"}
              className="text-third-500 "
              thousandSeparator={","}
            />
            <span className=" pr-1">{"تومان"}</span>
          </p>
        </div>
      </div>
      <Links />
    </div>
  );
}

export default SideBar;
