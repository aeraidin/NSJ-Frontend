/** @format */

"use client";
import {
  SignupSchema,
  SignupSchemaType,
} from "@/util/config/validations/Registration/SignupSchema";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler } from "react-hook-form";
import { Form } from "../Form";
import PrimaryBtn from "../../Buttons/PrimaryBtn";
import { Signup } from "@/util/api/Auth/Signup";
import ControlledSelect from "../../Input/ControlledSelect";
import FormDropDown from "../../Dropdowns/FormDropDown";
import { Location, SearchNormal } from "iconsax-react";

import ControlledInput from "../../Input/ControlledInput";
import {
  SubscribeSchema,
  SubscribeSchemaType,
} from "@/util/config/validations/Footer/SubscribeSchema";
function SubscribeForm() {
  const [reset, setReset] = useState({});

  const options = [{ name: "تهران", value: 1 }];
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState("تهران");

  const onSubmit: SubmitHandler<SubscribeSchemaType> = async (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (inputValue !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputValue]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const SubmitHandler = () => {
    if (inputValue !== "" && emailRegex.test(inputValue)) {
      console.log("Click");
      setError("");
    } else if (inputValue !== "" && !emailRegex.test(inputValue)) {
      setError("لطفا ایمیل را به درستی وارد کنید");
    } else if (inputValue == "" && emailRegex.test(inputValue)) {
      setError("ایمیل الزامی است");
    }

    console.log(error);
  };

  console.log(selectedOption);

  const handleSelectChange = (e: any) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <div className="flex    justify-start w-full  p-1  rounded-2xl items-center gap-0 lg:gap-1 ">
        <div className=" max-w-[160px] px-6   w-full">
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className=" text-gray-400 w-full bg-transparent outline-none "
          >
            <option value="">استان</option>
            <option value="تهران">تهران</option>
          </select>
        </div>

        <div className=" h-6 w-1 border-l border-gray-100"></div>
        <div className=" w-full max-w-[340px] ">
          <div className="  w-full pr-2">
            <input
              onChange={(e: any) => {
                setInputValue(e.target.value);
              }}
              pattern="[^ @]*@[^ @]*"
              type="email"
              className=" bg-transparent text-gray-600 w-full outline-none h-10 placeholder:text-gray-300"
              placeholder="ایمیل خود را وارد کنید"
            />
          </div>
        </div>

        <div className=" w-full max-w-[140px]">
          <button
            onClick={SubmitHandler}
            disabled={disabled}
            className="shadow-primary-600/60 hover:shadow-none disabled:shadow-none shadow-xl disabled:bg-primary-600/20  disabled:cursor-not-allowed bg-primary-600 text-white w-full  hover:bg-primary-400 focus:bg-primary-400 duration-200 flex justify-center items-center  h-12 rounded-2xl"
          >
            مشترک شوید
          </button>
        </div>
      </div>

      <div className=" text-error-500 text-xs absolute pt-2">{error}</div>
    </>
  );
}

export default SubscribeForm;
