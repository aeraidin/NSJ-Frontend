import React, { useEffect } from "react";
import {
  FieldValues,
  Path,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import DropDown from "../Dropdowns/Dropdown";
// import DropDown from "../layout/DropDown/DropDown";
type SelectProps<T extends FieldValues> = {
  label?: string;
  id: Path<T>;
  error?: string | undefined | any;
  options: { label: string; value: string }[];
  register: UseFormRegister<T>;
  setValue: any;
  required?: boolean;
  placeholder: string;
  initialValue?: string | null;
  Onselected?: (value: any) => void;
  onChange?: () => void;
  watch?: UseFormWatch<T>;
  disabled?: boolean;
};
const ControlledSelect = <T extends FieldValues>({
  label,
  id,
  error,
  options,
  register,
  setValue,
  Onselected,
  placeholder,
  required = false,
  initialValue,
  onChange,
  watch,
  disabled,
}: SelectProps<T>) => {
  useEffect(() => {
    // If `watch` is provided and value changes, update the input value
    if (watch && setValue) {
      const value = watch(id);
      setValue(id, value);
    }
  }, [id, setValue, watch]);
  return (
    <div
      className={`flex flex-1 flex-col my-2 group ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <label
        className={`Caption-MD  px-2  ${error ? "text-[#F55F56]" : ""}`}
        htmlFor={id}
      >
        {label}
      </label>
      <div className="w-full relative">
        <DropDown
          disabled={disabled}
          placeholder={placeholder}
          error={error}
          initialSelectedValue={initialValue}
          options={options}
          onSelect={(value) => {
            if (setValue) {
              setValue(id, value);
            }

            if (onChange) {
              onChange();
            }
            if (Onselected) {
              Onselected(value);
            }
          }}
        />
        <input
          type="hidden" // Use a hidden input to store the selected value
          {...register(id, { required })}
        />
      </div>
      {/* <p className="Caption-SM text-[#F55F56] mt-1 h-[15px]">{error}</p> */}
    </div>
  );
};

export default ControlledSelect;
