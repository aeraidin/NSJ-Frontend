"use client";
import LoginForm from "@/components/Layout/Forms/auth/LoginForm";
import OtpCodeForm from "@/components/Layout/Forms/auth/OtpCodeForm";
import { ArrowRight } from "iconsax-react";
import React, { useState } from "react";

function Page() {
  const [phoneNumber, setphoneNumber] = useState<null | string>(null);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {phoneNumber && (
        <button
          className=" absolute top-[10px] right-[0px] lg:-top-[10px] lg:right-[24px] xl:top-[40px] xl:right-[32px] w-fit  items-center gap-2  cursor-pointer flex justify-end h-fit text-gray-500 hover:text-gray-600 duration-200 group"
          onClick={() => setphoneNumber(null)}
        >
          <ArrowRight
            size="32"
            color="#616161"
            className="group-hover:translate-x-2 duration-150"
          />
          <span>مرحله قبل</span>
        </button>
      )}
      <div className="w-full max-w-[380px]  flex flex-col gap-6 ">
        <h1 className="text-xl md:text-2xl ">سلام! به اسپورتیکت خوش آمدید.</h1>
        <div className="flex flex-col gap-4">
          <p className="text-2xl md:text-3xl">
            {" "}
            {phoneNumber ? "کد تایید را وارد کنید" : "ورود | ثبت نام"}
          </p>
          <p className="text-sm md:text-base text-gray-400">
            {phoneNumber
              ? `کد  به شماره ${phoneNumber} ارسال شد`
              : "شماره موبایل خود را وارد کنید"}
          </p>
        </div>
        <div>
          {phoneNumber ? (
            <OtpCodeForm phone={phoneNumber} />
          ) : (
            <LoginForm PhoneNumber={(e) => setphoneNumber(e)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
