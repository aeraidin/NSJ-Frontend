"use client";

import ProductCards from '@/components/Layout/Cards/ProductCards';
import GetRecLis from '@/util/hook/GetRecLis';
import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
function RecomendedList({ data }: { data: ProductCard[] | undefined }) {
    // const data = await GetRecLis()
    const swiper = useSwiper();


    return (
        <div className='Container w-full flex flex-col gap-8'>
            <div
                className='flex items-center justify-between '>
                <h1>پیشنهاد های ویژه</h1>
                <div className='flex items-center gap-2'>
                    <button
                        onClick={() => swiper && swiper.slidePrev()}
                        className='PrevSlide  ArrowButtonSlider'>
                        <ArrowRight2 size="20" />
                    </button>
                    <button
                        onClick={() => swiper && swiper.slideNext()}
                        className='NextSlide  ArrowButtonSlider'>
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
                        nextEl: ".NextSlide",
                        prevEl: ".PrevSlide",
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
                    className="cursor-grab w-full"
                >
                    {/* data.value?.list */}
                    {data && data.map((item: ProductCard, index: number) => {
                        return <SwiperSlide key={index}>
                            <ProductCards data={item} />
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default RecomendedList