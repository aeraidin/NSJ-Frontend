/** @format */
"use client";
import React, { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface captchaProps {
  onChange: (value: boolean) => void;
  reset?: boolean;
  value?: any;
}

const Captcha = ({ onChange, value, reset }: captchaProps) => {
  const [token, setToken] = useState(null);
  const [verified, setVerified] = useState(false);
  const hCaptchaRef = useRef<HCaptcha>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (verified) {
      // Handle form submission
      console.log("Form submitted");
    } else {
      console.log("Please complete the hCaptcha");
    }
  };

  const handleReset = () => {
    if (hCaptchaRef.current) {
      hCaptchaRef.current.resetCaptcha();
      setToken(null);
      setVerified(false);
    }
  };

  useEffect(() => {
    onChange(verified);
  }, [onChange, verified]);

  useEffect(() => {
    if (reset) {
      handleReset();
    }
  }, [reset]);

  const handleVerificationSuccess = (token: any) => {
    setToken(token);
    setVerified(true);
  };

  return (
    <div className=" w-full h-full">
      <HCaptcha
        sitekey="406ca838-189a-4754-b3e0-ccd23ea2e9de"
        onVerify={handleVerificationSuccess}
        ref={hCaptchaRef}
        languageOverride="fa"
        size="normal"
        theme={"light"}
      />
    </div>
  );
};

export default Captcha;
