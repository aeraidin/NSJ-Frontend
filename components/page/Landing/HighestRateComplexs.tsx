"use client";
import ProductCards from '@/components/Layout/Cards/ProductCards';
import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
function HighestRateComplexs({ data }: { data: ProductCard[] | undefined }) {
    const swiper = useSwiper();
    return (
        <div className='Container w-full flex flex-col gap-6'>
            <div
                className='flex items-center justify-between '>
                <h1>برترین مجموعه ها</h1>
                <div className='flex items-center gap-2'>
                    <button
                        onClick={() => swiper && swiper.slidePrev()}
                        className='HighestRateComplexsPrevSlide  ArrowButtonSlider'>
                        <ArrowRight2 size="20" />
                    </button>
                    <button
                        onClick={() => swiper && swiper.slideNext()}
                        className='HighestRateComplexsNextSlide  ArrowButtonSlider'>
                        <ArrowLeft2 size="20" />
                    </button>
                </div>
            </div>
            <div className='w-full'>
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".HighestRateComplexsNextSlide",
                        prevEl: ".HighestRateComplexsPrevSlide",
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
    )
}

export default HighestRateComplexs