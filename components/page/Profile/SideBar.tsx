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
import { motion } from "framer-motion";

function SideBar() {
  const user = useGetUser();
  const balance = useGetBalance();

  return (
    <div className=" w-full flex   flex-col p-2 items-center rounded-[20px]   lg:border border-gray-50 ">
      <div className=" w-full  relative ">
        <div className="  aspect-w-12 aspect-h-6 md:aspect-w-16 md:aspect-h-5 lg:aspect-w-16 lg:aspect-h-9">
          <Image src={sidebarPicture} fill alt="sidebar-pic" />
          <div className=" w-full  flex h-full  justify-center">
            <div className=" rounded-full border  h-20 w-20 bg-white bottom-[-32px]  absolute "></div>
            <div className=" bg-third-500 flex justify-center items-center w-6 h-6 rounded-full absolute bottom-[-28px] lg:bottom-[-32px] translate-x-7 lg:translate-x-0 lg:right-[78px]">
              <Edit2 size={16} className=" text-white" />
            </div>
          </div>
        </div>
      </div>
      {user.isPending ? (
        <div className=" w-24 mt-12 h-4 animate-pulse rounded-2xl bg-gray-200"></div>
      ) : (
        <>
          <p className=" mt-12 text-gray-500 font-semibold">{`${user?.data?.value.firstName} ${user?.data?.value.lastName}`}</p>
        </>
      )}

      <div className=" border mt-5 h-[77px] rounded-[20px] relative px-6 border-gray-50 flex  w-full">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className=" absolute bottom-0 right-0  w-24 h-24"
        >
          <div>
            <Image src={walletPicture} fill alt="wallet" />
          </div>
        </motion.button>
        <div className=" flex flex-col w-full justify-center items-end">
          <p className=" text-gray-300 font-semibold text-xs">موجودی کیف پول</p>
          {balance.isPending ? (
            <div className=" flex  text-base animate-pulse justify-center items-center font-semibold">
              <div className=" w-20 h-4 rounded-2xl bg-gray-200"></div>
              <span className=" pr-1 text-gray-200 ">{"تومان"}</span>
            </div>
          ) : (
            <>
              <p className=" text-third-500  text-base font-semibold">
                <NumericFormat
                  value={balance?.data?.value.balance}
                  displayType={"text"}
                  className="text-third-500 "
                  thousandSeparator={","}
                />
                <span className=" pr-1">{"تومان"}</span>
              </p>
            </>
          )}
        </div>
      </div>

      <div className=" w-full mt-4">
        <Links />
      </div>
    </div>
  );
}

export default SideBar;
