/** @format */

"use client";
import SuccessBtn from "@/components/Layout/Buttons/SuccessBtn";
import CartProductCards, {
    CartProductCardsLoading,
} from "@/components/Layout/Cards/CartProductCards";
import MainLayout from "@/components/Layout/MainLayout";
import PaymentSteps from "@/components/page/Cart/PaymentSteps";
import UseGetCart from "@/util/hook/Cart/UseGetCart";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";
import React, { useState } from "react";
import { NumericFormat } from "react-number-format";

function Page() {
    const data = UseGetCart();
    const Data = data?.data?.value as CartDetail | undefined;
    const [DoneStep, setDoneStep] = useState<number[]>([]);
    const [step, setstep] = useState(1);
    return (
        <MainLayout>
            <div className="w-full flex items-start py-10 text-gray-400 ">
                <Link href={"/"} className="flex items-center gap-2 hover:text-gray-600"><ArrowRight size="24" /><p className="text-gray-400 hover:text-gray-600">بازگشت به صفحه اصلی</p></Link>
            </div>
            {Data ? (
                <div className="w-full flex-col lg:flex-row flex  gap-6 py-6">
                    {/* خلاصه سبد خرید */}
                    <div className="w-full flex flex-col gap-6 flex-1">
                        <PaymentSteps step={step} OnClick={(e) => {
                            DoneStep.includes(e) && setstep(e)
                        }} />
                        {Data
                            ? Data.list.map((item, index) => {
                                return <CartProductCards key={index} data={item} />;
                            })
                            : null}
                    </div>
                    {/* ایتم های سبد خرید */}
                    <div className="max-w-[430px] flex-1 flex flex-col  border border-gray-50 rounded-2xl justify-between h-fit  py-6 px-5 sticky top-28 ">
                        <h2>خلاصه سفارش </h2>
                        {Data?.totalDiscount !== 0 ?
                            <div className="flex items-center justify-between py-6">
                                <p>تخفیف</p>
                                <p >
                                    {" "}
                                    <NumericFormat
                                        value={Data?.totalDiscount}
                                        displayType={"text"}
                                        thousandSeparator={","}
                                    />
                                    {" تومان "}
                                </p>
                            </div>
                            :
                            null
                        }
                        <div className={`flex flex-col gap-4 pt-4 ${Data?.totalDiscount === 0 ? "" : "border-t border-dashed"} border-gray-50`}>
                            <div className="flex items-center justify-between">
                                <p>مبلغ قابل پرداخت</p>
                                <h2 className="text-third-500">
                                    {" "}
                                    <NumericFormat
                                        value={Data?.totalPrice}
                                        displayType={"text"}
                                        thousandSeparator={","}
                                    />
                                    {" تومان "}
                                </h2>
                            </div>
                            <SuccessBtn>ادامه فرایند رزرو</SuccessBtn>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full flex-col lg:flex-row flex  gap-6 py-8">
                    {/* خلاصه سبد خرید */}
                    <div className="w-full  flex flex-col gap-6 flex-1">
                        <CartProductCardsLoading />
                        <CartProductCardsLoading />
                    </div>
                    {/* ایتم های سبد خرید */}
                    <div className="max-w-[430px] flex-1 flex flex-col  border border-gray-50 rounded-2xl justify-between h-[200px] py-6 px-5  sticky top-32">
                        <h2>خلاصه سفارش </h2>
                        <div className="flex flex-col gap-4 animate-pulse  pt-4 border-t border-dashed border-gray-50">
                            <div className="flex items-center justify-between">
                                <p>مبلغ قابل پرداخت</p>
                                <h2 className="text-third-500">
                                    <div className=" w-[140px] h-[20px] rounded-2xl bg-gray-300"></div>
                                </h2>
                            </div>
                            <SuccessBtn>ادامه فرایند رزرو</SuccessBtn>

                        </div>
                    </div>
                </div>
            )}
        </MainLayout>
    );
}

export default Page;
