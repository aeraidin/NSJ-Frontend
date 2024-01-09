"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import useClickOutside from "@/util/hook/useClickOutside";
import { motion } from "framer-motion";

interface DropDownType {
  options: { label: string; value: string }[];
  error: string | undefined;
  placeholder: string;
  onSelect: (value: any) => void;
  initialSelectedValue?: string | null;
  disabled?: boolean;
}

const DropDown: React.FC<DropDownType> = ({
  onSelect,
  options,
  placeholder,
  error,
  initialSelectedValue,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [SelectedOpt, setSelectedOpt] = useState(initialSelectedValue);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };
  const containerRef = useClickOutside(handleClickOutside);

  return (
    <div
      ref={containerRef}
      className="relative inline-block w-full max-w-[120px]"
    >
      <div
        className={` ${error ? " border-red-500 " : "border-gray-100"}  ${
          isOpen ? " border-gray-600" : "border-gray-100"
        }   border ${
          SelectedOpt ? " text-gray-600" : "text-gray-300"
        } border-gray-100 text-sm md:text-base   select-none text-gray-300 hover:border-gray-600 duration-200  text-center w-full flex items-center justify-between  outline-none rounded-lg font-semibold px-3 py-2 cursor-pointer`}
        onClick={handleToggleDropdown}
      >
        {SelectedOpt || placeholder || "Select a month"}

        <ChevronDownIcon
          className={`w-3 h-3 lg:h-5 lg:w-5 ${
            isOpen ? "rotate-180" : null
          } duration-200 `}
        />
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute select-none overflow-y-scroll custom-scrollbar  px-2  py-1 h-[180px] md:h-[265px] w-full max-w-[120px]   bg-white  mt-2  border border-gray-300 rounded-md shadow-lg z-10"
        >
          {options.map((item, index) => (
            <div
              key={index}
              className="py-1  md:pr-2 pr-4 text-sm md:text-base text-right cursor-pointer hover:bg-primary-600 hover:text-white rounded duration-150"
              onClick={(e) => {
                setSelectedOpt(item.label);
                setIsOpen(false);
                onSelect(item.value);
              }}
            >
              {item.label}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default DropDown;
