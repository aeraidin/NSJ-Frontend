/** @format */

"use client";
import React, { useState, useEffect } from "react";
import {
  FieldValues,
  Path,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { numberToWords } from "@persian-tools/persian-tools";
import { NumericFormat } from "react-number-format";
import { removeCommas } from "@persian-tools/persian-tools";
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
  value?: any;
};

const Amount = <T extends FieldValues>({
  label,
  id,
  error,
  required,
  value,
  PlaceHolder,
  disabled,
  onChange,
}: InputProps<T>) => {
  function isWithinSafeIntegerRange(value: any) {
    return Number.isSafeInteger(value);
  }
  const valueIsSafe =
    value && isWithinSafeIntegerRange(removeCommas(value.toString()));

  return (
    <div
      className={`flex w-full flex-col my-2 group ${disabled ? "cursor-not-allowed" : ""
        }`}
    >
      <label
        className={`pb-2 text-sm md:text-base text-gray-600 ${error && !disabled ? "text-[#F55F56] " : ""
          } ${disabled ? "opacity-50" : "opacity-100"}`}
        htmlFor={id}
      >
        {label}
        {required ? <span className="text-error-600">*</span> : null}
      </label>
      <div
        className={`w-full h-[40px] md:h-[48px] relative flex items-center overflow-hidden justify-center`}
      >
        <NumericFormat
          placeholder={PlaceHolder}
          value={value}
          autoComplete="off"
          onChange={onChange}
          className={`p-2 w-full h-full text-sm md:text-base bg-white  outline-none flex-1 rounded-lg border text-gray-600  placeholder:text-gray-200  bg-transparent appearance-none disabled:opacity-50 disabled:cursor-not-allowed duration-200 border-gray-100 focus:border-gray-600 hover:border-gray-300`}
          id={"amount"}
          thousandSeparator={","}
          displayType="input"
        />
      </div>
      {!error && !disabled && value && valueIsSafe ? (
        <p className="text-xs mt-1 h-[15px]">
          {numberToWords(value).toString()} تومان
        </p>
      ) : null}
      <p className="text-xs text-error-500 mt-1 h-[15px]">
        {error && !disabled ? error : null}
      </p>
    </div>
  );
};

export default Amount;
