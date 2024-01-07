import { BtnProps } from "@/util/types/type";
import React from "react";

function PrimaryBtn({ children, ...props }: BtnProps) {
  return (
    <button
      className=" disabled:bg-gray-200  flex items-center justify-center gap-2  select-none focus:bg-primary-500 w-full p-3 duration-200 rounded-lg font-semibold hover:bg-primary-400 bg-primary-600 text-white text-sm lg:text-base"
      {...props}
    >
      {children}
    </button>
  );
}
6;
export default PrimaryBtn;
