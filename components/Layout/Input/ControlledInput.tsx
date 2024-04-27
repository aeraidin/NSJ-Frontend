/** @format */

"use client";

import React, { useState, useEffect } from "react";
import {
  FieldValues,
  Path,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

import Image from "next/image";
import { Eye, EyeSlash } from "iconsax-react";

type InputProps<T extends FieldValues> = {
  label?: string;
  id: Path<T>;
  type?: string;
  register?: UseFormRegister<T>;
  watch?: UseFormWatch<T>;
  setValue?: any;
  required?: boolean;
  error: string | undefined;
  PlaceHolder?: string;
  length?: number;
  disabled?: boolean;
  onChange?: () => void;
  shebaField?: boolean;
  isHeader?: Boolean;
  bgNone?: Boolean;
};

const ControlledInput = <T extends FieldValues>({
  label,
  id,
  error,
  type,
  register,
  isHeader,
  watch,
  setValue,
  required,
  bgNone,
  PlaceHolder,
  disabled,
  shebaField,
  onChange,
}: InputProps<T>) => {
  // PasswordMode
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // If `watch` is provided and value changes, update the input value
    if (watch && setValue) {
      const value = watch(id);
      setValue(id, value);
    }
  }, [id, setValue, watch]);

  const handleWheel = (event: React.WheelEvent<HTMLInputElement>) => {
    if (type === "number") {
      event.preventDefault();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      type === "number" &&
      (event.key === "ArrowUp" || event.key === "ArrowDown")
    ) {
      event.preventDefault();
    }
  };
  const toggleVisibilityHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={`flex flex-col ${isHeader ? "my-0" : "my-2"}   w-full group ${
        disabled ? "cursor-not-allowed" : ""
      }`}
    >
      <label
        className={` ${
          label ? "pb-2" : null
        } text-sm md:text-base text-gray-600  ${
          error && !disabled ? "text-[#F55F56] " : ""
        } ${disabled ? "opacity-50" : "opacity-100"}`}
        htmlFor={id}
      >
        {label}
        {/* {required ? <span className="text-error-600">*</span> : null} */}
      </label>
      <div
        className={`w-full h-[40px] md:h-[48px]   relative   flex items-center  overflow-hidden justify-center `}
      >
        <input
          disabled={disabled && disabled}
          placeholder={PlaceHolder}
          className={`p-2 w-full h-full text-sm md:text-base ${
            bgNone ? "bg-transparent" : "bg-white"
          }   outline-none flex-1 rounded-lg ${
            !isHeader ? "border" : null
          } text-gray-600  placeholder:text-gray-200 bg-transparent appearance-none disabled:opacity-50 disabled:cursor-not-allowed duration-200 ${
            type === "password" ? "pl-12" : ""
          }  ${
            error && !disabled
              ? "border-error-500 focus:border-error-500"
              : "border-gray-50 focus:border-gray-600 hover:border-gray-300"
          } ${shebaField ? "relative" : null} `}
          id={id}
          inputMode={type === "number" ? "decimal" : "text"}
          onWheel={handleWheel}
          onKeyDown={handleKeyDown}
          min={0}
          type={
            type === "password" && !showPassword
              ? "password"
              : type === "password" && showPassword
              ? "text"
              : type
          }
          {...(register ? register(id, { required }) : {})}
          onChange={(e) => {
            if (setValue) {
              setValue(id, e.target.value);
              if (onChange) {
                onChange(); // Call the onChange prop if provided
              }
            }
          }}
        />
        {shebaField ? (
          <label className=" absolute left-4 text-gray-400 text-lg">IR</label>
        ) : null}
        {type === "password" ? (
          <div
            onClick={toggleVisibilityHandler}
            className="absolute left-3 text-gray-400"
          >
            {showPassword ? <Eye size="24" /> : <EyeSlash size="24" />}
          </div>
        ) : null}
      </div>
      {error && !isHeader && (
        <p className="text-xs text-error-500 mt-1 h-[14px]">
          {error && !disabled ? error : null}
        </p>
      )}
    </div>
  );
};

export default ControlledInput;
