"use client"
import SuccessBtn from '@/components/Layout/Buttons/SuccessBtn';
import Breadcrumb from '@/components/Layout/breadcrumb';
import CmDays from '@/util/data/Date/CmDays';
import { DaysOfWeekArray } from '@/util/data/WorkDayTime';
import useGetSingleService from '@/util/hook/SingleService/useGetSingleService'
import { Clock, Heart, Location, Share } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaStar } from 'react-icons/fa6';
import { NumericFormat } from 'react-number-format';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function MainServiceInfo({ id }: { id: string }) {
    const data = useGetSingleService({ id: id })
    const Data = data?.data?.value as SingleProductPage | undefined
    return (
        <div className='Container flex flex-col gap-8 pt-8'>
            <div className='w-full flex items-center justify-between'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/dashboard/mycomplex">خانه
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href={`/service/${id}`}>
                        {data.isSuccess ? (
                            Data?.name
                        ) : (
                            <div className="h-4 w-[150px] animate-pulse bg-gray-200 rounded-2xl"></div>
                        )}
                    </Breadcrumb.Item>
                    {/* <Breadcrumb.Item href={`/${params.id}/documents`}>
                        اطلاعات و عکس های مجموعه
                    </Breadcrumb.Item> */}
                </Breadcrumb>
                <div className='lg:flex-row flex-col flex items-center gap-4'>
                    <button className='px-6 py-3 border hover:shadow-CMSHADOW duration-150 border-gray-100 rounded-2xl text-gray-400 flex items-center gap-2 text-sm font-semibold'>
                        <Share size="24" />
                        <span>اشتراک گذاری</span>
                    </button>
                    <button className='px-6 py-3 border hover:shadow-CMSHADOW duration-150 border-gray-100 rounded-2xl text-gray-400 flex items-center gap-2 text-sm font-semibold'>
                        <Heart size="24" />
                        <span>افزودن به علاقه مندی ها</span>
                    </button>
                </div>
            </div>
            <div className='w-full h-full flex items-start gap-4'>
                <div className='w-[45%]'>
                    {data.isSuccess ? <div className='flex flex-col '>
                        <div className='flex flex-col gap-8'>
                            <div className='flex-col flex gap-3'>
                                <h1>{Data?.name}</h1>
                                <div className='flex items-center justify-between'>
                                    <div className="w-full flex items-center gap-2 ">
                                        {/* Location */}
                                        <div className="flex items-center border-l border-gray-50 pl-2 gap-1">
                                            <Location size="20" className="text-gray-300" variant="Bold" />
                                            <h4>{Data?.location}</h4>
                                        </div>
                                        <Link href={`category/${Data?.service.id}`} className="group/item border-l border-gray-50 pl-2">
                                            <h4 className="group-hover/item:text-third-500 group-hover/item:underline duration-150">
                                                {Data?.service.name}
                                            </h4>
                                        </Link>
                                        <div className="flex items-center gap-2 justify-center">
                                            <h5 className="leading-[12px]">{Data?.rate}</h5>
                                            <FaStar className="text-secondary-600" size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ساعت کاری مجموعه  */}
                            <div className='w-full border border-gray-50 flex items-start flex-col  rounded-3xl p-8'>
                                <div className=' flex items-center gap-6 text-gray-200'>
                                    <Clock size="24" variant="Bold" />
                                    <div className=' flex flex-col gap-2'>
                                        <p className='text-gray-300'>ساعات کاری مجموعه</p>
                                        <h5 className='text-gray-500'>{DaysOfWeekArray[Data ? Data.workHours.fromDayOfWeak : 0].name} تا {DaysOfWeekArray[Data ? Data.workHours.toDayOfWeak : 0].name} از ساعت {Data?.workHours.start} الی {Data?.workHours.end}</h5>
                                    </div>
                                </div>

                            </div>
                            {/* قیمت سرویس  */}
                            <div className='flex items-end  justify-between'>
                                {/* قیمت */}
                                <div className='flex flex-col flex-1 gap-2 items-start justify-between'>
                                    {Data?.hasDiscount && <h3 className='text-gray-400 line-through'>
                                        <NumericFormat
                                            value={Data?.price}
                                            displayType={"text"}
                                            className='text-gray-400 line-through'
                                            thousandSeparator={","}
                                        />
                                        {" تومان "}
                                    </h3>
                                    }
                                    <div className='flex items-center gap-2 '>
                                        <h5>شروع قیمت از</h5>
                                        <h2 className='text-third-500'> <NumericFormat
                                            value={Data?.hasDiscount ? Data?.priceAfterDiscount : Data?.price}
                                            displayType={"text"}
                                            className='text-2xl'
                                            thousandSeparator={","}
                                        />{" تومان "}</h2>
                                    </div>
                                </div>
                                {/* درصد تخفیف */}
                                {Data?.hasDiscount &&
                                    <div className='py-4 px-8 flex items-center justify-center gap-2 flex-col w-fit rounded-2xl bg-error-400'>
                                        <h2 className='text-white'>تخفیف تا</h2>
                                        <span className=' text-white text-4xl font-bold'>%{Data?.discountPresentage}</span>
                                    </div>}

                            </div>
                            {/* دکمه خرید */}
                            <SuccessBtn>خرید</SuccessBtn>
                        </div>
                    </div>
                        : null}
                </div>
                <div className='flex flex-1  max-w-[55%]'>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{
                            delay: 5500,
                            disableOnInteraction: false,
                        }}
                        modules={[FreeMode, Navigation, Autoplay]}
                        navigation={{
                            nextEl: ".NextSlide",
                            prevEl: ".PrevSlide",
                        }}
                        className='w-full h-full rounded-2xl'
                    >
                        {Data?.filePathes.map((item, index) => {
                            return (
                                <SwiperSlide key={index} >
                                    <div className='relative  w-full h-full aspect-w-8 aspect-h-5'>
                                        <Image
                                            alt={item}
                                            fill
                                            src={`${process.env.NEXT_PUBLIC_API_BASE_URLIMAGE}${item}`}
                                            sizes="(min-width: 640px) 90vw, 100vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                        {/* <div className="lg:hidden max-w-[450px] relative mx-auto">
                            <BtnSlider Gallerymode />
                        </div> */}
                    </Swiper>
                </div>
            </div>
        </div >
    )
}

export default MainServiceInfo