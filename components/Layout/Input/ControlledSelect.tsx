/** @format */

import React from "react";
import { FieldValues, Path } from "react-hook-form";
import FormDropDown from "../Dropdowns/FormDropDown";
import MultiDropdown from "../Dropdowns/MultiDropdown";
type SelectProps<T extends FieldValues> = {
  options: { name: string; value: string | number }[];

  label?: string;
  id: Path<T>;
  setValue?: any;
  required?: boolean;
  error: string | undefined;
  PlaceHolder: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  value?: any;
  isMulti?: boolean;
  multiValues?: (values: string[]) => void;
};
const ControlledSelect = <T extends FieldValues>({
  label,
  id,
  error,
  options,
  PlaceHolder,
  required,
  onChange,
  isMulti,
  multiValues,
  value,
  disabled,
}: SelectProps<T>) => {
  return (
    <div className="w-full ">
      {label && (
        <label
          className={`pb-2 text-sm md:text-base text-gray-600 dark:text-gray-100 ${error && !disabled ? "text-[#F55F56] " : ""
            } ${disabled ? "opacity-50" : "opacity-100"}`}
          htmlFor={id}
        >
          {label} {required ? <span className="text-error-600">*</span> : null}
        </label>
      )}

      <div className="w-full relative pt-2">
        {isMulti ? (
          <MultiDropdown
            disabled={disabled}
            error={error}
            Haveplaceholder={value && value.name !== ""}
            initialSelectedValue={
              value && value.name !== "" ? value.name : PlaceHolder
            }
            options={options}
            selectedItems={(e: any) => {
              multiValues && multiValues(e);
            }}
            onSelect={(e) => {
              onChange && onChange(e);
            }}
          />
        ) : (
          <FormDropDown
            disabled={disabled}
            error={error}
            Haveplaceholder={value && value.name !== ""}
            initialSelectedValue={
              value && value.name !== "" ? value.name : PlaceHolder
            }
            options={options}
            onSelect={(e) => {
              onChange && onChange(e);
            }}
          />
        )}
      </div>

      <p className="text-xs text-error-500 mt-1 h-[14px]">
        {error && !disabled ? label + " الزامی است " : null}
      </p>
    </div>
  );
};

export default ControlledSelect;
