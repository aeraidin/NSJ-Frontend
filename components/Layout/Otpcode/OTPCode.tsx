import useMediaQuery from "@/util/hook/useMediaQuery";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";

interface otpProps {
  length: number;
  otpCode: (value: string) => void;
  error?: boolean;
}

function OTPCode({ length, otpCode, error }: otpProps) {
  const [otp, setOtp] = useState("");
  const isTabletOrLarger = useMediaQuery("(min-width: 724px)");

  useEffect(() => {
    // otpCode(otp);
    otpCode(otp);
  }, [otp, otpCode]);
  return (
    <OtpInput
      value={otp}

      inputStyle={{
        // border: "1px solid",
        borderRadius: "8px",
        width: isTabletOrLarger ? "64px" : "46px",
        height: isTabletOrLarger ? "64px" : "46px",
        // borderColor: "#525252",
        caretColor: "#525252",
      }}
      shouldAutoFocus={true}
      renderSeparator={
        <span
          style={{
            fontSize: "7px",
            marginLeft: "8px",
            marginRight: "8px",
          }}
        >
          {" "}
        </span>
      }
      containerStyle={{
        display: "flex",
        flexDirection: "row-reverse",
      }}
      onChange={setOtp}
      numInputs={length}
      renderInput={(props) => (
        <input
          {...props}
          inputMode="decimal"
          type="number"
          className={` ${error ? "error-otp" : "input-otp"
            } rounded-lg text-xl text-gray-600 mx-auto`}
        />
      )}
    />
  );
}

export default OTPCode;
