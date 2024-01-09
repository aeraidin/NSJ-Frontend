"use client";
import React, { useEffect, useState } from "react";
import Otpcode from "../../Otpcode/Otpcode";
import PrimaryBtn from "../../Buttons/PrimaryBtn";
import { useMutation } from "@tanstack/react-query";
import { ResendCode } from "@/util/api/Auth/ResendCode";
import { OtpLogin } from "@/util/api/Auth/OtpLogin";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function OtpCodeForm({ phone }: { phone: string }) {
  const [CanResend, setCanResend] = useState(true);
  const [code, setcode] = useState<string>("");
  const [Reset, setReset] = useState(false);
  const [Timer, setTimer] = useState(10);
  const isRegisterd = Cookies.get("isregisterd");

  const resetTimeHandler = () => {
    setTimer(10);
    setCanResend(false);
  };

  const router = useRouter();
  const RsendCode = useMutation({
    mutationFn: ResendCode,
    onSettled(data, error, variables, context) {
      setCanResend(true);
      setReset(true);
      setcode("");
    },
  });
  const LoginOtp = useMutation({
    mutationFn: OtpLogin,
    onSuccess(data) {
      console.log(data);

      if (isRegisterd === "true") {
        router.replace("/");
      } else {
        router.replace("/login/register");
      }
    },
    onError(error, variables, context) {
      console.log(error.message);
    },
  });

  return (
    <>
      <div className="flex flex-col gap-8">
        <Otpcode
          error={LoginOtp.isError}
          onOTPChange={(e) => setcode(e)}
          length={5}
          reset={Reset}
          timer={Timer}
          onTimeDone={resetTimeHandler}
        />
        <PrimaryBtn
          type="submit"
          onClick={() => {
            LoginOtp.mutate({ code: code, phone: phone });
          }}
          isloading={LoginOtp.isPending}
          disabled={
            code?.length < 5 || RsendCode.isPending || LoginOtp.isPending
          }
        >
          تایید
        </PrimaryBtn>
      </div>
      <p className="text-center mt-6 text-gray-300">
        کد را دریافت نکرده اید؟
        <button
          disabled={CanResend}
          onClick={() => RsendCode.mutate(phone)}
          className={`disabled:text-gray-300 text-[#1D1D1D] disabled:cursor-not-allowed`}
        >
          ارسال مجدد کد
        </button>
      </p>
      <p className="text-error-500">
        {LoginOtp.isError && LoginOtp.error.message}
      </p>
    </>
  );
}

export default OtpCodeForm;
