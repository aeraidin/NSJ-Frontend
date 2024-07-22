"use client";
import {
  SignupSchema,
  SignupSchemaType,
} from "@/util/config/validations/Registration/SignupSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { Controller, SubmitHandler } from "react-hook-form";
import { Form } from "../Form";
import PrimaryBtn from "../../Buttons/PrimaryBtn";
import Gender from "../Gender";
import { Signup } from "@/util/api/Auth/Signup";
import CmYears from "@/components/Layout/Forms/auth/data/Date/CmYears";
import CmDays from "@/components/Layout/Forms/auth/data/Date/CmDays";
import CmMonth from "@/components/Layout/Forms/auth/data/Date/CmMonth";
import ControlledInput from "../../Input/ControlledInput";
import ControlledSelect from "../../Input/ControlledSelect";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useToast } from "../../Alerts/ToastProvider";

function SignupForm() {
  const [reset, setReset] = useState({});
  const [Genders, setGender] = useState(1);
  const [Result, setResult] = useState(false);
  const token = Cookies.get("token");
  const router = useRouter()
  const { addToast } = useToast()

  const queryClient = useQueryClient();
  const SignupHandler = useMutation({
    mutationFn: Signup,
    onSuccess(data, variables, context) {
      Cookies.remove("isNew");
      queryClient.invalidateQueries();
      router.replace("/")
    },
    onError(error, variables, context) {
      addToast({ messege: SignupHandler.error as unknown as string, type: "error", duration: 300, })
    },
  });

  const onSubmit: SubmitHandler<SignupSchemaType> = async (data) => {
    SignupHandler.mutate({
      token: token!,
      BirthDate: `${data.year.value}/${data.month.value}/${data.day.value}`,
      Family: data.lastName,
      Gender: Genders,
      Name: data.firstName,
    });
  };
  return (
    <>
      <Form<SignupSchemaType>
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
        resetValues={reset}
        className="w-full"
      >
        {({ register, formState: { errors }, setValue, control }) => (
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
            <label
              className={`text-sm md:text-base text-gray-600`}

            >
              تاریخ تولد

            </label>
            {/* Birthday */}
            <div className="flex items-center gap-3 ">
              <Controller
                control={control}
                name="day"
                render={({ field: { onChange, value } }) => (
                  <ControlledSelect
                    options={CmDays}
                    error={errors.day?.message}
                    PlaceHolder="روز"
                    value={value}
                    label="روز"
                    HideLable
                    onChange={onChange}
                    setValue={setValue}
                    id={"day"}
                  />
                )}
              />
              <Controller
                control={control}
                name="month"
                render={({ field: { onChange, value } }) => (
                  <ControlledSelect
                    options={CmMonth}
                    error={errors.month?.message}
                    PlaceHolder="ماه"
                    value={value}
                    label="ماه"
                    HideLable
                    onChange={onChange}
                    setValue={setValue}
                    id={"month"}
                  />
                )}
              />
              <Controller
                control={control}
                name="year"
                render={({ field: { onChange, value } }) => (
                  <ControlledSelect
                    options={CmYears}
                    error={errors.year?.message}
                    PlaceHolder="سال"
                    HideLable
                    label="سال"
                    value={value}
                    onChange={onChange}
                    setValue={setValue}
                    id={"year"}
                  />
                )}
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
    </>
  );
}

export default SignupForm;
