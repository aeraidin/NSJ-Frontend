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
function SignupForm() {
  const [reset, setReset] = useState({});
  const [BirthdateCurect, setBirthdateCurect] = useState<boolean>(false);
  const [Birthday, setBirthday] = useState("");
  const [showBirthdayError, setshowBirthdayError] = useState(false);
  // const sendotp = useMutation({
  //   mutationFn: useSendCodeOtp,
  //   onSettled(data, error, variables, context) {
  //     PhoneNumber(variables);
  //   },
  // });

  const onSubmit: SubmitHandler<SignupSchemaType> = async (data) => {
    //   sendotp.mutate(data.phoneNumber);
  };
  return (
    <Form<SignupSchemaType>
      validationSchema={SignupSchema}
      onSubmit={onSubmit}
      resetValues={reset}
      className="w-full"
    >
      {({ register, formState: { errors }, setValue }) => (
        <div className="flex flex-col gap-4 lg:gap-2 ">
          <ControlledInput
            register={register}
            id="firstName"
            label="نام"
            required
            PlaceHolder="نام خود را وارد نمایید"
            type="number"
            error={errors.firstName?.message}
          />
          <ControlledInput
            register={register}
            id="lastName"
            label="نام خانوادگی"
            required
            PlaceHolder="نام خانوادگی خود را وارد نمایید"
            type="number"
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
              options={Days}
              error={errors.month?.message}
            />
            <ControlledSelect
              register={register}
              id="year"
              required
              setValue={setValue}
              placeholder="سال"
              options={Days}
              error={errors.year?.message}
            />
          </div>

          <PrimaryBtn
          //   isloading={sendotp.isPending}
          //   disabled={sendotp.isPending}
          >
            ثبت نام
          </PrimaryBtn>
        </div>
      )}
    </Form>
  );
}

export default SignupForm;
