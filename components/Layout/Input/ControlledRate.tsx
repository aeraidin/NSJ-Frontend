/** @format */

"use client";

import React, { useState, useEffect } from "react";
import {
  FieldValues,
  Path,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import ReactStars from "react-rating-stars-component";

import Image from "next/image";
import { Eye, EyeSlash, Star1 } from "iconsax-react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

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

const ControlledRate = <T extends FieldValues>({
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

  const ratingChanged = (newRating: number) => {
    if (setValue) {
      setValue("rate", newRating); // Assuming "rate" is the correct field name in your form data
    }
  };

  return (
    <>
      <ReactStars
        onChange={(e: any) => {
          if (setValue) {
            if (e.target && e.target.value !== undefined) {
              setValue(id, e.target.value);
              if (onChange) {
                onChange();
              }
            }
          }
          ratingChanged(e);
        }}
        emptyIcon={<FaStar size={24} />}
        filledIcon={<FaStar size={24} />}
        isHalf={true}
        halfIcon={<FaStarHalfAlt size={24} />}
        count={5}
        size={28}
        className={"cursor-pointer"}
        color={"#D7D7D7"}
        activeColor="#FEB92E"
      />
    </>
  );
};

export default ControlledRate;
