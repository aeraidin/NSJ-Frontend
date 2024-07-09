import { RemoveCart } from "@/util/api/Cart/RemoveCart";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Calendar, Location, Clock, Trash } from "iconsax-react";
import Image from "next/image";
import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import Toast from "../Alerts/Toast";
import { UpdateCount } from "@/util/api/Cart/UpdateCount";
import Link from "next/link";
import { UserTypeData } from "@/util/Data/UserTypeData";
import { persianToSlug } from "@/util/persianToSlug";

function CartProductCards({ data }: { data: CartItems }) {
    const queryClient = useQueryClient();
    const [Result, setResult] = useState(false);
    const [UpdateCountResult, setUpdateCountResult] = useState(false);
    const DeleteCartHandler = useMutation({
        mutationFn: RemoveCart,
        onSuccess(data, variables, context) {
            queryClient.invalidateQueries({ queryKey: ["Cart"] });
            setResult(true);
        },
        onError(error, variables, context) {
            setResult(true);
        },
    });

    const UpdateCartCountHandler = useMutation({
        mutationFn: UpdateCount,
        onSuccess(data, variables, context) {
            queryClient.invalidateQueries({ queryKey: ["Cart"] });
            //   setResult(true);
        },
        onError(error, variables, context) {
            setUpdateCountResult(true);
        },
    });
    return (
        <>
            <Toast
                messege={
                    DeleteCartHandler.error
                        ? (DeleteCartHandler.error as unknown as string)
                        : "با موفقیت حذف شد"
                }
                Close={() => setResult(false)}
                isError={DeleteCartHandler.isError}
                isSuccess={DeleteCartHandler.isSuccess}
                Result={Result}
            />
            <Toast
                messege={
                    UpdateCartCountHandler.error
                        ? (UpdateCartCountHandler.error as unknown as string)
                        : ""
                }
                Close={() => setUpdateCountResult(false)}
                isError={UpdateCartCountHandler.isError}

                Result={UpdateCountResult}
            />
            <div className="w-full border border-gray-50 p-7 rounded-2xl hover:border-gray-100 hover:shadow-CMSHADOW duration-200 relative ">
                <button
                    onClick={() => DeleteCartHandler.mutate(data.id)}
                    className="border border-error-500/30 p-2 rounded-xl bg-white hover:bg-error-600 hover:text-white text-error-600 absolute left-3 top-5 duration-200 z-[12]"
                >
                    {DeleteCartHandler.isPending ? (
                        <svg className="h-6 w-6 animate-spin" viewBox="3 3 18 18">
                            <path
                                className="fill-error-400/20"
                                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                            ></path>
                            <path
                                className="fill-error-400"
                                d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                            ></path>
                        </svg>
                    ) : (
                        <Trash size="24" variant="Bold" />
                    )}
                </button>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5 pb-7 border-b border-dashed border-gray-50">
                    <Link href={`/service/${persianToSlug(data.serviceName)}-${persianToSlug(data.sportComplex.name)}-${data.service.id}`}>

                        <div className="aspect-w-8 aspect-h-5 overflow-hidden relative rounded-2xl">
                            <Image
                                fill
                                className="object-cover group-hover:scale-110 duration-150 "
                                alt={data.filePath}
                                src={`${process.env.NEXT_PUBLIC_API_BASE_URLIMAGE}${data.filePath}`}
                                sizes="90vw"
                            />
                        </div>
                    </Link>
                    <div className="flex flex-col items-start justify-between">
                        <div className="flex flex-col gap-4">
                            <Link href={`service/${persianToSlug(data.serviceName)}-${persianToSlug(data.sportComplex.name)}-${data.service.id}`}><h2>{data.serviceName} {data.sportComplex.name}</h2></Link>
                            <div className="flex items-center gap-2">
                                <Location size="24" className="text-gray-300" variant="Bold" />
                                <h5>{data.location}</h5>
                            </div>
                        </div>
                        <div className="w-full flex items-end justify-between">
                            <div className="flex items-center gap-2">
                                <p>تعداد بلیط</p>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => UpdateCartCountHandler.mutate({ id: data.id, count: data.count + 1 })} disabled={UpdateCartCountHandler.isPending} className={`CartAddButtons `}>+</button>
                                    <p>{data.count}</p>
                                    <button onClick={() => UpdateCartCountHandler.mutate({ id: data.id, count: data.count - 1 })} disabled={UpdateCartCountHandler.isPending} className="CartAddButtons">-</button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 items-end">
                                <div
                                    className={`flex items-center gap-2  ${data.hasDiscount ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    <div className="px-2 py-1  bg-error-500 rounded-xl">
                                        <h5 className="text-white leading-4">
                                            {Math.floor(data.discountPresentage)}٪
                                        </h5>
                                    </div>
                                    <h5 className="text-gray-200 line-through">
                                        {" "}
                                        <NumericFormat
                                            value={data.price}
                                            displayType={"text"}
                                            thousandSeparator={","}
                                        />{" "}
                                    </h5>
                                </div>
                                <h2 className="text-third-500">
                                    {" "}
                                    <NumericFormat
                                        value={
                                            data.hasDiscount ? data.priceAfterDiscount : data.price
                                        }
                                        displayType={"text"}
                                        thousandSeparator={","}
                                    />
                                    {" تومان "}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <h3 className="font-semibold text-gray-400">جزئیات رزرو بلیط</h3>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 md:items-center md:content-center gap-4  pt-8 py-4 ">
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
                            <p>{UserTypeData[data.clientType].name}</p>
                        </div>
                        <div className="flex flex-col items-center gap-4 md:border-l border-b md:border-b-0 pb-2 md:pb-0 border-gray-50">
                            <div className="flex items-center gap-2">
                                <Calendar size="24" className="text-gray-200" variant="Bold" />
                                <p className="text-gray-400">تاریخ</p>
                            </div>
                            <p>{data.date}</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2">
                                <Clock size="24" className="text-gray-200" variant="Bold" />
                                <p className="text-gray-400">سانس رزرو</p>
                            </div>
                            <p>{data.endTime + "-" + data.startTime}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartProductCards;

export function CartProductCardsLoading() {
    return (
        <div className=" w-full h-fit flex p-8  flex-col  rounded-2xl border border-gray-50 animate-pulse">
            <div className=" w-full flex gap-6 flex-col md:flex-row lg:flex-col xl:flex-row h-full">
                <div className=" w-full bg-gray-300 rounded-[20px] h-[270px]  "></div>

                <div className=" w-full  flex-col flex gap-y-8 xl:gap-y-36 h-fit xl:h-full">
                    <div className=" w-full gap-y-8 flex flex-col">
                        <div className=" bg-gray-200 w-full max-w-[140px] rounded-2xl h-6"></div>

                        <div className=" flex gap-x-3">
                            <div className=" rounded-full h-6 w-6 bg-gray-200 "></div>
                            <div className=" bg-gray-200 w-full max-w-[140px] rounded-2xl h-6"></div>
                        </div>
                    </div>

                    <div className=" flex w-full justify-start gap-x-3">
                        <div className=" w-full flex justify-between">
                            <div className=" w-full flex gap-x-3">
                                <p className="text-gray-400">تعداد بلیط</p>

                                <div className=" bg-gray-200 w-full max-w-[70px] rounded-2xl h-6"></div>
                            </div>

                            <div className=" w-full gap-x-3 flex">
                                <div className=" bg-gray-200 w-full max-w-[150px] rounded-2xl h-6"></div>
                                <p className="text-gray-400 text-xl">تومان</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-full border-t border-gray-50 border-dashed my-4"></div>
            <div className=" w-full h-fit mb-6 ">
                <h3 className="font-semibold text-gray-400">جزئیات رزرو بلیط</h3>
            </div>

            <div className=" w-full flex  justify-between px-8 lg:px-16">
                <div className=" flex flex-col gap-y-2">
                    <div className=" flex gap-x-2">
                        <div className=" bg-gray-200  h-6 w-6 rounded-full"></div>
                        <p className="text-gray-400">نوع رزرو</p>
                    </div>
                    <div className=" bg-gray-200 w-full max-w-[110px] rounded-2xl h-6"></div>
                </div>

                <div className=" flex flex-col gap-y-2">
                    <div className=" flex gap-x-2">
                        <div className=" bg-gray-200  h-6 w-6 rounded-full"></div>
                        <p className="text-gray-400">تاریخ</p>
                    </div>
                    <div className=" bg-gray-200 w-full max-w-[120px] rounded-2xl h-6"></div>
                </div>

                <div className=" flex flex-col gap-y-2">
                    <div className=" flex gap-x-2">
                        <div className=" bg-gray-200  h-6 w-6 rounded-full"></div>
                        <p className="text-gray-400">سانس رزرو</p>
                    </div>
                    <div className=" bg-gray-200 w-full max-w-[110px] rounded-2xl h-6"></div>
                </div>
            </div>
        </div>
    );
}
