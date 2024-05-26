/** @format */

"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Add, ArrowRight } from "iconsax-react";
import useClickOutside from "@/util/hook/useClickOutside";
interface ModalProps {
  CloseModal: () => void;
  children: React.ReactNode;
  HaveBack?: boolean;
  BackFunction?: () => void;
  CloseIcon?: boolean;
  State: boolean;
}

function Modal({
  CloseModal,
  children,
  BackFunction,
  HaveBack,
  CloseIcon,
  State,
}: ModalProps) {
  const containerRef = useClickOutside(CloseModal);
  const variants = {
    visible: { opacity: 1, translateY: 0, transition: { delay: 0.3 } },
    hidden: { opacity: 0, translateY: 80 },
  };
  const Backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <AnimatePresence>
      {State && (
        <motion.div
          variants={Backdrop}
          initial="hidden"
          animate="visible"
          exit={"hidden"}
          className={`flex z-50 w-full h-screen bg-black/70  justify-center items-end  md:items-center  backdrop-blur-[1.5px] fixed left-0 top-0 duration-200`}
        >
          <motion.div
            ref={containerRef}
            variants={variants}
            className={`min-h-[90%]  md:min-h-[50%] lg:min-h-0 w-full  md:max-w-[532px] py-6 px-6 md:px-[76px] md:py-24  flex items-center justify-center relative rounded-2xl md:rounded-2xl bg-white `}
          >
            <div
              className={`absolute left-0  top-0 w-full flex items-center ${
                HaveBack ? "justify-between" : "justify-end"
              }`}
            >
              {HaveBack && (
                <button
                  className="w-fit cursor-pointer flex justify-end p-8 h-fit text-gray-300 hover:text-gray-600 duration-150"
                  onClick={BackFunction}
                >
                  <ArrowRight size="32" color="#616161" />
                </button>
              )}
              <button
                className=" w-fit  cursor-pointer flex justify-end m-8 h-fit text-gray-300 hover:text-gray-600 duration-150"
                onClick={CloseModal}
              >
                {CloseIcon ? <Add size="32" className="rotate-45" /> : "بستن"}
              </button>
            </div>

            <div className="w-full h-fit">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
