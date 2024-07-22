/** @format */

"use client";
import React, { useEffect, useState } from "react";
import {
  ContactSchema,
  ContactSchemaType,
} from "@/util/config/validations/Contact/ContactSchema";
import { Controller, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useSendCodeOtp } from "@/util/api/Auth/SendCodeOtp";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import ControlledInput from "../Input/ControlledInput";
import Toast from "../Alerts/Toast";
import { Form } from "./Form";
import ControlledSelect from "../Input/ControlledSelect";
import ControlledTextArea from "../Input/ControlledTextArea";
import { AddContact } from "@/util/api/Contact/AddContact";
import Captcha from "./auth/Captcha";
import { useToast } from "../Alerts/ToastProvider";

function ContactUsForm({ }: {}) {
  const [reset, setReset] = useState({});
  const [result, setResult] = useState(false);
  const [resetCaptcha, setResetCaptcha] = useState(false);
  const values = {
    fullName: "",
    phoneNumber: "",
    text: "",
    email: "",
    verify: null,
    subject: { name: "", value: "" },
  };
  const { addToast } = useToast()
  const addContact = useMutation({
    mutationFn: AddContact,
    onSuccess: (data, variables, context) => {
      addToast({ messege: "با موفقیت ارسال شد", type: "success", duration: 300, })
      setReset(values);
      setResetCaptcha(true);
    },
    onError: (err) => {
      addToast({ messege: addContact.error as unknown as string, type: "error", duration: 200, })

    },
  });

  const onSubmit: SubmitHandler<ContactSchemaType> = async (data) => {
    addContact.mutate({
      fullName: data.fullName,
      email: data.email,
      text: data.text,
      phoneNumber: data.phoneNumber,
      subject: data.subject.value,
    });
  };

  const options = [
    { name: "نقص فنی", value: "نقص فنی" },
    { name: "ثبت سفارش", value: "ثبت سفارش" },
    { name: "مشکل در پرداخت", value: "مشکل در پرداخت" },

    { name: "سایر", value: "سایر" },
  ];
  return (
    <>

      <Form<ContactSchemaType>
        validationSchema={ContactSchema}
        onSubmit={onSubmit}
        resetValues={reset}
        className="w-full"
      >
        {({ register, formState: { errors }, setValue, control }) => (
          <div className="flex flex-col gap-2 lg:gap-4 ">
            <div className=" flex flex-col lg:flex-row w-full justify-center items-center gap-x-9">
              <ControlledInput
                register={register}
                id="fullName"
                label="نام و نام خانوادگی"
                required
                // disabled={sendotp.isPending}
                PlaceHolder="نام و نام خانوادگی"
                type="text"
                error={errors.fullName?.message}
              />

              <div className=" w-full mt-5">
                <Controller
                  control={control}
                  name="subject"
                  render={({ field: { onChange, value } }) => (
                    <ControlledSelect
                      id="subject"
                      label="موضوع"
                      setValue={setValue}
                      value={value}
                      onChange={onChange}
                      required
                      PlaceHolder="موضوع را انتخاب کنید"
                      options={options}
                      error={""}
                    />
                  )}
                />
              </div>
            </div>

            <div className=" flex w-full flex-col lg:flex-row justify-center items-start gap-x-9">
              <div className=" flex  w-full flex-col gap-2">
                <ControlledInput
                  register={register}
                  id="phoneNumber"
                  label="شماره موبایل"
                  required
                  //   disabled={sendotp.isPending}
                  PlaceHolder="شماره موبایل"
                  type="number"
                  error={errors.phoneNumber?.message}
                />
                <ControlledInput
                  register={register}
                  id="email"
                  label="ایمیل"
                  required
                  //   disabled={sendotp.isPending}
                  PlaceHolder="ایمیل را وارد کنید"
                  type="email"
                  error={errors.email?.message}
                />
              </div>
              <div className=" w-full lg:max-w-[400px] ">
                <ControlledTextArea
                  id="text"
                  setValue={setValue}
                  isAbout
                  label="متن"
                  register={register}
                  error={errors.text?.message}
                  PlaceHolder="برای ما بنویسید..."
                />
              </div>
            </div>

            <div className=" w-full flex mb-6 lg:mb-0 justify-center lg:justify-start ">
              <Controller
                control={control}
                name="verify"
                render={({ field: { onChange, value } }) => (
                  <div className=" flex flex-col">
                    <Captcha reset={resetCaptcha} onChange={onChange} />
                    <p className=" text-error-500 text-xs">
                      {errors.verify?.message}
                    </p>
                  </div>
                )}
              />
            </div>

            <div className=" w-full flex justify-center items-center">
              <div className=" w-full max-w-[386px]">
                <PrimaryBtn
                  type="submit"
                  isloading={addContact.isPending}
                  disabled={addContact.isPending}
                >
                  ارسال پیام
                </PrimaryBtn>
              </div>
            </div>
          </div>
        )}
      </Form>
    </>
  );
}

export default ContactUsForm;
