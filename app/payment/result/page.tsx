"use client"
import PrimaryBtn from '@/components/Layout/Buttons/PrimaryBtn';
import MainLayout from '@/components/Layout/MainLayout';
import { UserTypeData } from '@/util/Data/UserTypeData';
import { VerifyPayment } from '@/util/api/Cart/VerifyPayment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BagCross, BagTick2, Calendar, Clock, Ticket } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'
interface reserve {
    type: number,
    date: string,
    sans: string,
    count: number
}
function Page({
    searchParams,
}: {
    searchParams: { Authority: string, Status: string };
}) {
    const [isloading, setisloading] = useState(true)
    const [Reserves, setReserves] = useState<null | reserve[]>(null)
    // if (!searchParams.Authority || !searchParams.Status) {
    //     redirect("/");
    // }
    const queryClient = useQueryClient();
    const Verfiy = useMutation({
        mutationFn: VerifyPayment, onSuccess(data, variables, context) {
            queryClient.invalidateQueries({ queryKey: ["Cart"] });
            queryClient.invalidateQueries({ queryKey: ["Balance"] });
            if (data.value.reserves.length > 0) {
                setReserves(data.value.reserves)
                setisloading(false)
            } else {
                setReserves(null)
                setisloading(false)
            }
        },
        onError(error, variables, context) {
            redirect("/");
        },
    })
    useEffect(() => {
        Verfiy.mutate(searchParams.Authority)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <MainLayout>
            <div className='w-full max-w-[890px] mx-auto py-12 flex items-center justify-center flex-col gap-6'>
                {Reserves ? <React.Fragment>
                    <div className='w-fit px-10 py-7 rounded-2xl bg-success-400/20 relative '>
                        <div className='w-8 h-8 bg-white rounded-full absolute -left-[16px] top-1/2 -translate-y-1/2 transform'></div>
                        <div className='w-8 h-8 bg-white rounded-full absolute -right-[16px] top-1/2 -translate-y-1/2 transform'></div>
                        <div className='p-4 rounded-full bg-white text-success-600 w-fit absolute -top-1/2 left-1/2 -translate-x-1/2 '>
                            <BagTick2 size="32" variant="Bold" />
                        </div>
                        <h2 className='text-success-600 '>بلیت شما با موفقیت رزرو شد</h2>
                    </div>
                    {Reserves?.map((item, index) => {
                        return <div key={index} className='w-full border border-gray-50 rounded-2xl  p-6'>
                            <div className="pt-4">
                                <h3 className="font-semibold text-gray-400">جزئیات رزرو بلیت</h3>
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
                                            <Calendar size="24" className="text-gray-200" variant="Bold" />
                                            <p className="text-gray-400">تاریخ</p>
                                        </div>
                                        <p>{item.date}</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-4 md:border-l border-b md:border-b-0 pb-2 md:pb-0 border-gray-50">
                                        <div className="flex items-center gap-2">
                                            <Clock size="24" className="text-gray-200" variant="Bold" />
                                            <p className="text-gray-400">سانس رزرو</p>
                                        </div>
                                        <p>{item.sans}</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <Ticket size="24" className="text-gray-200" variant="Bold" />
                                            <p className="text-gray-400">تعداد بلیت</p>
                                        </div>
                                        <p>{item.count}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </React.Fragment>
                    : !isloading && Reserves ? <div className='w-fit px-10 py-7 rounded-2xl bg-error-400/20 relative '>
                        <div className='w-8 h-8 bg-white rounded-full absolute -left-[16px] top-1/2 -translate-y-1/2 transform'></div>
                        <div className='w-8 h-8 bg-white rounded-full absolute -right-[16px] top-1/2 -translate-y-1/2 transform'></div>
                        <div className='p-4 rounded-full bg-white text-error-600 w-fit absolute -top-1/2 left-1/2 -translate-x-1/2 '>
                            <BagCross size="32" variant="Bold" />
                        </div>
                        <h2 className='text-error-600 '>مشکلی در پرداخت پیش امده است</h2>
                    </div> : null}
                <Link href={"/"}><PrimaryBtn>بازگشت به صفحه اصلی</PrimaryBtn></Link>
            </div>
        </MainLayout>
    )
}

export default Page