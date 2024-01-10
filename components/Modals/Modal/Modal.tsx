"use client";
import React from "react";
import { motion } from "framer-motion";
import useClickOutside from "@/util/hook/useClickOutside";
import { useRouter } from "next/navigation";
import { ArrowRight } from "iconsax-react";
interface ModalProps {
  CloseModal: () => void;
  children: React.ReactNode;
  HaveBack?: boolean;
  BackFunction?: () => void;
}

function Modal({ CloseModal, children, BackFunction, HaveBack }: ModalProps) {
  const containerRef = useClickOutside(CloseModal);

  return (
    <div
      className={`flex z-30 w-full h-screen bg-black/70  justify-center items-end  md:items-center  backdrop-blur-[1.5px] fixed left-0 top-0 duration-200`}
    >
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, translateY: 40 }}
        animate={{ opacity: 1, translateY: 0 }}
        className={`min-h-[90%]  md:min-h-[50%] w-full   md:max-w-[532px] px-6 md:px-[76px] md:py-28  flex items-center justify-center    relative rounded-t-[30px] md:rounded-[30px] bg-white`}
      >
        <div
          className={`absolute left-0  top-0 w-full flex items-center ${
            HaveBack ? "justify-between" : "justify-end"
          }`}
        >
          {HaveBack && (
            <button
              className=" w-fit  cursor-pointer flex justify-end p-8 h-fit text-gray-500 hover:text-gray-600 duration-200"
              onClick={BackFunction}
            >
              <ArrowRight size="32" color="#616161" />
            </button>
          )}
          <button
            className=" w-fit  cursor-pointer flex justify-end p-8 h-fit text-gray-500 hover:text-gray-600 duration-200"
            onClick={CloseModal}
          >
            بستن
          </button>
        </div>

        <div className=" w-full h-fit">{children}</div>
      </motion.div>
    </div>
  );
}

export default Modal;
