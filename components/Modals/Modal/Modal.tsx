"use client";
import React from "react";
import { motion } from "framer-motion";
import useClickOutside from "@/util/hook/useClickOutside";

interface ModalProps {
  CloseModal: () => void;
  children: React.ReactNode;
}

function Modal({ CloseModal, children }: ModalProps) {
  const containerRef = useClickOutside(CloseModal);

  return (
    <div
      className={`flex z-30 w-full h-screen bg-black/70  justify-center items-end  md:items-center  backdrop-blur-[1.5px] fixed left-0 top-0 duration-200`}
    >
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, translateY: 40 }}
        animate={{ opacity: 1, translateY: 0 }}
        className={`h-[70%] md:min-h-[50%] w-full   md:max-w-[532px] px-6 md:px-[76px]    relative rounded-t-[30px] md:rounded-[30px] bg-white`}
      >
        <button
          className=" w-fit absolute left-0  top-0 cursor-pointer flex justify-end p-8 h-fit text-gray-500 hover:text-gray-600 duration-200"
          onClick={CloseModal}
        >
          بستن
        </button>

        <div className=" w-full h-full">{children}</div>
      </motion.div>
    </div>
  );
}

export default Modal;
