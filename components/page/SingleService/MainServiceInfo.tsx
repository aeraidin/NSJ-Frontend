"use client"
import SuccessBtn from '@/components/Layout/Buttons/SuccessBtn';
import Breadcrumb from '@/components/Layout/breadcrumb';
import { DaysOfWeekArray } from '@/util/Data/WorkDayTime';
import useGetSingleService from '@/util/hook/SingleService/useGetSingleService'
import { ArrowLeft2, ArrowRight2, Clock, Heart, Location, Share } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa6';
import { NumericFormat } from 'react-number-format';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Link as ReactScroll } from 'react-scroll'
import useGetSingleServiceSans from '@/util/hook/SingleService/useGetSingleServiceSans';
import { UserTypeData } from '@/util/Data/UserTypeData';
import MainServiceInfoLoading from '@/components/Layout/Loading/MainServiceInfoLoading';
import { GoShareAndroid } from "react-icons/go";
import { usePathname } from 'next/navigation';
import Toast from '@/components/Layout/Alerts/Toast';
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ToggleFavorite } from '@/util/api/Favorite/ToggleFavorite';

function MainServiceInfo({ id }: { id: string }) {
    const data = useGetSingleService({ id: id })
    const Data = data?.data?.value as SingleProductPage | undefined
    const Sans = useGetSingleServiceSans({ id: id })
    const SansData = Sans?.data?.value.list as Sans[] | undefined
    const swiper = useSwiper();
    const [CopyResult, SetCopyResult] = useState(false)
    const [url, seturl] = useState("");
    const pathname = usePathname();
    const queryClient = useQueryClient();
    const ToggleFavoriteApi = useMutation({
        mutationFn: ToggleFavorite,
        onSuccess(data, variables, context) {
            queryClient.invalidateQueries({ queryKey: ["SingleService", id] });
            queryClient.invalidateQueries({ queryKey: ["FavoriteList"] });
        },
        onError(error, variables, context) {
            console.log(error);
        },
    })
    const ToggleFavoriteHandler = () => {
        ToggleFavoriteApi.mutate({ sportComplexServiceId: Number(id) })
    }
    useEffect(() => {
        seturl(window.location.origin + pathname.toString());
    }, [pathname, url]);
    return (
        <>
            <div className='Container flex flex-col  gap-8 pt-8'>
                <div className='w-full flex items-center justify-between'>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">خانه
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href={`/service/${id}`}>
                            {data.isSuccess ? (
                                Data?.name
                            ) : (
                                <div className="h-4 w-[150px] animate-pulse bg-gray-200 rounded-2xl"></div>
                            )}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='lg:flex-row flex-col items-center gap-4 hidden lg:flex'>
                        <motion.button
                            transition={{ type: "spring", stiffness: 400 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                                navigator.clipboard.writeText(url);
                                SetCopyResult(true)
                                setTimeout(() => {
                                    SetCopyResult(false)
                                }, 5000);
                            }} className='px-6 py-3 border  border-gray-100 rounded-2xl cursor-copy text-gray-400 flex items-center gap-2 text-sm font-semibold hover:bg-third-600 hover:text-white  hover:border-transparent'>
                            <GoShareAndroid size="24" />
                            <span>{CopyResult ? "لینک کپی شد ! " : "اشتراک گذاری"}</span>
                        </motion.button>
                        <motion.button
                            onClick={ToggleFavoriteHandler}
                            disabled={ToggleFavoriteApi.isPending}
                            transition={{ type: "spring", stiffness: 400 }}
                            whileTap={{ scale: 0.85 }} className='px-6 py-3 border disabled:cursor-wait disabled:opacity-25 border-gray-100 rounded-2xl text-gray-400 flex items-center gap-2 text-sm font-semibold hover:bg-error-600 hover:text-white group hover:border-transparent'>
                            <Heart size="24" variant={Data?.isUserFavorite ? "Bold" : "Linear"} className={`${Data?.isUserFavorite ? "text-error-600" : ""} group-hover:text-white`} />
                            <span className="whitespace-nowrap"> {Data?.isUserFavorite ? "حذف از علاقه مندی ها" : "افزودن به علاقه مندی ها"}</span>
                        </motion.button>
                    </div>
                </div>
                <div className='w-full h-full flex flex-col lg:flex-row items-start gap-4'>
                    <div className='lg:hidden w-full flex-row flex items-center gap-4'>
                        <motion.button
                            transition={{ type: "spring", stiffness: 400 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                                navigator.clipboard.writeText(url);
                                SetCopyResult(true)
                                setTimeout(() => {
                                    SetCopyResult(false)
                                }, 5000);
                            }} className='w-full  px-2 py-2 border  border-gray-100 rounded-xl text-gray-400 flex items-center justify-center gap-2 text-xs font-semibold hover:bg-third-600 hover:text-white  hover:border-transparent'>
                            <Share size="24" />
                            <span>{CopyResult ? "لینک کپی شد ! " : "اشتراک گذاری"}</span>
                        </motion.button>
                        <motion.button
                            disabled={ToggleFavoriteApi.isPending}
                            whileTap={{ scale: 0.85 }} transition={{ type: "spring", stiffness: 400 }} onClick={ToggleFavoriteHandler}
                            className='w-full px-2 py-2 border disabled:cursor-wait disabled:opacity-25 border-gray-100 rounded-xl text-gray-400 flex items-center justify-center gap-2 text-xs font-semibold hover:bg-error-600 hover:text-white  hover:border-transparent'>
                            <Heart size="24" variant={Data?.isUserFavorite ? "Bold" : "Linear"} className={`${Data?.isUserFavorite ? "text-error-600" : ""} group-hover:text-white`} />
                            <span className="whitespace-nowrap"> {Data?.isUserFavorite ? "حذف از علاقه مندی ها" : "افزودن به علاقه مندی ها"}</span>
                        </motion.button>
                    </div>
                    <div className='w-full lg:w-[45%] order-2 flex-1 2xl:h-[478px] h-full lg:order-1'>
                        {data.isSuccess ? <div className='flex flex-col h-full  justify-between gap-4'>
                            <div className='flex flex-col gap-5'>
                                <div className='flex-col flex gap-3'>
                                    <h1>{Data?.name} {Data?.service.name}</h1>
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
                                <div className='w-full border border-gray-50 flex items-start flex-col rounded-3xl px-6 lg:px-8 py-6'>
                                    <div className=' flex items-center gap-4 lg:gap-6 text-gray-200 w-full border-b border-b-gray-50 pb-4'>
                                        <Image src={"/Icons/Gender.svg"} width={24} height={24} alt='gendericon' />
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-gray-300 '>نوع پذیرش</p>
                                            <h5 className='text-gray-500'>مورد استفاده برای {SansData?.map(item => UserTypeData[item.clientType].name)}</h5>
                                        </div>
                                    </div>
                                    <div className=' flex items-center gap-4 lg:gap-6 text-gray-200 pt-4'>
                                        <Clock size="24" variant="Bold" />
                                        <div className=' flex flex-col gap-2'>
                                            <p className='text-gray-300'>ساعات کاری مجموعه</p>
                                            <h5 className='text-gray-500'>{DaysOfWeekArray[Data ? Data.workHours.fromDayOfWeak : 0].name} تا {DaysOfWeekArray[Data ? Data.workHours.toDayOfWeak : 0].name} از ساعت {Data?.workHours.start} الی {Data?.workHours.end}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
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
                                        <div className='p-2 lg:py-4 lg:px-8 flex items-center justify-center gap-2 flex-col w-fit rounded-2xl bg-error-500'>
                                            <h2 className='text-white'>تخفیف تا</h2>
                                            <span className=' text-white text-xl lg:text-4xl font-bold'>%{Data?.discountPresentage}</span>
                                        </div>}
                                </div>
                                {/* دکمه خرید */}
                                <ReactScroll
                                    to={"sans"}
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    delay={0}
                                    className="cursor-pointer"
                                >
                                    <SuccessBtn SpetialBtn>خرید</SuccessBtn>
                                </ReactScroll>
                            </div>
                        </div>
                            : <MainServiceInfoLoading />}
                    </div>
                    <div className='flex flex-1 order-1  w-full lg:max-w-[55%]'>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            autoplay={{
                                delay: 5500,
                                disableOnInteraction: false,
                            }}
                            modules={[FreeMode, Navigation, Autoplay]}
                            navigation={{
                                nextEl: ".SinglePageNextSlide",
                                prevEl: ".SinglePagePrevSlide",
                            }}
                            className='w-full h-full rounded-2xl relative group'
                        >
                            {Data ? Data.filePathes.map((item, index) => {
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
                            }) : <SwiperSlide className='relative  w-full h-full aspect-w-8 aspect-h-5 bg-gray-200 animate-pulse'>
                            </SwiperSlide>}
                            <button
                                onClick={() => swiper && swiper.slidePrev()}
                                className='SinglePagePrevSlide  w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 disabled:cursor-not-allowed disabled:group-hover:opacity-20 duration-150 bg-black/30 text-white hover:shadow-CMSHADOW flex items-center justify-center  absolute top-1/2 transform right-2 -translate-y-1/2 z-20'>
                                <ArrowRight2 size="24" />
                            </button>
                            <button
                                onClick={() => swiper && swiper.slideNext()}
                                className='SinglePageNextSlide  w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 disabled:cursor-not-allowed disabled:group-hover:opacity-20 duration-150 bg-black/30 text-white hover:shadow-CMSHADOW flex items-center justify-center absolute top-1/2 transform left-2 -translate-y-1/2 z-20'>
                                <ArrowLeft2 size="24" />
                            </button>

                        </Swiper>
                    </div>
                </div>
            </div >
        </>
    )
}

export default MainServiceInfo