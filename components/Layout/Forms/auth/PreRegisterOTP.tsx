/** @format */

import React, { useEffect, useState } from "react";
import PrimaryBtn from "../../Buttons/PrimaryBtn";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { VerifyManager } from "@/util/api/contribution/Verify";
import OTPCode from "../../Otpcode/OTPCode";
import { useToast } from "../../Alerts/ToastProvider";
function PreRegisterOTP({
  CloseModal,
  phone,
  nationalCode,
}: {
  CloseModal: () => void;
  phone: string;
  nationalCode: string;
}) {
  const [code, setCode] = useState<string>("");
  const router = useRouter();
  const [reset, setReset] = useState(false);
  const [Result, setResult] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    if (reset) {
      setReset(false);
    }
  }, [reset]);
  const Verify = useMutation({
    mutationFn: VerifyManager,
    onSuccess(data, variables, context) {
      router.replace("https://manager.funicket.ir/");
    },
    onError(error, variables, context) {
      CloseModal();
      addToast({ messege: error as any, type: "error", duration: 300 });
    },
  });
  useEffect(() => {
    if (code.length === 5) {
      Verify.mutate({ phone, code, nationalCode });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);
  return (
    <>
      <div className="flex flex-col gap-8">
        <OTPCode
          //   error={LoginOtp.isError}
          otpCode={(e) => setCode(e)}
          length={5}
        />
        <PrimaryBtn
          type="submit"
          onClick={() => {
            Verify.mutate({ code, phone, nationalCode });
          }}
          isloading={Verify.isPending}
          disabled={code?.length < 5 || Verify.isPending}
        >
          تایید
        </PrimaryBtn>
      </div>
    </>
  );
}

export default PreRegisterOTP;
