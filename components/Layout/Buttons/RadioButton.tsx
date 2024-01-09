"use client";
import React, { useState } from "react";

interface RadioBtnProps {
  onChange: (value: boolean | string) => void;
  checked: boolean;
  disabled: boolean;
  error?: boolean;
  label: string;
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
      onChange(!checked);
    }
    if (error) {
      onChange("Error");
    }
  };

  return (
    <div onClick={toggleHandler} className=" flex cursor-pointer group ">
      <label className="text-base px-3 group-hover:cursor-pointer select-none">
        {label}
      </label>

      <div
        className={`${disabled ? "cursor-not-allowed " : "cursor-pointer"} ${
          error ? " bg-red-300 border border-red-500" : null
        }  rounded-full w-5 h-5 flex justify-center items-center bg-white border border-gray-100`}
      >
        <div
          className={`w-[10px] h-[10px] ${
            checked ? "opacity-100" : "opacity-0"
          } duration-150  ${
            error ? "bg-red-500" : "bg-primary-600"
          }  rounded-full `}
        ></div>

        {disabled ? (
          <div className=" w-3 h-3 bg-gray-300 rounded-full"></div>
        ) : null}
      </div>
    </div>
  );
}

export default RadioButton;
