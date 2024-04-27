/** @format */

"use client";
import {
  SignupSchema,
  SignupSchemaType,
} from "@/util/config/validations/Registration/SignupSchema";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
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
  const [Genders, setGender] = useState(1);
  const SignupHandler = useMutation({
    mutationFn: Signup,
    onSettled(data, error, variables, contextd) {},
  });

  const options = [{ name: "تهران", value: 1 }];
  const onSubmit: SubmitHandler<SubscribeSchemaType> = async (data) => {
    console.log(data);
  };
  return (
    <Form<SubscribeSchemaType>
      validationSchema={SubscribeSchema}
      onSubmit={onSubmit}
      resetValues={reset}
      className="w-full"
    >
      {({ register, formState: { errors }, setValue, control }) => (
        <div className="flex    justify-start w-full rounded-xl items-center gap-0 lg:gap-1 ">
          <div className=" max-w-[160px]  w-full">
            <Controller
              control={control}
              name="province"
              render={({ field: { onChange, value } }) => (
                <ControlledSelect
                  options={options}
                  isHeader
                  required
                  BorderNone
                  bgNone
                  error={errors.province?.message}
                  PlaceHolder="استان"
                  value={value}
                  onChange={(selectedOption) => {
                    onChange(selectedOption);
                  }}
                  id={"province"}
                />
              )}
            />
          </div>

          <div className=" h-6 w-1 border-l border-gray-100"></div>
          <div className=" w-full max-w-[340px]">
            <ControlledInput
              id="text"
              bgNone={true}
              isHeader={true}
              required
              PlaceHolder="ایمیل خود را وارد کنید"
              type="text"
              register={register}
              setValue={setValue}
              error={errors.text?.message}
            />
          </div>

          <div className=" w-full max-w-[140px]">
            <PrimaryBtn type="submit">مشترک شوید</PrimaryBtn>
          </div>
        </div>
      )}
    </Form>
  );
}

export default SubscribeForm;
