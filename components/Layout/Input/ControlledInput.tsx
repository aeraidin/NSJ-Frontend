"use client";

import React, { useState, useEffect } from "react";
import {
  FieldValues,
  Path,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

import Image from "next/image";

type InputProps<T extends FieldValues> = {
  label: string;
  id: Path<T>;
  type?: string;
  register?: UseFormRegister<T>;
  watch?: UseFormWatch<T>;
  setValue?: any;
  required?: boolean;
  error: string | undefined;
  PlaceHolder: string;
  disabled?: boolean;
  onChange?: () => void;
};

const ControlledInput = <T extends FieldValues>({
  label,
  id,
  error,
  type,
  register,
  watch,
  setValue,
  required,
  PlaceHolder,
  disabled,
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

  const toggleVisibilityHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={`flex flex-col my-2 group ${
        disabled ? "cursor-not-allowed" : ""
      }`}
    >
      <label
        className={`pb-2 text-sm md:text-base ${
          error && !disabled ? "text-[#F55F56] " : ""
        } ${disabled ? "opacity-50" : "opacity-100"}`}
        htmlFor={id}
      >
        {label}
      </label>
      <div
        className={`w-full h-[40px] md:h-[48px]    bg-white  flex items-center  overflow-hidden ${
          error || type === "password" ? "justify-between " : "justify-center"
        } `}
      >
        <input
          disabled={disabled && disabled}
          placeholder={PlaceHolder}
          className={`p-2 w-full h-full text-sm md:text-base  outline-none flex-1 rounded-lg border text-gray-600 placeholder:text-gray-200  bg-transparent appearance-none disabled:opacity-50 disabled:cursor-not-allowed duration-200   ${
            error && !disabled
              ? "border-error-500 focus:border-error-500"
              : "border-gray-100 focus:border-gray-600 hover:border-gray-300 "
          } `}
          id={id}
          autoComplete="off"
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
        {type === "password" ? (
          <Image
            onClick={() => toggleVisibilityHandler()}
            src={
              showPassword
                ? "/icon/visibility_FILL0_wght400_GRAD0_opsz24.svg"
                : "/icon/visibility_off_FILL0_wght400_GRAD0_opsz24.svg"
            }
            width={24}
            height={24}
            className="lg:opacity-0 group-hover:opacity-100 group-focus:opacity-100 AnimationDuration "
            alt="eyse icon"
          />
        ) : null}
      </div>
      <p className="text-xs text-error-500 mt-1 h-[15px]">
        {error && !disabled ? error : null}
      </p>
    </div>
  );
};

export default ControlledInput;
