"use client"
import useGetSingleService from '@/util/hook/SingleService/useGetSingleService'
import { Location } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaStar } from 'react-icons/fa6';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function MainServiceInfo({ id }: { id: string }) {
    const data = useGetSingleService({ id: id })
    const Data = data?.data?.value as SingleProductPage | undefined
    return (
        <div className='Container py-8'>
            <div className='w-full h-full flex items-start gap-4'>
                <div className='w-[45%]'>
                    {data.isSuccess ? <div className='flex flex-col '>
                        <div className='flex-col flex gap-3'>
                            <h2>{Data?.name}</h2>
                            <div className='flex items-center justify-between'>
                                <div className="w-full flex items-center gap-2 ">
                                    {/* Location */}
                                    <div className="flex items-center border-l border-gray-300 pl-2 gap-1">
                                        <Location size="20" className="text-gray-300" variant="Bold" />
                                        <h4>{Data?.location}</h4>
                                    </div>
                                    <Link href={`category/${Data?.service.id}`} className="group/item">
                                        <h4 className="group-hover/item:text-third-500 group-hover/item:underline duration-150">
                                            {Data?.service.name}
                                        </h4>
                                    </Link>
                                </div>
                                <div className="flex items-center gap-2 justify-center">
                                    <h5 className="leading-[12px]">{Data?.rate}</h5>
                                    <FaStar className="text-secondary-600" size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                        : null}
                </div>
                <div className='  flex flex-1  max-w-[55%] '>
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