"use client";
import LoginForm from "@/components/Layout/Forms/auth/LoginForm";
import OtpCodeForm from "@/components/Layout/Forms/auth/OtpCodeForm";
import React, { useState } from "react";
import Modal from "../Modal";

function LoginModal({ CloseModal }: { CloseModal: () => void }) {
  const [phoneNumber, setphoneNumber] = useState<null | string>(null);

  return (
    <Modal
      CloseModal={CloseModal}
      HaveBack={phoneNumber ? true : false}
      BackFunction={() => setphoneNumber(null)}
    >
      <div className="w-full h-fit flex items-center justify-center">
        <div className="w-full max-w-[380px]  flex flex-col gap-6 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl">
              {phoneNumber ? "کد تایید را وارد کنید" : "ورود | ثبت نام"}
            </h1>
            <p className="text-sm md:text-base text-gray-400">
              {phoneNumber
                ? `کد  به شماره ${phoneNumber} ارسال شد`
                : "شماره موبایل خود را وارد کنید"}
            </p>
          </div>
          <div>
            {phoneNumber ? (
              <OtpCodeForm phone={phoneNumber} />
            ) : (
              <LoginForm PhoneNumber={(e) => setphoneNumber(e)} />
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default LoginModal;
