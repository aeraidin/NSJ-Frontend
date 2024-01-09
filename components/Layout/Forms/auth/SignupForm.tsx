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
import Birthdate from "../../Calender/Birthdate";
import Gender from "../Gender";

function SignupForm() {
  const [reset, setReset] = useState({});

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
      {({ register, formState: { errors } }) => (
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
          <Birthdate
            isValid={(e) => console.log(e)}
            onDateSelect={(e: any) => console.log(e)}
          />

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
