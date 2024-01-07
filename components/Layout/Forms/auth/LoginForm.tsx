"use client";
import React, { useState } from "react";
import { Form } from "../Form";
import ControlledInput from "../../Input/ControlledInput";
import {
  PhoneValidation,
  PhoneValidationType,
} from "@/util/config/validations/Registration/Phonevalidation";
import { SubmitHandler } from "react-hook-form";

import { SendCodeOtp } from "@/util/api/Auth/SendCodeOtp";
import PrimaryBtn from "../../Buttons/PrimaryBtn";

function LoginForm({ PhoneNumber }: { PhoneNumber: (phone: string) => void }) {
  const [reset, setReset] = useState({});

  const onSubmit: SubmitHandler<PhoneValidationType> = async (data) => {
    try {
      // Call the SendCodeOtp function with the phone number from the form data
      const response = await SendCodeOtp(data.phoneNumber);

      // You can handle the response here if needed
      console.log("Response from SendCodeOtp:", response);

      // Call the PhoneNumber function with the phone number
      PhoneNumber(data.phoneNumber);
    } catch (error) {
      console.error("Error sending OTP:", error);
      // Handle the error as needed
    }
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
          <PrimaryBtn>ادامه دهید</PrimaryBtn>
        </div>
      )}
    </Form>
  );
}

export default LoginForm;
