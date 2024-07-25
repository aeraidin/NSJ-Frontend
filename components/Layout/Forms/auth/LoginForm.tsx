/** @format */

"use client";
import React, { useEffect, useState } from "react";
import { Form } from "../Form";
import {
  PhoneValidation,
  PhoneValidationType,
} from "@/util/config/validations/Registration/Phonevalidation";
import { SubmitHandler } from "react-hook-form";
import PrimaryBtn from "../../Buttons/PrimaryBtn";
import { useMutation } from "@tanstack/react-query";
import { useSendCodeOtp } from "@/util/api/Auth/SendCodeOtp";
import ControlledInput from "../../Input/ControlledInput";
import { useToast } from "../../Alerts/ToastProvider";

function LoginForm({ PhoneNumber }: { PhoneNumber: (phone: string) => void }) {
  const [reset, setReset] = useState({});

  const { addToast } = useToast()

  const sendotp = useMutation({
    mutationFn: useSendCodeOtp,
    onSuccess: (data, variables, context) => {
      addToast({ messege: "کد تایید با موفقیت ارسال شد", type: "success", duration: 300, })
      PhoneNumber(variables);
    },
    onError: (error) => {
      addToast({ messege: error as any, type: "error", duration: 300, })
    },
  });

  const onSubmit: SubmitHandler<PhoneValidationType> = async (data) => {
    sendotp.mutate(data.phoneNumber);
  };
  return (
    <>

      <Form<PhoneValidationType>
        validationSchema={PhoneValidation}
        onSubmit={onSubmit}
        resetValues={reset}
        className="w-full"
      >
        {({ register, formState: { errors }, setValue }) => (
          <div className="flex flex-col gap-2 lg:gap-4 ">
            <ControlledInput
              register={register}
              id="phoneNumber"
              label="شماره موبایل"
              required
              disabled={sendotp.isPending}
              setValue={setValue}
              PlaceHolder="برای مثال: 09167890987"
              type="number"
              error={errors.phoneNumber?.message}
            />
            <PrimaryBtn
              type="submit"
              isloading={sendotp.isPending}
              disabled={sendotp.isPending}
            >
              ادامه دهید
            </PrimaryBtn>
          </div>
        )}
      </Form>
    </>
  );
}

export default LoginForm;
