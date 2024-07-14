"use client";
import ProductCards from '@/components/Layout/Cards/ProductCards';
import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import Image from 'next/image';
function HighestDiscountComplexs({ data }: { data: ProductCard[] | undefined }) {
    const swiper = useSwiper();


    return (
        <>
            {data && data.length > 0 ?
                <div className='Container w-full  flex flex-col lg:gap-6 relative'>
                    <div className='w-full h-[80%] lg:h-[70%] bg-secondary-600 rounded-lg absolute left-0 bottom-0 -z-10' />
                    <div
                        className='flex items-center justify-between '>
                        <div></div>
                        <div className='flex items-center gap-2'>
                            <button
                                onClick={() => swiper && swiper.slidePrev()}
                                className='HighestDiscountComplexsPrevSlide  ArrowButtonSlider'>
                                <ArrowRight2 size="20" />
                            </button>
                            <button
                                onClick={() => swiper && swiper.slideNext()}
                                className='HighestDiscountComplexsNextSlide  ArrowButtonSlider'>
                                <ArrowLeft2 size="20" />
                            </button>
                        </div>
                    </div>

                    <div className='w-full grid grid-cols-1 grid-rows-2 md:grid-rows-1  md:grid-cols-5 items-center'>
                        <div className='lg:px-6 md:col-span-2 lg:col-span-1 h-fit flex items-center justify-center flex-col gap-4'>
                            <div className='w-[240px] h-[240px] relative'>
                                <Image src={"/sale.png"} fill className='object-contain' alt='sale' sizes="90vw" />
                            </div>
                            <span className='text-2xl text-white font-bold text-nowrap'>بیشترین تخفیف ها</span>
                        </div>
                        <div className='w-full md:col-span-3 lg:col-span-4 ' >
                            <Swiper
                                slidesPerView={1.2}
                                spaceBetween={12}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={{
                                    nextEl: ".HighestDiscountComplexsNextSlide",
                                    prevEl: ".HighestDiscountComplexsPrevSlide",
                                }}
                                breakpoints={{
                                    480: {
                                        width: 480,
                                        slidesPerView: 1.8,
                                    },
                                    768: {
                                        width: 768,
                                        slidesPerView: 2.5,

                                    },
                                    976: {
                                        width: 976,
                                        slidesPerView: 3,
                                    },
                                    1080: {
                                        width: 976,
                                        slidesPerView: 3.3,
                                    },
                                }}
                                modules={[Navigation]}
                                className="cursor-grab !w-full "
                            >
                                {/* data.value?.list */}
                                {data && data.map((item: ProductCard, index: number) => {
                                    return <SwiperSlide className='py-6' key={index}>
                                        <ProductCards data={item} />
                                    </SwiperSlide>
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div >
                : null}
        </>
    )
}

export default HighestDiscountComplexs