"use client";
import SuccessBtn from "@/components/Layout/Buttons/SuccessBtn";
import CartProductCards, {
    CartProductCardsLoading,
} from "@/components/Layout/Cards/CartProductCards";
import MainLayout from "@/components/Layout/MainLayout";
import Cart from "@/components/page/Cart/Cart";
import CartSummery from "@/components/page/Cart/CartSummery";
import Payment from "@/components/page/Cart/Payment";
import PaymentSteps from "@/components/page/Cart/PaymentSteps";
import { PaymentApi } from "@/util/api/Cart/Payment";
import UseGetCart from "@/util/hook/Cart/UseGetCart";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

function Page() {
    const data = UseGetCart();
    const Data = data?.data?.value as CartDetail | undefined;
    const [CardPayment, setCardPayment] = useState(false)
    const [DoneStep, setDoneStep] = useState<number[]>([]);
    const [step, setstep] = useState(1);
    const router = useRouter()
    const PaymentMutation = useMutation({
        mutationFn: PaymentApi,
        onSuccess(data, variables, context) {
            if (data.value.mustGoToPaymentGatway) {
                router.push(data.value.paymentGatwayUrl);
            }
        },
        onError(error, variables, context) {
            console.log(error);
        },
    })
    const CheckOutHandler = () => {
        switch (step) {
            case 1:
                setstep(2);
                setDoneStep(prevDoneStep => [...prevDoneStep, 1]);
                break;
            case 2:
                // setstep(3);
                PaymentMutation.mutate(CardPayment)
                setDoneStep(prevDoneStep => [...prevDoneStep, 2]);
                break;
            case 3:
                break;
            default:
                break;
        }
    }
    const RenderComponent = () => {
        switch (step) {
            case 1:
                return <Cart Data={Data} />
            case 2:
                return <Payment ChangeState={(e) => setCardPayment(e)} state={CardPayment} />
            default:
                return <Cart Data={Data} />
        }
    }
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
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step ? step : "empty"}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2 }} className="flex-1 h-fit">{RenderComponent()}</motion.div>
                        </AnimatePresence>

                    </div>
                    {/* ایتم های سبد خرید */}
                    <CartSummery Data={step === 2 ? Data : null} onClick={CheckOutHandler} disabled={PaymentMutation.isPending || !Data} totalDiscount={Data?.totalDiscount} totalPrice={Data?.totalPrice} />
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
