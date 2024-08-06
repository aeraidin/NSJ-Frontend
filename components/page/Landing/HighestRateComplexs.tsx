"use client";
import ProductCards from '@/components/Layout/Cards/ProductCards';
import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
function HighestRateComplexs({ data }: { data: ProductCard[] | undefined }) {
    const swiper = useSwiper();
    return (
        <div className='Container w-full flex flex-col lg:gap-6'>
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
                    slidesPerView={"auto"}
                    spaceBetween={12}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".HighestRateComplexsNextSlide",
                        prevEl: ".HighestRateComplexsPrevSlide",
                    }}

                    modules={[Navigation]}
                    className="cursor-grab w-full "
                >
                    {/* data.value?.list */}
                    {data && data.map((item: ProductCard, index: number) => {
                        return <SwiperSlide className='py-6 !w-full !max-w-[321px] !h-full' key={index}>
                            <ProductCards data={item} />
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default HighestRateComplexs