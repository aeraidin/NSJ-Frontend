"use client"
import React, { useState, useRef } from "react";

interface OTPInputProps {
  length: number;
}

const Otpcode: React.FC<OTPInputProps> = ({ length }) => {
  const [otp, setOTP] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    const newOTP = [...otp];
    newOTP[index] = value;

    setOTP(newOTP);

    // Move to the next input field if a digit is entered
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleInputKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to the previous input field on backspace if the current input is empty
    if (event.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = event.clipboardData.getData("text");
    const pastedDigits = pastedData.split("").filter((char) => /\d/.test(char));
    const newOTP = [...otp];

    pastedDigits.slice(0, length).forEach((digit, index) => {
      newOTP[index] = digit;
    });

    setOTP(newOTP);

    const emptyIndex = newOTP.findIndex((digit) => digit === "");
    if (emptyIndex !== -1 && inputRefs.current[emptyIndex]) {
      inputRefs.current[emptyIndex]?.focus();
    }

    event.preventDefault();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const isDigit = /^\d$/.test(event.key);
    if (!isDigit) {
      event.preventDefault();
    }
  };

  return (
    <div className=" flex-col flex w-full  items-center justify-center max-w-[312px] md:max-w-[380px] gap-y-3">
            <div className="flex justify-center  items-center gap-4 md:gap-5 max-w-[312px] md:max-w-[380px]">
      {otp.map((digit, index) => (
        <input
          className="w-full outline-none text-2xl max-w-[48px] h-14 text-center font-semibold rounded-lg md:max-w-[60px] border border-gray-100"
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onKeyDown={(e) => handleInputKeyDown(index, e)}
          ref={(ref) => (inputRefs.current[index] = ref)}
          onPaste={handlePaste}
          onKeyPress={handleKeyPress}
        />
      ))}
    </div>

    <p className=" font-medium text-sm">TIMER</p>
    </div>
  );
};

export default Otpcode;

