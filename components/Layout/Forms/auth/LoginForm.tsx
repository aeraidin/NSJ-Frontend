"use client";
import React, { useState } from "react";
import { Form } from "../Form";
import ControlledInput from "../../Input/ControlledInput";
import {
  PhoneValidation,
  PhoneValidationType,
} from "@/util/config/validations/Registration/Phonevalidation";
import { SubmitHandler } from "react-hook-form";
import PrimaryBtn from "../../Buttons/PrimaryBtn";
import { useMutation } from "@tanstack/react-query";
import useSendCodeOtp from "@/util/api/Auth/SendCodeOtp";

function LoginForm({ PhoneNumber }: { PhoneNumber: (phone: string) => void }) {
  const [reset, setReset] = useState({});
  const SendOtpCode = useMutation;
  const sendotp = useSendCodeOtp();

  const onSubmit: SubmitHandler<PhoneValidationType> = async (data) => {
    sendotp.mutate(data.phoneNumber);
    sendotp.isSuccess && PhoneNumber(data.phoneNumber);
  };
  return (
    <Form<PhoneValidationType>
      validationSchema={PhoneValidation}
      onSubmit={onSubmit}
      resetValues={reset}
      className="w-full"
    >
      {({ register, formState: { errors } }) => (
        <div className="flex flex-col gap-8 ">
          <ControlledInput
            register={register}
            id="phoneNumber"
            label="شماره موبایل"
            required
            PlaceHolder="برای مثال: 09167890987"
            type="number"
            error={errors.phoneNumber?.message}
          />
          <PrimaryBtn disabled={sendotp.isPending}>ادامه دهید</PrimaryBtn>
        </div>
      )}
    </Form>
  );
}

export default LoginForm;
