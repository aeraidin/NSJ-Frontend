/** @format */

"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  Add,
  CloseCircle,
  Danger,
  InfoCircle,
  Key,
  TickCircle,
} from "iconsax-react";
import React, { useEffect, useState } from "react";

interface toastProps {
  isSuccess?: boolean;
  isError?: boolean;
  isWarning?: boolean;
  isNotif?: boolean;
  Result: boolean;
  Close: () => void;
  messege: string | undefined;
}

function Toast(props: toastProps) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      props.Close();
    }, 8000);
    return () => clearTimeout(timeoutId);
  });

  const variants = {
    open: { opacity: 1, right: "3%" },
    closed: { opacity: 0, right: "-10%" },
  };

  return (
    <>
      <AnimatePresence>
        {props.Result &&
          <motion.div
            initial="closed"
            animate="open" exit={"closed"}
            variants={variants}
            transition={{ duration: .4 }}

            className={`fixed top-8 flex w-full max-w-[370px] h-full max-h-[84px] z-50`}
          >
            <div
              className={` w-full flex bg-white  shadow-md h-full  z-50 rounded-[10px]`}
            >
              <button
                onClick={props.Close}
                className=" cursor-pointer w-fit h-fit hover:text-gray-400 duration-200  p-3 text-gray-200"
              >
                <Add size="24" className="rotate-45" />
              </button>

              <div className=" h-full w-full flex justify-end gap-x-3 ml-3  items-center ">
                <div className=" text-left w-fit ">
                  <p
                    className={`text-base  font-bold
            ${props.isNotif
                        ? "text-third-600"
                        : props.isSuccess
                          ? "text-success-600"
                          : props.isError
                            ? "text-error-600"
                            : props.isWarning
                              ? "text-secondary-600"
                              : null
                      }
            `}
                  >
                    {props.isError
                      ? "خطا"
                      : props.isWarning
                        ? "اخطار"
                        : props.isSuccess
                          ? "موفقیت آمیز "
                          : props.isNotif
                            ? "اعلان"
                            : null}
                  </p>
                  <p className={`text-sm font-light `}>
                    {(typeof props.messege) === "string" ? props.messege : "خطای اینترنت"}
                  </p>
                </div>
                <div>
                  {props.isWarning ? (
                    <Danger variant={"Bold"} size={32} color="#FEB92E" />
                  ) : null}

                  {props.isError ? (
                    <CloseCircle variant={"Bold"} size={32} color="#FD504F" />
                  ) : null}

                  {props.isSuccess ? (
                    <TickCircle variant={"Bold"} size={32} color="#37C976" />
                  ) : null}

                  {props.isNotif ? (
                    <InfoCircle variant={"Bold"} size={32} color="#4F98CA" />
                  ) : null}
                </div>
              </div>

              <div
                className={`h-full w-3 rounded-tl-lg rounded-bl-lg 
        ${props.isNotif ? "bg-third-600" : null}
        ${props.isSuccess ? "bg-success-600" : null}
        ${props.isWarning ? "bg-secondary-600" : null}
         ${props.isError ? "bg-error-600" : null}`}
              ></div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>
  );
}

export default Toast;
