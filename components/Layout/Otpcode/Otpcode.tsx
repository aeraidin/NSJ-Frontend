"use client";
import CountdownTimer from "@/components/CountDown/CountDownTimer";
import React, { useState, useRef, useEffect } from "react";



interface OTPInputProps {
  length: number;
  timer: number;
  onTimeDone: () => void;
  onOTPChange: (code: string) => void;
}


const Otpcode: React.FC<OTPInputProps> = ({
  length,
  onTimeDone,
  timer,
  onOTPChange,
}) => {

  const [otp, setOTP] = useState<string[]>(new Array(length).fill(""));
  const targetIndexRef = useRef<number | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const handleInputChange = (index: number, value: string) => {
    const newOTP = [...otp];
    newOTP[index] = value;

    setOTP(newOTP);
    if (value && index > 0) {
      // Move to the previous input field if a digit is entered and not the first input
      inputRefs.current[index - 1]?.focus();
    }
  };
  const handleInputKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Move to the previous input field on backspace
    if (event.key === "Backspace" && index >= 0) {
      const newOTP = [...otp];
      newOTP[index] = ""; // Clear the content of the current input
      setOTP(newOTP);
      inputRefs.current[index + 1]?.focus();
    }
  };
  useEffect(() => {
    // Focus on the target index if it's set
    if (
      targetIndexRef.current !== null &&
      inputRefs.current[targetIndexRef.current]
    ) {
      inputRefs.current[targetIndexRef.current]?.focus();
      targetIndexRef.current = null; // Reset the target index
    }

    // Check if all OTP digits are filled and trigger the callback
    const isOtpFilled = otp.every((digit) => digit !== "");
    if (isOtpFilled) {
      const reversedOTP = [...otp].reverse().join(""); // Create a copy, reverse, and join
      onOTPChange(reversedOTP);
    }
  }, [otp, onOTPChange]);

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

    <div className=" flex-col flex w-full  items-center justify-center max-w-[312px] md:max-w-[380px] gap-8">
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

      <CountdownTimer seconds={timer} onTimeout={onTimeDone} />

    </div>
  );
};

export default Otpcode;
