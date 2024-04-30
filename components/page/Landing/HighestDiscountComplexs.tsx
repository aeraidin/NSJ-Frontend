"use client";
import ProductCards from '@/components/Layout/Cards/ProductCards';
import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
function HighestDiscountComplexs({ data }: { data: ProductCard[] | undefined }) {
    const swiper = useSwiper();

    return (
        <div className='Container w-full flex flex-col gap-6 relative'>
            <div className='w-full h-[70%] bg-secondary-600 rounded-lg absolute left-0 bottom-0 -z-10' />


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

            <div className='w-full flex items-center'>
                <div
                    className='px-16'>
                    <span className='text-3xl text-white font-bold'>بیشترین تخفیف ها</span>
                </div>
                <div className='flex-1 flex  '>
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={20}
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
                                slidesPerView: 3.2,
                            },
                            1024: {
                                width: 1024,
                                slidesPerView: 3.5,
                            },
                            1280: {
                                width: 1280,
                                slidesPerView: 4,
                            },

                        }}
                        modules={[Navigation]}
                        className="cursor-grab w-full "
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
        </div>
    )
}

export default HighestDiscountComplexs