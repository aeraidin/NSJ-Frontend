/** @format */

"use client";
import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import useClickOutside from "@/util/hook/useClickOutside";
import { AnimatePresence, motion } from "framer-motion";
import { TbCheck } from "react-icons/tb";

interface DropDownType {
  options: { label: string; value: string }[];
  error?: string | undefined;
  placeholder: string;
  onSelect: (value: any) => void;
  initialSelectedValue?: string | null;
  disabled?: boolean;
  SpetialDropDown?: boolean
}

const DropDown: React.FC<DropDownType> = ({
  onSelect,
  options,
  placeholder,
  error,
  initialSelectedValue,
  disabled,
  SpetialDropDown
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [SelectedOpt, setSelectedOpt] = useState(initialSelectedValue);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!SpetialDropDown && selectedIndex === null) {
      setSelectedOpt(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);
  const containerRef = useClickOutside(handleClickOutside);

  return (
    <div ref={containerRef} className="relative inline-block  w-full ">
      <div
        className={` ${error ? " border-red-500 " : "border-gray-100"}  ${isOpen ? " border-gray-100 " : "border-gray-100"
          }   border ${SelectedOpt ? "  text-gray-400" : "text-gray-300"
          } border-gray-50 dark:border-gray-400 text-sm   text-nowrap md:text-base ${SelectedOpt ? "text-gray-300" : "text-gray-300"
          }   select-none  border dark:border-gray-400 text-sm bg-white border-gray-100 focus:border-gray-600 hover:border-gray-300 dark:border-white/10 dark:hover:border-white/25 dark:focus:border-white/45  dark:bg-dark-100  text-nowrap md:text-base  text-gray-300   dark:text-gray-200  duration-200  text-center w-full flex items-center justify-between  outline-none gap-4 rounded-lg font-semibold px-3 py-3 cursor-pointer`}
        onClick={handleToggleDropdown}
      >
        {SelectedOpt || placeholder || "Select a month"}

        <ChevronDownIcon
          className={`w-3 h-3 lg:h-5 lg:w-5 ${isOpen ? "rotate-180" : null
            } duration-200 `}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            exit={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute select-none space-y-1 overflow-y-scroll custom-scrollbar  px-2  py-2 h-fit md:h-fit w-full    bg-white dark:bg-dark-100  mt-2  s rounded-lg shadow-lg z-10"
          >
            {options.map((item: any, index) => (
              <div
                key={index}
                className={`py-3  flex justify-between items-center px-2 ${selectedIndex === index
                  ? "bg-gray-50 dark:bg-white/20"
                  : "bg-none"
                  }  md:py-2  md:pr-6  pr-4 text-gray-400 dark:text-gray-200 text-sm md:text-base text-right cursor-pointer dark:hover:text-gray-25 dark:hover:bg-white/20 hover:bg-gray-50 hover:text-primary-600 rounded-lg duration-150`}
                onClick={(e) => {
                  setSelectedOpt(item.label);
                  setIsOpen(false);
                  SpetialDropDown ? onSelect(item.id) : onSelect(selectedIndex === item.id ? null : item.value);

                  setSelectedIndex((prevIndex) =>
                    prevIndex === index ? null : index
                  );
                }}
              >
                <p className="text-nowrap">{item.label}</p>
                {!SpetialDropDown && selectedIndex === index ? (
                  <TbCheck className=" text-xs md:text-lg text-gray-300" />
                ) : null}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDown;
