"use client";
import React, { useState } from "react";

interface RadioBtnProps {
  onChange: (value: boolean | string) => void;
  checked: boolean;
  disabled: boolean;
  error: boolean;
}

function RadioButton({ onChange, checked, disabled, error }: RadioBtnProps) {
  const toggleHandler = () => {
    if (!disabled) {
      onChange(!checked);
    }
    if (error) {
      onChange('Error');
    }
  };

  return (
    <div
      onClick={toggleHandler}
      className={`${
        disabled ? "cursor-not-allowed " : "cursor-pointer"
      } ${error ? " bg-red-300 border border-red-500" : null} rounded-full w-5 h-5 flex justify-center items-center bg-white border border-gray-100`}
    >
      {checked ? (
        <div
          className={`w-3 h-3 ${
            error ? "bg-red-500" : "bg-black"
          }  rounded-full `}
        ></div>
      ) : null}
      {disabled ? (
        <div className=" w-3 h-3 bg-gray-300 rounded-full"></div>
      ) : null}
    </div>
  );
}

export default RadioButton;
