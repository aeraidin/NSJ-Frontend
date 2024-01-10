"use client";
import {
  SignupSchema,
  SignupSchemaType,
} from "@/util/config/validations/Registration/SignupSchema";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Form } from "../Form";
import ControlledInput from "../../Input/ControlledInput";
import PrimaryBtn from "../../Buttons/PrimaryBtn";
import ControlledSelect from "../../Input/ControlledSelect";
import Gender from "../Gender";
import { Signup } from "@/util/api/Auth/Signup";
import CmYears from "@/components/Layout/Forms/auth/data/Date/CmYears";
import CmDays from "@/components/Layout/Forms/auth/data/Date/CmDays";
import CmMonth from "@/components/Layout/Forms/auth/data/Date/CmMonth";
function SignupForm() {
  const [reset, setReset] = useState({});
  const [Genders, setGender] = useState(1);

  const SignupHandler = useMutation({
    mutationFn: Signup,
    onSettled(data, error, variables, contextd) {},
  });

  const onSubmit: SubmitHandler<SignupSchemaType> = async (data) => {
    SignupHandler.mutate({
      BirthDate: `${data.year}/${data.month}/${data.day}`,
      Family: data.lastName,
      Gender: Genders,
      Name: data.firstName,
    });
  };
  return (
    <Form<SignupSchemaType>
      validationSchema={SignupSchema}
      onSubmit={onSubmit}
      resetValues={reset}
      className="w-full"
    >
      {({ register, formState: { errors }, setValue }) => (
        <div className="flex flex-col gap-0 lg:gap-1 ">
          <ControlledInput
            register={register}
            id="firstName"
            label="نام"
            required
            PlaceHolder="نام خود را وارد نمایید"
            type="text"
            error={errors.firstName?.message}
          />
          <ControlledInput
            register={register}
            id="lastName"
            label="نام خانوادگی"
            required
            PlaceHolder="نام خانوادگی خود را وارد نمایید"
            type="text"
            error={errors.lastName?.message}
          />
          {/* Birthday */}
          <div className="flex items-center gap-3 ">
            <ControlledSelect
              register={register}
              id="day"
              required
              setValue={setValue}
              placeholder="روز"
              options={CmDays}
              error={errors.day?.message}
            />
            <ControlledSelect
              register={register}
              id="month"
              required
              setValue={setValue}
              placeholder="ماه"
              options={CmMonth}
              error={errors.month?.message}
            />
            <ControlledSelect
              register={register}
              id="year"
              required
              setValue={setValue}
              placeholder="سال"
              options={CmYears.reverse()}
              error={errors.year?.message}
            />
          </div>
          <div className="mt-5">
            <Gender selectedValue={(e) => setGender(Number(e))} />
          </div>
          <div className="mt-7">
            <PrimaryBtn
              type="submit"
              isloading={SignupHandler.isPending}
              disabled={SignupHandler.isPending}
            >
              ثبت نام
            </PrimaryBtn>
          </div>
        </div>
      )}
    </Form>
  );
}

export default SignupForm;
