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

function LoginForm({ PhoneNumber }: { PhoneNumber: (phone: string) => void }) {
  const [reset, setReset] = useState({});
  const onSubmit: SubmitHandler<PhoneValidationType> = (data) => {
    PhoneNumber(data.phoneNumber);
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
