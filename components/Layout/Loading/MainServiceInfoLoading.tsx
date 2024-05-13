"use client"
import SuccessBtn from '@/components/Layout/Buttons/SuccessBtn';
import Breadcrumb from '@/components/Layout/breadcrumb';
import { DaysOfWeekArray } from '@/util/Data/WorkDayTime';
import { Clock, Heart, Location, Share } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaStar } from 'react-icons/fa6';
import { NumericFormat } from 'react-number-format';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link as ReactScroll } from 'react-scroll'
function MainServiceInfoLoading() {

    return (
        <div className='flex flex-col h-full justify-between gap-4 animate-pulse'>
            <div className='flex flex-col gap-5'>
                <div className='flex-col flex gap-3'>
                    {/* Name */}
                    <div className='w-full rounded-lg bg-gray-200 h-5 max-w-[80%]'></div>
                    <div className='flex items-center justify-between'>
                        <div className="w-full flex items-center gap-2 ">
                            {/* Location */}
                            <div className="flex items-center border-l border-gray-50 pl-2 gap-1">
                                <Location size="20" className="text-gray-300" variant="Bold" />
                                <div className='w-[150px] h-4 bg-gray-200 rounded-lg'></div>
                            </div>
                            <div className='w-full max-w-[150px] h-4 bg-gray-200 rounded-lg'>

                            </div>
                            <div className="flex items-center gap-2 justify-center">
                                <div className="w-4 h-4 rounded-lg bg-gray-200"></div>
                                <FaStar className="text-secondary-600" size={20} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* ساعت کاری مجموعه  */}
                <div className='w-full border border-gray-50 flex items-start flex-col rounded-3xl px-6 lg:px-8 py-6'>
                    <div className=' flex items-center gap-4 lg:gap-6 text-gray-200 w-full border-b border-b-gray-50 pb-4'>
                        <Image src={"/Icons/Gender.svg"} width={24} height={24} alt='gendericon' />
                        <div className='flex flex-col gap-2'>
                            <p className='text-gray-300 '>نوع پذیرش</p>
                            <div className='w-full h-4 rounded-lg bg-gray-200'></div>
                        </div>
                    </div>
                    <div className=' flex items-center gap-4 lg:gap-6 text-gray-200 pt-4'>
                        <Clock size="24" variant="Bold" />
                        <div className=' flex flex-col gap-2'>
                            <p className='text-gray-300'>ساعات کاری مجموعه</p>
                            <div className='w-full  h-4 rounded-lg bg-gray-200'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                {/* قیمت سرویس  */}

                <div className='flex items-end  justify-between'>
                    {/* قیمت */}
                    <div className='flex flex-col flex-1 gap-2 items-start justify-between'>

                        <div className=' w-full flex items-center gap-2 '>
                            <h5>شروع قیمت از</h5>
                            <div className='bg-third-400 w-full max-w-[200px] rounded-2xl h-4'></div>
                        </div>
                    </div>
                    {/* درصد تخفیف */}
                    {/* {Data?.hasDiscount &&
                        <div className='p-2 lg:py-4 lg:px-8 flex items-center justify-center gap-2 flex-col w-fit rounded-2xl bg-error-500'>
                            <h2 className='text-white'>تخفیف تا</h2>
                            <span className=' text-white text-xl lg:text-4xl font-bold'>%{Data?.discountPresentage}</span>
                        </div>} */}
                </div>
                {/* دکمه خرید */}
                <ReactScroll
                    to={"sans"}
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    delay={0}
                    className="cursor-pointer"
                >
                    <SuccessBtn SpetialBtn>خرید</SuccessBtn>
                </ReactScroll>
            </div>
        </div>

    )
}

export default MainServiceInfoLoading