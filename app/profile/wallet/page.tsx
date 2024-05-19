/** @format */
"use client";
import Image from "next/image";
import React from "react";
import wallet1 from "@/public/profile/wallet1.png";
import { NumericFormat } from "react-number-format";
import useGetBalance from "@/util/hook/Wallet/useGetBalance";
import IncreaseWallet from "@/components/Layout/Forms/Wallet/IncreaseWallet";
import { motion } from "framer-motion";
function Page() {
  const balance = useGetBalance();
  console.log(balance);

  return (
    <div className=" w-full">
      <p className=" text-lg text-gray-600">کیف پول</p>
      <div className=" w-full items-center">
        <div className=" max-w-[843px]  mt-10 h-[229px]  w-full bg-gray-25 rounded-[34px]">
          <div className=" justify-center h-full px-[100px] items-start flex gap-y-7 flex-col">
            <p className=" text-[20px] select-none  font-semibold text-gray-400">
              موجودی کیف پول شما
            </p>
            <span className=" select-none text-[40px] text-primary-600 font-bold">
              <NumericFormat
                value={balance?.data?.value.balance}
                displayType={"text"}
                className="text-primary-600 "
                thousandSeparator={","}
              />
              <span className=" select-none  mr-4 text-[20px] text-gray-200 font-semibold">
                تومان
              </span>
            </span>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className=" absolute top-52 w-[335px] left-72 h-[340px]"
          >
            <Image src={wallet1} alt="wallet1" fill sizes="90vw" />
          </motion.button>
        </div>

        <div className=" w-full flex justify-center items-center flex-col">
          <p className=" text-gray-600 text-center mt-[30px] text-[20px] font-semibold">
            افزایش موجودی کیف پول از طریق پرداخت آنلاین
          </p>

          <div className=" w-full max-w-[428px] mt-7 flex justify-center items-center ">
            <IncreaseWallet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
