/** @format */
"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import wallet1 from "@/public/profile/wallet1.png";
import { NumericFormat } from "react-number-format";
import useGetBalance from "@/util/hook/Wallet/useGetBalance";
import IncreaseWallet from "@/components/Layout/Forms/Wallet/IncreaseWallet";
import { motion } from "framer-motion";
import Link from "next/link";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { ArrowRight } from "iconsax-react";
function Page() {
  const balance = useGetBalance();
  console.log(balance);
  const token = Cookies.get("token");
  useEffect(() => {
    if (!token) {
      redirect("/login");
    }
  }, [token]);
  return (
    <div className=" w-full px-4">
      <Link href={"/profile"} className=" gap-x-2 mb-9 lg:hidden flex">
        <ArrowRight className=" text-gray-500" />
        <p className=" text-sm  text-gray-600">بازگشت</p>
      </Link>
      <p className=" text-lg text-gray-600">کیف پول</p>
      <div className=" w-full items-center">
        <div className=" max-w-[843px]  mt-10 h-[157px] lg:h-[229px]  w-full bg-gray-25 rounded-[34px]">
          <div className=" justify-center h-full px-[100px] items-start flex gap-y-7 flex-col">
            <p className=" text-xs lg:text-[20px] select-none  font-semibold text-gray-400">
              موجودی کیف پول شما
            </p>
            {balance.isPending ? (
              <span className=" select-none flex justify-center items-center text-base  lg:text-[40px] text-primary-600 font-bold">
                <div className=" w-48  h-8 animate-pulse rounded-2xl bg-gray-200"></div>

                <span className=" select-none mr-1 lg:mr-4 text-sm lg:text-[20px] text-gray-200 font-semibold">
                  تومان
                </span>
              </span>
            ) : (
              <>
                <span className=" select-none text-base  lg:text-[40px] text-primary-600 font-bold">
                  <NumericFormat
                    value={balance?.data?.value.balance}
                    displayType={"text"}
                    className="text-primary-600 "
                    thousandSeparator={","}
                  />
                  <span className=" select-none mr-1 lg:mr-4 text-sm lg:text-[20px] text-gray-200 font-semibold">
                    تومان
                  </span>
                </span>
              </>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className=" absolute top-28 lg:top-52 w-[187px] h-[190px] lg:w-[335px] left-6 lg:left-72 lg:h-[340px]"
          >
            <Image src={wallet1} alt="wallet1" fill sizes="90vw" />
          </motion.button>
        </div>

        <div className=" w-full flex justify-center items-center flex-col">
          <p className=" text-gray-600 text-center mt-[30px] text-sm lg:text-[20px] font-semibold">
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
