"use client"
import Image from 'next/image'
import React from 'react'
import Banner from "/public/Banner/1344x504.jpg"
import useGetAllCategory from '@/util/hook/Category/useGetAllCategory'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Link from 'next/link'

function FirstPartBanner() {
    const data = useGetAllCategory()
    const Data = data?.data?.value.list as CategoryItem[] | undefined
    return (
        <div className=' relative '>
            <Swiper
                spaceBetween={10}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: true,
                }}
                modules={[Autoplay]}
                className='!aspect-w-16  !aspect-h-6 rounded-2xl'
            >
                <SwiperSlide className=' relative'>
                    <Image src={Banner} fill className='object-cover' alt='Banner' placeholder='blur' sizes="90vw" />
                </SwiperSlide >
                <SwiperSlide className=' relative'>
                    <Image src={Banner} fill className='object-cover' alt='Banner' placeholder='blur' sizes="90vw" />
                </SwiperSlide>
                <SwiperSlide className=' relative'>
                    <Image src={Banner} fill className='object-cover' alt='Banner' placeholder='blur' sizes="90vw" />
                </SwiperSlide>
            </Swiper>
            {/* Category */}
            {Data &&
                <div className='w-[90%] lg:w-[80%]   h-fit py-4  rounded-2xl absolute top-[85%] mx-auto bg-white shadow-CMSHADOW z-10 left-1/2 transform -translate-x-1/2 '>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2.8}
                        autoplay={{
                            delay: 5500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            480: {
                                width: 480,
                                slidesPerView: 3,
                            },
                            768: {
                                width: 768,
                                slidesPerView: 4,
                            },
                            976: {
                                width: 976,
                                slidesPerView: 5,
                            },


                        }}
                        className=''
                    >
                        {Data!.map((item, index) => {
                            return (
                                <SwiperSlide key={index} className='h-full select-none'  >
                                    <Link href={`/category/${item.id}`} className='flex items-center justify-center flex-col gap-2'>
                                        <div className='w-[24px] h-[24px
                                    ] lg:w-[32px] lg:h-[32px]'>

                                            <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URLIMAGE}${item.icon}`} alt={item.name} width={32} height={32} className='object-contain' />
                                        </div>
                                        <p className='whitespace-nowrap text-sm lg:text-base'>{item.name}</p></Link>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>}
        </div>
    )
}

export default FirstPartBanner