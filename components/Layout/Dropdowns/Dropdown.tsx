/** @format */

"use client";
import React, { useEffect, useState } from "react";
import { ArrowDown2 } from "iconsax-react";

import useClickOutside from "@/util/hook/useClickOutside";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
interface DropDownType {
  options: { label: string; value: string }[];
  error?: string | undefined;
  placeholder: string;
  onSelect: (value: any) => void;
  initialSelectedValue?: string | null;
  disabled?: boolean;
  SpetialDropDown?: boolean;
  isHeader?: boolean;
}

const DropDown: React.FC<DropDownType> = ({
  onSelect,
  options,
  isHeader,
  placeholder,
  error,
  initialSelectedValue,
  disabled,
  SpetialDropDown,
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
        className={` ${error ? " border-red-500 " : "border-gray-100"}  ${
          isOpen ? " border-gray-100 " : "border-gray-100"
        }   ${isHeader ? "border-none" : "border"} ${
          SelectedOpt ? "  text-gray-400" : "text-gray-300"
        } border-gray-50  text-sm   text-nowrap md:text-base ${
          SelectedOpt ? "text-gray-300" : "text-gray-300"
        }   select-none    text-sm bg-white border-gray-100 focus:border-gray-600 hover:border-gray-300  text-nowrap md:text-base  text-gray-300 duration-200  text-center w-full flex items-center justify-between  outline-none gap-4 rounded-lg font-semibold px-3 ${
          isHeader ? "py-2" : "py-3"
        } cursor-pointer`}
        onClick={handleToggleDropdown}
      >
        {SelectedOpt || placeholder || "Select a month"}

        <ArrowDown2
          className={`${isOpen ? "rotate-180" : null} duration-200 `}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            exit={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute select-none space-y-1 overflow-y-scroll custom-scrollbar  px-2  py-2 h-fit md:h-fit w-fit bg-white  mt-2 rounded-lg shadow-lg z-10"
          >
            {options.map((item: any, index) => (
              <div
                key={index}
                className={`py-3  flex justify-between  items-center px-2 ${
                  selectedIndex === index ? "bg-gray-50" : "bg-none"
                }  md:py-2  md:pr-6   pr-2 text-gray-400 text-sm md:text-base text-right cursor-pointer hover:bg-gray-50 hover:text-primary-600 rounded-lg duration-150`}
                onClick={(e) => {
                  setSelectedOpt(item.label);
                  setIsOpen(false);
                  SpetialDropDown
                    ? onSelect(item.id)
                    : onSelect(selectedIndex === item.id ? null : item.value);

                  setSelectedIndex((prevIndex) =>
                    prevIndex === index ? null : index
                  );
                }}
              >
                <p className="text-nowrap">{item.label}</p>
                {!SpetialDropDown && selectedIndex === index ? (
                  <Image
                    width={16}
                    height={16}
                    src={"/Icons/check.svg"}
                    alt="icon"
                  />
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
