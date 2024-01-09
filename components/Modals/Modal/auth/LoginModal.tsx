"use client";
import LoginForm from "@/components/Layout/Forms/auth/LoginForm";
import OtpCodeForm from "@/components/Layout/Forms/auth/OtpCodeForm";
import React, { useState } from "react";

function LoginModal() {
  const [phoneNumber, setphoneNumber] = useState<null | string>(null);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[380px]  flex flex-col gap-6 ">
        <div className="flex flex-col gap-4">
          <p className="text-3xl">
            {" "}
            {phoneNumber ? "کد تایید را وارد کنید" : "ورود | ثبت نام"}
          </p>
          <p className="text-gray-400">
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

export default LoginModal;
