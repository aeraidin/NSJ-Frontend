import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";

interface otpProps {
  length: number;
  otpCode: (value: string) => void;
  error: boolean;
}

function Otp({ length, otpCode, error }: otpProps) {
  const [otp, setOtp] = useState("");

  useEffect(() => {
    // otpCode(otp);
    otpCode(otp);
    console.log(otp);
  }, [otp, otpCode]);
  return (
    <OtpInput
      value={otp}
      inputStyle={{
        // border: "1px solid",
        borderRadius: "8px",
        width: "64px",
        height: "64px",
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
            } rounded-lg text-xl text-gray-600 `}
        />
      )}
    />
  );
}

export default Otp;
