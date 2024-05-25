/** @format */

"use client";
import React, { useState } from "react";
import {
  IncreaseWalletSchemaType,
  IncreaseWalletSchema,
} from "@/util/config/validations/Profile/IncreaseWalletSchema";
import { Controller, SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "../../Alerts/Toast";
import { Form } from "../Form";
import { removeCommas } from "@persian-tools/persian-tools";
import Amount from "../../Input/Amount";
import SuccessBtn from "../../Buttons/SuccessBtn";
import Image from "next/image";
import zarinPal from "@/public/profile/zarinpal.png";
import pasargad from "@/public/profile/pasargad.png";
import RadioButton from "../../Buttons/RadioButton";
import { increase } from "@/util/api/Wallet/increase";

function IncreaseWallet({}: {}) {
  const [reset, setReset] = useState({});
  const [result, setResult] = useState(false);
  const queryClient = useQueryClient();
  const [selectedBank, setSelectedBank] = useState<number | null>(1);
  const [selectedValue, setSelectedValue] = useState<number | null>(1);
  const selectionHandler = (value: number) => {
    setSelectedValue(value);
    setSelectedBank(value);
  };
  const values = {
    amount: "",
    refrenceNumber: "",
  };
  const increaseWallet = useMutation({
    mutationFn: increase,
    onSuccess: (data, variables, context) => {
      setResult(true);
      queryClient.invalidateQueries({ queryKey: ["Balance"] });
      queryClient.invalidateQueries({ queryKey: ["TransactionsList"] });

      setReset(values);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const onSubmit: SubmitHandler<IncreaseWalletSchemaType> = async (data) => {
    increaseWallet.mutate({
      amount: Number(removeCommas(data.amount)),
      referenceNumber: "0000",
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
      <Toast
        messege={
          increaseWallet.error
            ? (increaseWallet.error as unknown as string)
            : "کیف پول با موفقیت افزایش یافت"
        }
        Close={() => setResult(false)}
        isError={increaseWallet.isError}
        isSuccess={increaseWallet.isSuccess}
        Result={result}
      />

      <Form<IncreaseWalletSchemaType>
        validationSchema={IncreaseWalletSchema}
        onSubmit={onSubmit}
        resetValues={reset}
        className="w-full"
      >
        {({ register, formState: { errors }, setValue, control }) => (
          <div className="flex flex-col  gap-2 lg:gap-4 ">
            <div className=" flex flex-col lg:flex-row w-full justify-center items-center gap-x-9">
              <Controller
                control={control}
                name="amount"
                render={({ field: { onChange, value } }) => (
                  <Amount
                    error={errors.amount?.message}
                    label="مبلغ"
                    PlaceHolder="مبلغ بالای 1000 تومان"
                    value={value}
                    setValue={setValue}
                    required
                    onChange={onChange}
                    id={"amount"}
                  />
                )}
              />
            </div>

            <div className=" w-full">
              <p className=" text-sm lg:text-base font-semibold text-gray-400">
                انتخاب درگاه پرداخت
              </p>
              <div className=" w-full px-8 border flex flex-col lg:flex-row gap-y-6 justify-center lg:justify-between lg:items-center border-gray-50 h-[146px] lg:h-[74px] rounded-[20px] my-2">
                <div className=" flex gap-x-6 items-center">
                  {/* <div className=" w-5 h-5 border-gray-100 border rounded-full"></div> */}
                  <RadioButton
                    disabled={false}
                    // error={isError}
                    onChange={() => selectionHandler(0)}
                    checked={selectedBank === 0}
                  />

                  <div className=" w-[34px] h-10  relative">
                    <Image src={zarinPal} alt="zarinpal" fill />
                  </div>
                  <p>زرین پال</p>
                </div>

                <div className=" flex items-center gap-x-2">
                  {/* <div className=" w-5 h-5 border-gray-100 border rounded-full"></div> */}
                  <RadioButton
                    disabled={false}
                    // error={isError}
                    onChange={() => selectionHandler(1)}
                    checked={selectedBank === 1}
                  />
                  <div className=" w-[30px] h-10  relative">
                    <Image src={pasargad} alt="pasargad" fill />
                  </div>
                  <p>بانک پاسارگاد</p>
                </div>
              </div>
              <span className=" text-sm text-gray-300  font-semibold ">
                درگاههای فوق پذیرنده همه کارتهای عضو شتاب می باشند
              </span>
            </div>

            <div className=" w-full flex justify-center items-center">
              <div className=" w-full">
                <SuccessBtn
                  type="submit"
                  isloading={increaseWallet.isPending}
                  disabled={increaseWallet.isPending}
                >
                  افزایش موجودی
                </SuccessBtn>
              </div>
            </div>
          </div>
        )}
      </Form>
    </>
  );
}

export default IncreaseWallet;
