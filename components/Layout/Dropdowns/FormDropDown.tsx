/** @format */

"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import useClickOutside from "@/util/hook/useClickOutside";
import { motion } from "framer-motion";

interface DropDownType {
  options: { name: string; value: string | number }[];
  Haveplaceholder?: boolean;
  error?: string | undefined;
  onSelect: (value: any) => void;
  initialSelectedValue?: string | null;
  disabled?: boolean;
}

const FormDropDown: React.FC<DropDownType> = ({
  onSelect,
  options,
  error,
  initialSelectedValue,
  Haveplaceholder,
  disabled,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOutside = () => {
    setIsOpen(false);
  };
  const containerRef = useClickOutside(handleClickOutside);

  return (
    <div ref={containerRef} className={`relative inline-block w-full `}>
      <div
        className={` ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          } ${error && !disabled
            ? " border-red-500 dark:border-red-400"
            : "border-gray-100 dark:border-white/10 focus:border-gray-600 dark:hover:border-white/25 dark:focus:border-white/45 hover:border-gray-300"
          }  ${isOpen ? " border-gray-100 " : "border-gray-100"
          }   border dark:border-gray-400 text-sm bg-white dark:bg-dark-100  text-nowrap md:text-base text-gray-300 select-none dark:text-gray-200  duration-200  text-center w-full flex items-center justify-between  outline-none rounded-lg font-semibold px-3 py-3 `}
        onClick={() => setIsOpen(!disabled && !isOpen)}
      >
        <p
          className={`${Haveplaceholder
            ? "text-gray-600 dark:text-gray-50"
            : " text-gray-200 dark:text-gray-300"
            }  text-sm`}
        >
          {initialSelectedValue}
        </p>
        <ChevronDownIcon
          className={`w-3 h-3 lg:h-5 lg:w-5 ${isOpen ? "rotate-180" : null
            } duration-200 `}
        />
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute select-none max-h-[200px] overflow-y-scroll custom-scrollbar  px-2  py-2 h-fit md:h-fit w-full bg-white dark:bg-dark-100  mt-2 rounded-lg shadow-lg z-10"
        >
          {options.map((item, index) => (
            <div
              key={index}
              className="py-2 pr-4 text-gray-400 dark:text-gray-200 text-sm md:text-base text-right cursor-pointer dark:hover:text-gray-25 dark:hover:bg-white/20 hover:bg-gray-50 hover:text-primary-600 rounded-lg duration-150"
              onClick={(e) => {
                setIsOpen(false);
                onSelect(item);
              }}
            >
              {item.name}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default FormDropDown;
