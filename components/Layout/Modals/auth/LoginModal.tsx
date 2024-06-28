"use client";
import LoginForm from "@/components/Layout/Forms/auth/LoginForm";
import OtpCodeForm from "@/components/Layout/Forms/auth/OtpCodeForm";
import React, { useState } from "react";
import Modal from "../Modal";
import Image from "next/image";

function LoginModal({ CloseModal, State }: { State: boolean, CloseModal: () => void }) {
  const [phoneNumber, setphoneNumber] = useState<null | string>(null);

  return (
    <Modal
      State={State}
      CloseModal={CloseModal}
      HaveBack={phoneNumber ? true : false}
      BackFunction={() => setphoneNumber(null)}
    >
      <div className="w-full h-fit flex items-center justify-center">
        <div className="w-full max-w-[380px]  flex flex-col gap-6 ">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div
                className="relative w-[40px] h-[78px]">
                <Image src={"/Icons/Logo.svg"} fill alt="Logo" sizes="90vw" />
              </div>
              <div className="relative  w-[160px] h-[55px]">
                <Image src={"/Icons/LogoFont.svg"} fill alt="Logo" sizes="90vw" />
              </div>
            </div>
            <h1>
              {phoneNumber ? "کد تایید را وارد کنید" : "ورود | ثبت نام"}
            </h1>
            <h5 className="text-sm  text-gray-400">
              {phoneNumber
                ? `کد  به شماره ${phoneNumber} ارسال شد`
                : "شماره موبایل خود را وارد کنید"}
            </h5>
          </div>
          <div>
            {phoneNumber ? (
              <OtpCodeForm inModal CloseModal={CloseModal} phone={phoneNumber} />
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
