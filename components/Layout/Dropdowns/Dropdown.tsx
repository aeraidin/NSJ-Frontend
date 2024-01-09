"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface PersianMonthDropdownProps {
  onSelectDay: (day: string) => void;
  options: { label: string; value: string }[]; // Update the type
  placeholder?: string;
}

const PersianMonthDropdown: React.FC<PersianMonthDropdownProps> = ({
  onSelectDay,
  options,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<string | undefined>(
    undefined
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleOptionClick = (option: string, value: string) => {
    setSelectedMonth(option);
    onSelectDay(value);
    setIsOpen(false);
  };

  //   const handleDocumentClick = (event: MouseEvent) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
  //       setIsOpen(false);
  //     }
  //   };

  return (
    <div className="relative inline-block w-full max-w-[120px]">
      <div
        className={` ${isOpen ? ' border-gray-600':'border-gray-100'}   border ${selectedMonth ? ' text-gray-600' : 'text-gray-300'} border-gray-100   select-none text-gray-300 hover:border-gray-600 duration-200 text-base  text-center w-full flex justify-between  outline-none rounded-lg font-semibold px-3 py-2 cursor-pointer`}
        onClick={handleToggleDropdown}
      >
        {selectedMonth || placeholder || "Select a month"}

        <ChevronDownIcon
          className={` h-5 w-5 ${isOpen ? "rotate-180" : null} duration-200 `}
        />
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute select-none overflow-y-scroll custom-scrollbar px-4 md:px-2 py-1 h-[180px] md:h-[265px] w-full max-w-[120px]   bg-white  mt-2  border border-gray-300 rounded-md shadow-lg z-10"
        >
          {options.map(
            (option: { label: string; value: string }, index: number) => (
              <div
                key={index + 1}
                className="px-4 py-1 text-sm text-right cursor-pointer hover:bg-primary-600 hover:text-white rounded"
                onClick={() => handleOptionClick(option.label, option.value)}
              >
                {option.label}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default PersianMonthDropdown;
