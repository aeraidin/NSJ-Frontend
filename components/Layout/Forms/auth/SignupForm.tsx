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
import Days from "@/util/data/Calender/Days";
import Gender from "../Gender";
import Month from "@/util/data/Calender/Month";
import Years from "@/util/data/Calender/Years";
import { Signup } from "@/util/api/Auth/Signup";
function SignupForm() {
  const [reset, setReset] = useState({});
  const [Genders, setGender] = useState(1);

  const SignupHandler = useMutation({
    mutationFn: Signup,
    onSettled(data, error, variables, contextd) {
      console.log(data);
    },
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
              options={Days}
              error={errors.day?.message}
            />
            <ControlledSelect
              register={register}
              id="month"
              required
              setValue={setValue}
              placeholder="ماه"
              options={Month}
              error={errors.month?.message}
            />
            <ControlledSelect
              register={register}
              id="year"
              required
              setValue={setValue}
              placeholder="سال"
              options={Years.reverse()}
              error={errors.year?.message}
            />
          </div>
          <div className="mt-5">
            <Gender selectedValue={(e) => setGender(Number(e))} />
          </div>
          <div className="mt-7">
            <PrimaryBtn
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
