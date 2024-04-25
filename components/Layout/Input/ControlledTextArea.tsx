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
};

const ControlledTextArea = <T extends FieldValues>({
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
      className={`flex flex-col my-2 w-full group ${disabled ? "cursor-not-allowed" : ""
        }`}
    >
      <label
        className={`pb-2 text-sm md:text-base text-gray-600  ${error && !disabled ? "text-[#F55F56] " : ""
          } ${disabled ? "opacity-50" : "opacity-100"}`}
        htmlFor={id}
      >
        {label} {required ? <span className="text-error-600">*</span> : null}
      </label>
      <div
        className={`w-full h-[180px] md:h-[216px]   relative   flex items-center  overflow-hidden justify-center `}
      >
        <textarea
          disabled={disabled && disabled}
          placeholder={PlaceHolder}
          className={`p-3 w-full h-full resize-none text-sm md:text-base bg-white outline-none flex-1 rounded-lg border text-gray-600  placeholder:text-gray-200  bg-transparent appearance-none disabled:opacity-50 disabled:cursor-not-allowed duration-200 ${type === "password" ? "pl-12" : ""
            }  ${error && !disabled
              ? "border-error-500 focus:border-error-500"
              : "border-gray-100 focus:border-gray-600 hover:border-gray-300 "
            } `}
          id={id}
          autoComplete="off"
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
      </div>
      <p className="text-xs text-error-500 mt-1 h-[14px]">
        {error && !disabled ? error : null}
      </p>
    </div>
  );
};

export default ControlledTextArea;
