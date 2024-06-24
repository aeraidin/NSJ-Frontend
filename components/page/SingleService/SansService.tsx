"use client"
import Toast from '@/components/Layout/Alerts/Toast'
import SuccessBtn from '@/components/Layout/Buttons/SuccessBtn'
import { AddToCart } from '@/util/api/Cart/AddToCart'
import { UserTypeData } from '@/util/Data/UserTypeData'
import { DaysOfWeekArray } from '@/util/Data/WorkDayTime'
import useGetSingleServiceSans from '@/util/hook/SingleService/useGetSingleServiceSans'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Calendar, Clock, Timer1 } from 'iconsax-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-collapse'
import { NumericFormat } from 'react-number-format'

function SansService({ id }: { id: string }) {
    const [Result, setResult] = useState(false)
    const data = useGetSingleServiceSans({ id: id })
    const [SelectedClient, setSelectedClient] = useState<Sans | null>(null)
    const [expandedRow, setexpandedRow] = useState<number | null>(null)
    const Data = data?.data?.value.list as Sans[] | undefined
    const queryClient = useQueryClient();
    const router = useRouter()
    useEffect(() => {
        if (Data) {
            setSelectedClient({ clientType: Data[0].clientType, days: Data[0].days })
        }
    }, [Data])
    const CollapseHandler = (id: number) => {
        setexpandedRow((prev) => (prev === id ? null : id));
    };
    const AddToCartHandler = useMutation({
        mutationFn: AddToCart,
        onSuccess(data, variables, context) {
            queryClient.invalidateQueries({ queryKey: ["Cart"] });
            setResult(true)
            setTimeout(() => {
                router.replace('/cart')
            }, 1000);
        },
        onError(error, variables, context) {
            setResult(true)
        },
    })
    return (
        <>
            <Toast messege={AddToCartHandler.error ? (AddToCartHandler.error as unknown as string) : "با موفقیت به سبد خرید اضافه شد"} Close={() => setResult(false)} isError={AddToCartHandler.isError} isSuccess={AddToCartHandler.isSuccess} Result={Result} />
            <div id='sans' className="Container py-6 lg:py-10">
                <h2 className="text-gray-500 font-semibold ">رزرو</h2>
                <div className='border-b flex items-center gap-4 border-gray-50'>
                    {Data ? Data.map((item, index) => {
                        return <button onClick={() => setSelectedClient({ clientType: item.clientType, days: item.days })} className={`px-10 py-6 border-b-2 font-semibold ${SelectedClient?.clientType === item.clientType ? "text-third-500 border-third-500" : "border-transparent text-gray-300"} duration-200`} key={index}>
                            {UserTypeData[item.clientType].name}
                        </button>
                    }) : <React.Fragment>
                        <button className={`px-10 py-6 border-b-2 font-semibold text-third-500 border-third-500 duration-200`}>
                            بانوان
                        </button>
                        <button className={`px-10 py-6 border-b-2 font-semibold border-transparent text-gray-300 duration-200`}>
                            اقایان
                        </button>
                    </React.Fragment>}
                </div>
                <div className='py-6 flex flex-col gap-4'>
                    {SelectedClient ? SelectedClient?.days.map((item, index) => {
                        return <div key={index} className='w-full border flex flex-col border-gray-50 hover:border-gray-100 hover:shadow-CMSHADOW duration-150 rounded-2xl p-4 lg:py-6 lg:px-8'>
                            <div className='flex flex-col gap-6 lg:flex-row items-start lg:items-center justify-between  '>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-center gap-2'>
                                        <Calendar size="24" className='text-gray-300' />
                                        <p>{DaysOfWeekArray[item.dayOfWeek].name} {item.date}</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Clock size="24" className='text-gray-300' />
                                        <p className='text-gray-400'> مدت زمان هر سانس: <span className='text-gray-600'>{item.priod} دقیقه</span> </p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Image src={"/Icons/durationSans.svg"} width={24} height={24} alt='icons' />
                                        <p className='text-gray-400'> مدت زمان استفاده <span className='text-gray-600'>{item.exp} روز پس از خرید</span></p>
                                    </div>
                                </div>
                                <div className='lg:hidden'>
                                    <Collapse
                                        isOpened={index === expandedRow}
                                        className="">
                                        <div className='text-gray-500 flex items-center gap-4 px-6'>
                                            <Image src={"/Icons/durationClock.svg"} width={24} height={24} alt='durationClock' />
                                            <p className='text-gray-400'>سانس مورد نظر را انتخاب کنید</p>
                                        </div>
                                        <div className='flex items-center flex-wrap gap-3 py-4 px-6'>
                                            {item.details.map((item, index) => {
                                                return (
                                                    <button onClick={() => AddToCartHandler.mutate(item.id)} key={index} className=' relative overflow-hidden h-8 text-sm lg:text-base group lg:h-10 border flex items-center gap-3 border-third-400 hover:border-transparent rounded-lg   hover:shadow px-4 py-2  duration-200 '>
                                                        <p className='text-third-400 group-hover:opacity-0  group-hover:-translate-y-full duration-200'>{(item.end) + "-" + (item.start)}</p>
                                                        <div className='group-hover:opacity-100 h-8 w-full bg-success-600 text-center flex items-center justify-center lg:h-10 opacity-0 absolute top-full  group-hover:top-1/2 left-1/2 transform -translate-x-1/2 group-hover:-translate-y-1/2 duration-200 '>
                                                            {AddToCartHandler.isPending ?
                                                                <svg className="h-6 w-6 animate-spin" viewBox="3 3 18 18">
                                                                    <path
                                                                        className="fill-success-400/20"
                                                                        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                                                                    ></path>
                                                                    <path
                                                                        className="fill-success-400"
                                                                        d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                                                                    ></path>
                                                                </svg>
                                                                :
                                                                <p className="text-white">خرید</p>
                                                            }
                                                        </div>


                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </Collapse>
                                </div>
                                <div className='flex flex-1 w-full flex-col lg:flex-row items-start lg:items-center gap-4 '>
                                    <div className='w-full flex items-center justify-between lg:justify-end'>
                                        <p className='lg:hidden'>قیمت:</p>
                                        <p className='flex items-center gap-1'><NumericFormat
                                            value={item.price}
                                            displayType={"text"}
                                            thousandSeparator={","}

                                        />
                                            {" تومان "}
                                            {item.discountPresentage > 0 ? <div className="px-4 py-1 mx-3  bg-error-500 rounded-xl">
                                                <h5 className="text-white leading-4"> {Math.floor(item.discountPresentage)}٪</h5>
                                            </div> : null}
                                        </p>
                                    </div>
                                    <div className='w-full lg:max-w-[166px]'>
                                        <SuccessBtn onClick={() => CollapseHandler(index)}>رزرو بلیط</SuccessBtn>
                                    </div>
                                </div>
                            </div>
                            <div className='hidden lg:block'>
                                <Collapse
                                    isOpened={index === expandedRow}
                                    className="">
                                    <div className='text-gray-500 flex items-center gap-4 px-6 pt-6'>
                                        <Image src={"/Icons/durationClock.svg"} width={24} height={24} alt='durationClock' />
                                        <p className='text-gray-400'>سانس مورد نظر را انتخاب کنید</p>
                                    </div>
                                    <div className='flex items-center flex-wrap gap-3 py-4 px-6'>
                                        {item.details.map((item, index) => {
                                            return (
                                                <button disabled={item.isGone} onClick={() => AddToCartHandler.mutate(item.id)} key={index} className=' disabled:opacity-25 disabled:cursor-not-allowed  '>
                                                    <div className=" relative overflow-hidden h-8 text-sm lg:text-base group lg:h-10 border flex items-center gap-3 border-third-400 hover:border-transparent rounded-lg   hover:shadow px-4 py-2  duration-200">
                                                        <p className='text-third-400 group-hover:opacity-0  group-hover:-translate-y-full duration-200'>{(item.end) + "-" + (item.start)}</p>
                                                        {/* ${AddToCartHandler.isPending ? "top-1/2 -translate-y-1/2 opacity-100" : " group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100"} */}
                                                        <div className={` h-8 w-full bg-success-600 text-center flex items-center justify-center lg:h-10 opacity-0 absolute top-full  left-1/2 transform -translate-x-1/2 duration-200 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100 `}>
                                                            {AddToCartHandler.isPending ?
                                                                <svg className="h-6 w-6 animate-spin" viewBox="3 3 18 18">
                                                                    <path
                                                                        className="fill-success-400/20"
                                                                        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                                                                    ></path>
                                                                    <path
                                                                        className="fill-success-400"
                                                                        d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                                                                    ></path>
                                                                </svg>
                                                                :
                                                                <p className="text-white">خرید</p>
                                                            }
                                                        </div>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    }) : <div className='flex flex-col gap-2 animate-pulse'>
                        <div className='w-full border flex flex-col border-gray-50 hover:border-gray-100 hover:shadow-CMSHADOW duration-150 rounded-2xl p-4 lg:py-6 lg:px-8 h-[100px] bg-gray-50'></div>
                        <div className='w-full border flex flex-col border-gray-50 hover:border-gray-100 hover:shadow-CMSHADOW duration-150 rounded-2xl p-4 lg:py-6 lg:px-8 h-[100px] bg-gray-50'></div>
                        <div className='w-full border flex flex-col border-gray-50 hover:border-gray-100 hover:shadow-CMSHADOW duration-150 rounded-2xl p-4 lg:py-6 lg:px-8 h-[100px] bg-gray-50'></div>
                    </div>}

                </div>
            </div>
        </>
    )
}

export default SansService