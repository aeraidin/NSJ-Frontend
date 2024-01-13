import React, { useEffect, useState } from "react";
import Otpcode from "../../Otpcode/Otpcode";
import PrimaryBtn from "../../Buttons/PrimaryBtn";
import { useMutation } from "@tanstack/react-query";
import { ResendCode } from "@/util/api/Auth/ResendCode";
import { OtpLogin } from "@/util/api/Auth/OtpLogin";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import CountdownTimer from "@/components/CountDown/CountDownTimer";
function OtpCodeForm({ phone }: { phone: string }) {
  const [CanResend, setCanResend] = useState(true);
  const [code, setCode] = useState<string>("");
  const isRegistered = Cookies.get("isregistered");
  const router = useRouter();
  const [reset, setReset] = useState(false);

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
      if (isRegistered === "true") {
        router.replace("/login/register");
      } else {
        router.replace("/");
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
          reset={reset}
          error={LoginOtp.isError}
          onOTPChange={(e) => setCode(e)}
          length={5}
        />
        <CountdownTimer
          reset={reset}
          initialTime={60}
          onComplete={() => setCanResend(false)}
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
      <p className="text-sm md:text-base text-center mt-6 text-gray-300">
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
