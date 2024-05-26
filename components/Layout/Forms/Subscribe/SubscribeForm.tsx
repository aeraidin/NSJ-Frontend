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
import { AddDiscountNotif } from "@/util/api/Contact/AddDiscountNotif";
import Toast from "../../Alerts/Toast";
function SubscribeForm() {
  const [reset, setReset] = useState({});

  const options = [{ name: "تهران", value: 1 }];
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState("تهران");
  const [result, setResult] = useState(false);

  const addDiscountNotif = useMutation({
    mutationFn: AddDiscountNotif,
    onSuccess: (data, variables, context) => {
      setResult(true);
      setInputValue("");
    },
    onError: (err) => {
      console.log(err);
    },
  });

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
      setError("");
      addDiscountNotif.mutate({
        province: selectedOption,
        email: inputValue,
      });
      setInputValue("");
    } else if (inputValue !== "" && !emailRegex.test(inputValue)) {
      setError("لطفا ایمیل را به درستی وارد کنید");
    } else if (inputValue == "" && emailRegex.test(inputValue)) {
      setError("ایمیل الزامی است");
    }
  };

  const handleSelectChange = (e: any) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <Toast
        messege={
          addDiscountNotif.error
            ? (addDiscountNotif.error as unknown as string)
            : "با موفقیت ثبت شد"
        }
        Close={() => setResult(false)}
        isError={addDiscountNotif.isError}
        isSuccess={addDiscountNotif.isSuccess}
        Result={result}
      />
      <div className="flex flex-col lg:flex-row   lg:justify-start w-full  p-1 lg:bg-[#F9F8F8]  rounded-2xl items-center gap-y-4 lg:gap-1 ">
        <div className=" flex justify-center gap-x-3  items-center  p-2 w-full bg-[#F9F8F8]  rounded-2xl">
          <div className=" max-w-[110px] lg:max-w-[160px] px-6   w-full">
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className=" text-gray-400 text-nowrap text-sm lg:text-base font-semibold max-w-[84px] w-full bg-transparent outline-none "
            >
              <option value="">استان</option>
              <option value="تهران">تهران</option>
            </select>
          </div>

          <div className=" h-6 w-1 border-l border-gray-100"></div>
          <div className=" w-full lg:max-w-[340px] ">
            <div className="  w-full pr-2">
              <input
                onChange={(e: any) => {
                  setInputValue(e.target.value);
                }}
                value={inputValue}
                pattern="[^ @]*@[^ @]*"
                type="email"
                className=" placeholder:text-sm bg-transparent text-gray-600 w-full outline-none h-10 placeholder:text-gray-300"
                placeholder="ایمیل خود را وارد کنید"
              />
            </div>
          </div>
        </div>

        <div className=" w-full  lg:max-w-[140px]">
          <button
            onClick={SubmitHandler}
            disabled={disabled || addDiscountNotif.isPending}
            className="shadow-primary-600/60 hover:shadow-none disabled:shadow-none shadow-xl disabled:bg-primary-600/20  disabled:cursor-not-allowed bg-primary-600 text-white w-full  hover:bg-primary-400 focus:bg-primary-400 duration-200 flex justify-center items-center  h-12 rounded-2xl"
          >
            {addDiscountNotif.isPending ? (
              <>
                <svg className="h-6 w-6 animate-spin" viewBox="3 3 18 18">
                  <path
                    className="fill-primary-400/20"
                    d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                  ></path>
                  <path
                    className="fill-primary-400"
                    d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                  ></path>
                </svg>
              </>
            ) : (
              <>مشترک شوید</>
            )}
          </button>
        </div>
      </div>
      <div className=" text-error-500 text-xs  absolute pt-5 lg:pt-2">
        {error}
      </div>
    </>
  );
}

export default SubscribeForm;
