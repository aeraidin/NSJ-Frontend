"use client";
import { useToast } from "@/components/Layout/Alerts/ToastProvider";
import PrimaryBtn from "@/components/Layout/Buttons/PrimaryBtn";
import { Form } from "@/components/Layout/Forms/Form";
import ControlledInput from "@/components/Layout/Input/ControlledInput";
import ControlledSelect from "@/components/Layout/Input/ControlledSelect";
import OTPModal from "@/components/Layout/Modals/auth/OTPModal";
import { PreLoginApi } from "@/util/api/contribution/PreLoginApi";
import { PreRegistrationSchema, PreRegistrationSchemaType } from "@/util/config/validations/Registration/PreRegistrationSchema";
import CmDays from "@/util/data/Date/CmDays";
import CmMonth from "@/util/data/Date/CmMonth";
import CmYears from "@/util/data/Date/CmYears";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
import { Controller, SubmitHandler } from "react-hook-form";
function PreLogin() {
  const [NationalCode, setNationalCode] = useState<null | string>(null);
  const [Phone, setPhone] = useState<null | string>(null);
  const [Modal, setModal] = useState(false);
  const [reset, setReset] = useState({});
  const initialValues = {
    firstName: "",
    lastname: "",
    nationalCode: "",
    phoneNumber: "",
    email: "",
    month: "",
    year: "",
    day: "",
  };
  const { addToast } = useToast()
  const SendOtp = useMutation({
    mutationFn: PreLoginApi,
    onSuccess(data, variables, context) {
      setPhone(variables.phone);
      setModal(true);
      setNationalCode(variables.nationalCode);
      setReset(initialValues);
      addToast({ messege: "با موفقیت حذف شد", type: "success", duration: 300, })
    },
    onError(error, variables, context) {
      addToast({ messege: error as any, type: "error", duration: 300, })

    },
  });
  const onSubmit: SubmitHandler<PreRegistrationSchemaType> = async (data) => {
    SendOtp.mutate({
      birthDate: `${data.year.value}/${data.month.value}/${data.day.value}`,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastname,
      nationalCode: data.nationalCode,
      phone: data.phoneNumber,
    });
  };

  return (
    <>
      <OTPModal
        State={Modal}
        CloseModal={() => setModal(false)}
        Phone={Phone!}
        NationalCode={NationalCode!}
      />
      <div className=" aspect-square sm:aspect-video bg-gray-50 rounded-[36px] relative">
        <Image src={"/Prelogin/Banner.png"} alt="image" fill className="object-cover rounded-[36px]" sizes="90vw" />
        <h6 className="text-primary-600 text-xl md:text-3xl absolute top-[10%] lg:top-[30%] right-[5%]">
          همین حالا ثبت نام کنید!
        </h6>
        <h1 className="text-white text-3xl md:text-5xl font-bold absolute top-[25%] lg:top-[40%] right-[5%]">
          به اسپورتیکت بپیوندید
        </h1>
        <div className="absolute top-[150%] sm:top-[160%] md:top-[130%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:translate-y-0 lg:translate-x-0 lg:left-[2%] xl:left-[10%] lg:top-[10%] p-6 md:p-10 rounded-[30px] shadow-2xl hover:shadow duration-200  bg-white text-black w-[95%] md-w-full max-w-[460px]">
          <h1 className=" text-xl lg:text-2xl text-primary-600 font-semibold mb-6">
            ثبت نام مالکان مجموعه ها
          </h1>
          <Form<PreRegistrationSchemaType>
            validationSchema={PreRegistrationSchema}
            onSubmit={onSubmit}
            className="w-full"
            resetValues={reset}
          >
            {({ register, formState: { errors }, setValue, control }) => (
              <div className="flex flex-col gap-0 ">
                <ControlledInput
                  register={register}
                  id="firstName"
                  label="نام مالک"
                  required
                  PlaceHolder="نام خود را وارد نمایید"
                  type="text"
                  setValue={setValue}
                  error={errors.firstName?.message}
                />
                <ControlledInput
                  register={register}
                  id="lastname"
                  label="نام خانوادگی مالک"
                  required
                  PlaceHolder="نام خانوادگی خود را وارد نمایید"
                  type="text"
                  setValue={setValue}
                  error={errors.lastname?.message}
                />
                <ControlledInput
                  register={register}
                  id="nationalCode"
                  label="کد ملی مالک"
                  required
                  PlaceHolder="کد ملی خود را  وارد نمایید"
                  type="number"
                  setValue={setValue}
                  error={errors.nationalCode?.message}
                />
                <div className="flex flex-col pt-2">
                  <label
                    className={`text-sm md:text-base text-gray-600`}
                  >
                    تاریخ تولد مالک
                  </label>
                  <div className="flex items-center gap-3 ">
                    <Controller
                      control={control}
                      name="day"
                      render={({ field: { onChange, value } }) => (
                        <ControlledSelect
                          options={CmDays}
                          error={errors.day?.message}
                          PlaceHolder="روز"
                          label="روز"
                          value={value}
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
                          label="ماه"
                          value={value}
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
                          label="سال"
                          value={value}
                          onChange={onChange}
                          setValue={setValue}
                          id={"year"}
                        />
                      )}
                    />
                  </div>
                </div>
                <ControlledInput
                  register={register}
                  id="phoneNumber"
                  label="شماره موبایل مالک"
                  required
                  PlaceHolder="برای مثال:09167890987"
                  type="number"
                  setValue={setValue}
                  error={errors.phoneNumber?.message}
                />
                <ControlledInput
                  register={register}
                  id="email"
                  label="ایمیل مالک"
                  required
                  PlaceHolder="example@Gmail.com"
                  setValue={setValue}
                  type="text"
                  error={errors.email?.message}
                />
                <div className="mt-4">
                  <PrimaryBtn
                    type="submit"
                    isloading={SendOtp.isPending}
                    disabled={SendOtp.isPending}
                  >
                    دریافت کد تایید
                  </PrimaryBtn>
                </div>
              </div>
            )}
          </Form>
        </div>
      </div>
    </>
  );
}
export default PreLogin;
