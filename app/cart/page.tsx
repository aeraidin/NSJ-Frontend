/** @format */

"use client";
import SuccessBtn from "@/components/Layout/Buttons/SuccessBtn";
import CartProductCards, {
  CartProductCardsLoading,
} from "@/components/Layout/Cards/CartProductCards";
import MainLayout from "@/components/Layout/MainLayout";
import UseGetCart from "@/util/hook/Cart/UseGetCart";
import React from "react";
import { NumericFormat } from "react-number-format";

function page() {
  const data = UseGetCart();
  const Data = data?.data?.value as CartDetail | undefined;

  return (
    <MainLayout>
      {Data ? (
        <div className="w-full flex-col lg:flex-row flex  gap-6 py-8">
          {/* خلاصه سبد خرید */}
          <div className="w-full  flex flex-col gap-6 flex-1">
            {Data
              ? Data.list.map((item, index) => {
                  return <CartProductCards key={index} data={item} />;
                })
              : null}
          </div>
          {/* ایتم های سبد خرید */}
          <div className="max-w-[430px] flex-1 flex flex-col  border border-gray-50 rounded-2xl justify-between h-[200px] py-6 px-5  sticky top-32">
            <h2>خلاصه سفارش </h2>
            <div className="flex flex-col gap-4 pt-4 border-t border-dashed border-gray-50">
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
              <div className=" w-full h-[56px] flex justify-center items-center rounded-2xl bg-gray-300">
                <div className=" w-full bg-gray-200 h-6 max-w-[116px] rounded-2xl "></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}

export default page;
