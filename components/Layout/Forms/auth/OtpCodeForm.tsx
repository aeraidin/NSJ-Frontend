/** @format */

import React, { useCallback, useEffect, useState } from "react";
import PrimaryBtn from "../../Buttons/PrimaryBtn";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ResendCode } from "@/util/api/Auth/ResendCode";
import { OtpLogin } from "@/util/api/Auth/OtpLogin";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import CountdownTimer from "@/components/Layout/CountDown/CountDownTimer";
import Toast from "../../Alerts/Toast";
import OTPCode from "../../Otpcode/OTPCode";

function OtpCodeForm({
  phone,
  CloseModal,
  inModal,
}: {
  phone: string;
  CloseModal?: () => void;
  inModal?: boolean;
}) {
  const [CanResend, setCanResend] = useState(true);
  const [code, setCode] = useState<string>("");
  const isNew = Cookies.get("isNew");
  const router = useRouter();
  const [reset, setReset] = useState(false);
  const [result, setResult] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (reset) {
      setReset(false);
    }
  }, [reset]);
  const RsendCode = useMutation({
    mutationFn: ResendCode,
    onSettled(data, error, variables, context) {
      setCanResend(true);
      setCode("");
      setReset(true);
    },
  });

  const LoginOtp = useMutation({
    mutationFn: OtpLogin,
    onSuccess(data) {
      setResult(true);
      queryClient.invalidateQueries();
      setTimeout(() => {
        if (isNew === "true") {
          router.replace("/login/register");
        } else {
          if (inModal) {
            CloseModal && CloseModal();
          } else {
            router.replace("/");
          }
        }
      }, 3000);
    },
    onError(error, variables, context) {
      setResult(true);
    },
  });

  const handlerOtp = useCallback(() => {
    LoginOtp.mutate({ code: code, phone: phone });
  }, [code, phone, LoginOtp]);

  useEffect(() => {
    if (code.length === 5) {
      handlerOtp();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code.length]);

  return (
    <>
      <Toast
        messege={
          LoginOtp.error
            ? (LoginOtp.error as unknown as string)
            : "ورود با موفقیت انجام شد"
        }
        Close={() => setResult(false)}
        isError={LoginOtp.isError}
        isSuccess={LoginOtp.isSuccess}
        Result={result}
      />
      <div className="flex flex-col gap-8">
        <OTPCode
          error={LoginOtp.isError}
          otpCode={(e) => setCode(e)}
          length={5}
        />

        <CountdownTimer
          reset={reset}
          initialTime={60}
          onComplete={() => setCanResend(false)}
        />
        <PrimaryBtn
          type="submit"
          onClick={handlerOtp}
          isloading={LoginOtp.isPending}
          disabled={
            code?.length < 5 || RsendCode.isPending || LoginOtp.isPending
          }
        >
          تایید
        </PrimaryBtn>
      </div>
      <p className="text-sm  text-center mt-6 text-gray-300">
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
