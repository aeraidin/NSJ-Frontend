"use client";
import React, { useEffect, useState } from "react";
import Otpcode from "../../Otpcode/Otpcode";
import PrimaryBtn from "../../Buttons/PrimaryBtn";

function OtpCodeForm() {
  const [CanResend, setCanResend] = useState(true);
  const [code, setcode] = useState<string | null>(null);

  useEffect(() => {
    console.log(code);
    
  },[code])
  const submitHandler = (value:any) => {
    setcode(value)
    console.log("Submit Code" + value);
  }

  
  return (
    <>
      <div className="flex flex-col gap-8">
        <Otpcode
          onSubmit={(e) => submitHandler(e)}
          onOTPChange={(e) => setcode(e)}
          length={5}
          timer={10}
          onTimeDone={() => setCanResend(false)}
        />
        <PrimaryBtn >تایید</PrimaryBtn>
      </div>
      <p className="text-center mt-6 text-gray-300">
        کد را دریافت نکرده اید؟
        <button
          disabled={CanResend}
          onClick={() => setCanResend(true)}
          className={`disabled:text-gray-300 text-[#1D1D1D] disabled:cursor-not-allowed`}
        >
          ارسال مجدد کد
        </button>
      </p>
    </>
  );
}

export default OtpCodeForm;
