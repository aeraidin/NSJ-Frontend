"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Danger, TickCircle } from "iconsax-react";

export type ToastType = "success" | "error" | "warning" | "notif";
export type IToast = {
  type: ToastType;
  duration: number;
  close: () => void;
  messege: string | undefined;
  haveButton?: boolean;
  buttonText?: string;
  onClickButton?: () => void;
  withoutIcon?: boolean;
};

function Toast({
  close,
  messege,
  buttonText,
  haveButton,
  type,
  onClickButton,
  withoutIcon,
  duration,
}: IToast) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      close();
    }, 3000);
    return () => clearTimeout(timeoutId);
  });

  const variants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0.7 },
  };

  return (
    <AnimatePresence>
      <motion.div
        key={messege}
        initial="closed"
        animate="open"
        exit={"closed"}
        variants={variants}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 40,
        }}
        className={` flex w-full max-w-[370px] h-fit  z-50`}
      >
        <div
          className={`w-full p-[10px]  rounded-2xl border border-transparent shadow-xl ${
            type === "success"
              ? "bg-success-600 shadow-success-600/20 "
              : type === "warning"
              ? "bg-secondary-600 shadow-secondary-600/20"
              : type === "notif"
              ? "bg-white !border-strokeColor"
              : "bg-error-600 shadow-error-600/20"
          }`}
        >
          <div className="w-full  flex items-start gap-2 justify-between">
            <div className="flex items-center gap-3">
              {!withoutIcon && (
                <div
                  className={`p-2 rounded-full ${
                    type === "success"
                      ? "bg-success-100 text-success-600"
                      : type === "warning"
                      ? "bg-secondary-100 text-secondary-600"
                      : type === "notif"
                      ? "bg-white !border-strokeColor "
                      : "bg-error-100 text-error-600"
                  }`}
                >
                  {type === "success" ? (
                    <TickCircle size="18" />
                  ) : type === "warning" || type === "error" ? (
                    <Danger size="18" />
                  ) : type === "notif" ? (
                    <Image
                      src={"/icons/Info.svg"}
                      alt="Icon"
                      width={18}
                      height={18}
                    />
                  ) : (
                    ""
                  )}
                </div>
              )}
              <div>
                <p
                  className={`text-sm ${
                    type === "success" || type === "error"
                      ? "text-white"
                      : "text-gray-600"
                  }`}
                >
                  {messege}
                </p>
              </div>
            </div>
            <button onClick={close}>
              <Image
                src={
                  type === "success"
                    ? "/icons/close/WhiteClose.svg"
                    : type === "error"
                    ? "/icons/close/RedClose.svg"
                    : type === "notif"
                    ? "/icons/close/InfoClose.svg"
                    : type === "warning"
                    ? "/icons/close/WarningClose.svg"
                    : "/icons/close/WhiteClose.svg"
                }
                width={28}
                height={28}
                alt="Close"
              />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Toast;
