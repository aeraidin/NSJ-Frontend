"use client";
import React, { useState } from "react";

interface RadioBtnProps {
  onChange?: (value: boolean | string) => void;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  label?: string;
}

function RadioButton({
  onChange,
  checked,
  disabled,
  error,
  label,
}: RadioBtnProps) {
  const toggleHandler = () => {
    if (!disabled) {
      onChange && onChange(!checked);
    }
    if (error) {
      onChange && onChange("Error");
    }
  };

  return (
    <div onClick={toggleHandler} className=" flex cursor-pointer group gap-4 ">
      <div
        className={`${disabled ? "cursor-not-allowed " : "cursor-pointer"} ${
          error ? " bg-error-300 border border-error-500" : null
        }  rounded-full w-5 h-5 flex justify-center items-center bg-white dark:bg-dark-100 border duration-150  ${
          checked
            ? "dark:border-white/45 border-gray-600"
            : "focus:border-gray-600 hover:border-gray-300 dark:border-white/10 dark:hover:border-white/25 dark:focus:border-white/45  border-gray-100 "
        }`}
      >
        <div
          className={`w-[10px] h-[10px] ${
            checked ? "opacity-100" : "opacity-0"
          } duration-150  ${
            error ? "bg-error-500" : "bg-primary-600 dark:bg-secondary-600"
          }  rounded-full `}
        ></div>
      </div>
      <label className="text-base group-hover:cursor-pointer select-none">
        {label}
      </label>
    </div>
  );
}

export default RadioButton;
