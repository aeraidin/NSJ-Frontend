/** @format */

"use client";
import PrimaryBtn from "@/components/Layout/Buttons/PrimaryBtn";
import MainLayout from "@/components/Layout/MainLayout";
import { UserTypeData } from "@/util/Data/UserTypeData";
import { VerifyPayment } from "@/util/api/Cart/VerifyPayment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  BagCross,
  BagTick2,
  Calendar,
  Clock,
  Status,
  Ticket,
} from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { StrictMode, useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
interface reserve {
  type: number;
  date: string;
  sans: string;
  count: number;
  reserveRefNumber: string;
  sportComplex: { id: number; name: string };
  sportComplexService: { id: number; name: string };
}

interface packages {
  packageTitle: number;
  count: number;
  reserveRefNumber: string;
  sportComplex: { id: number; name: string };
  sportComplexService: { id: number; name: string };
}

function Page({
  searchParams,
}: {
  searchParams: { Authority: string; Status: string };
}) {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [isloading, setisloading] = useState(true);
  const [Reserves, setReserves] = useState<null | reserve[]>(null);
  const [packages, setPackages] = useState<null | packages[]>(null);
  const [step, setstep] = useState(0);
  // if (!searchParams.Authority || !searchParams.Status) {
  //     redirect("/");
  // }
  console.log(searchParams.Status);

  const queryClient = useQueryClient();
  const Verfiy = useMutation({
    mutationFn: VerifyPayment,
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({ queryKey: ["Cart"] });
      queryClient.invalidateQueries({ queryKey: ["Balance"] });
      queryClient.invalidateQueries({ queryKey: ["ReserveList"] });
      if (data.value.reserves.length > 0) {
        setReserves(data.value.reserves);
        setPackages(data.value.packageReserves);
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
        }, 3000);
        setisloading(false);
      } else {
        setReserves(null);
        setisloading(false);
      }
    },
    onError(error, variables, context) {
      redirect("/");
    },
  });
  if (step == 0) {
    Verfiy.mutate(searchParams.Authority);
    setstep(1);
  }

  return (
    <StrictMode>
      <MainLayout>
        {showConfetti && (
          <Confetti
            width={width}
            height={height}
            numberOfPieces={400}
            gravity={0.3}
            colors={[
              "#f44336",
              "#e91e63",
              "#9c27b0",
              "#673ab7",
              "#3f51b5",
              "#2196f3",
              "#03a9f4",
              "#00bcd4",
              "#009688",
              "#4CAF50",
              "#8BC34A",
              "#CDDC39",
              "#FFEB3B",
              "#FFC107",
              "#FF9800",
              "#FF5722",
            ]}
          />
        )}
        <div className="w-full max-w-[890px] mx-auto py-12 flex items-center justify-center flex-col gap-6">
          {Reserves && Reserves?.length > 0 ? (
            <React.Fragment>
              <div className="w-fit px-10 py-7 rounded-2xl bg-success-400/20 relative ">
                <div className="w-8 h-8 bg-white rounded-full absolute -left-[16px] top-1/2 -translate-y-1/2 transform"></div>
                <div className="w-8 h-8 bg-white rounded-full absolute -right-[16px] top-1/2 -translate-y-1/2 transform"></div>
                <div className="p-4 rounded-full bg-white text-success-600 w-fit absolute -top-1/2 left-1/2 -translate-x-1/2 ">
                  <BagTick2 size="32" variant="Bold" />
                </div>
                <h2 className="text-success-600 ">
                  بلیط شما با موفقیت رزرو شد
                </h2>
              </div>
              {searchParams.Status !== "NOK" &&
                Reserves?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full border border-gray-50 rounded-2xl   px-6 pb-6"
                    >
                      <div className="flex items-center flex-col  justify-center gap-6 py-4 ">
                        <QRCodeSVG
                          value={"https://dev.funicket.ir/Favicon/Favicon.png"}
                          size={128}
                          bgColor={"#ffffff"}
                          fgColor={"#000000"}
                          level={"H"}
                          includeMargin={false}
                          imageSettings={{
                            src: "https://dev.funicket.ir/Favicon/Favicon.png",
                            x: undefined,
                            y: undefined,
                            height: 30,
                            width: 30,
                            excavate: true,
                          }}
                        />
                        <div className="py-b flex items-center justify-center gap-4  flex-col">
                          <h1 className="w-full truncate text-center">
                            {item.sportComplexService.name}{" "}
                            {item.sportComplex.name}
                          </h1>
                          <h3 className="text-third-600">
                            کد رزرو : {item.reserveRefNumber}
                          </h3>
                        </div>
                        {/* <div></div> */}
                      </div>
                      <div className="pt-4 border-t border-dashed border-gray-50">
                        <h3 className="font-semibold text-gray-400">
                          جزئیات رزرو بلیط
                        </h3>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:items-center md:content-center gap-4  pt-8 py-4 ">
                          <div className="flex flex-col items-center gap-4 md:border-l border-b md:border-b-0 pb-2 md:pb-0 border-gray-50">
                            <div className="flex items-center gap-2">
                              <Image
                                src={"/Icons/Gender.svg"}
                                width={24}
                                height={24}
                                alt="gendericon"
                              />
                              <p className="text-gray-400">نوع رزرو</p>
                            </div>
                            <p>{UserTypeData[item.type].name}</p>
                          </div>
                          <div className="flex flex-col items-center gap-4 md:border-l border-b md:border-b-0 pb-2 md:pb-0 border-gray-50">
                            <div className="flex items-center gap-2">
                              <Calendar
                                size="24"
                                className="text-gray-200"
                                variant="Bold"
                              />
                              <p className="text-gray-400">تاریخ</p>
                            </div>
                            <p>{item.date}</p>
                          </div>
                          <div className="flex flex-col items-center gap-4 md:border-l border-b md:border-b-0 pb-2 md:pb-0 border-gray-50">
                            <div className="flex items-center gap-2">
                              <Clock
                                size="24"
                                className="text-gray-200"
                                variant="Bold"
                              />
                              <p className="text-gray-400">سانس رزرو</p>
                            </div>
                            <p>{item.sans}</p>
                          </div>
                          <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Ticket
                                size="24"
                                className="text-gray-200"
                                variant="Bold"
                              />
                              <p className="text-gray-400">تعداد بلیط</p>
                            </div>
                            <p>{item.count}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {searchParams.Status !== "NOK" &&
                packages?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full border border-gray-50 rounded-2xl   px-6 pb-6"
                    >
                      <div className="flex items-center flex-col  justify-center gap-6 py-4 ">
                        <QRCodeSVG
                          value={"https://dev.funicket.ir/Favicon/Favicon.png"}
                          size={128}
                          bgColor={"#ffffff"}
                          fgColor={"#000000"}
                          level={"H"}
                          includeMargin={false}
                          imageSettings={{
                            src: "https://dev.funicket.ir/Favicon/Favicon.png",
                            x: undefined,
                            y: undefined,
                            height: 30,
                            width: 30,
                            excavate: true,
                          }}
                        />
                        <div className="py-b flex items-center justify-center gap-4  flex-col">
                          <h1 className="w-full truncate text-center">
                            {item.sportComplexService.name}{" "}
                            {item.sportComplex.name}
                          </h1>
                          <h3 className="text-third-600">
                            کد رزرو : {item.reserveRefNumber}
                          </h3>
                        </div>
                        {/* <div></div> */}
                      </div>
                      <div className="pt-4 border-t border-dashed border-gray-50">
                        <h3 className="font-semibold text-gray-400">
                          جزئیات رزرو بلیط
                        </h3>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:items-center md:content-center gap-4  pt-8 py-4 ">
                          <div className="flex flex-col items-center gap-4 md:border-l border-b md:border-b-0 pb-2 md:pb-0 border-gray-50">
                            <div className="flex items-center gap-2">
                              <Image
                                src={"/Icons/Gender.svg"}
                                width={24}
                                height={24}
                                alt="gendericon"
                              />
                              <p className="text-gray-400">نوع رزرو</p>
                            </div>
                            {/* <p>{UserTypeData[item.type].name}</p> */}
                          </div>
                          <div className="flex flex-col items-center gap-4 md:border-l border-b md:border-b-0 pb-2 md:pb-0 border-gray-50">
                            <div className="flex items-center gap-2">
                              <Calendar
                                size="24"
                                className="text-gray-200"
                                variant="Bold"
                              />
                              <p className="text-gray-400">تاریخ</p>
                            </div>
                            {/* <p>{item.date}</p> */}
                          </div>
                          <div className="flex flex-col items-center gap-4 md:border-l border-b md:border-b-0 pb-2 md:pb-0 border-gray-50">
                            <div className="flex items-center gap-2">
                              <Clock
                                size="24"
                                className="text-gray-200"
                                variant="Bold"
                              />
                              <p className="text-gray-400">سانس رزرو</p>
                            </div>
                            {/* <p>{item.sans}</p> */}
                          </div>
                          <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Ticket
                                size="24"
                                className="text-gray-200"
                                variant="Bold"
                              />
                              <p className="text-gray-400">تعداد بلیط</p>
                            </div>
                            <p>{item.count}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </React.Fragment>
          ) : !isloading && !Reserves && searchParams.Status === "NOK" ? (
            <div className="w-fit px-10 py-7 rounded-2xl bg-error-400/20 relative ">
              <div className="w-8 h-8 bg-white rounded-full absolute -left-[16px] top-1/2 -translate-y-1/2 transform"></div>
              <div className="w-8 h-8 bg-white rounded-full absolute -right-[16px] top-1/2 -translate-y-1/2 transform"></div>
              <div className="p-4 rounded-full bg-white text-error-600 w-fit absolute -top-1/2 left-1/2 -translate-x-1/2 ">
                <BagCross size="32" variant="Bold" />
              </div>
              <h2 className="text-error-600 ">مشکلی در پرداخت پیش امده است</h2>
            </div>
          ) : (
            <div className="w-full min-h-[400px] flex items-center justify-center">
              {" "}
              <svg className="h-16 w-16 animate-spin" viewBox="3 3 18 18">
                <path
                  className="fill-primary-400/20"
                  d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                ></path>
                <path
                  className="fill-primary-400"
                  d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                ></path>
              </svg>{" "}
            </div>
          )}
          <Link href={"/"}>
            <PrimaryBtn>بازگشت به صفحه اصلی</PrimaryBtn>
          </Link>
        </div>
      </MainLayout>
    </StrictMode>
  );
}

export default Page;
