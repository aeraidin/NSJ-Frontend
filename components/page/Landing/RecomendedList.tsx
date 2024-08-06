"use client";
import ProductCards from '@/components/Layout/Cards/ProductCards';
import GetRecLis from '@/util/hook/ssr/GetRecLis';
import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
function RecomendedList({ data }: { data: ProductCard[] | undefined }) {
    // const data = await GetRecLis()
    const swiper = useSwiper();
    return (
        <div className='Container w-full flex flex-col mt-6 lg:mt-0  lg:gap-6'>
            <div
                className='flex items-center justify-between '>
                <h1>پیشنهاد های ویژه</h1>
                <div className='flex items-center gap-2'>
                    <button
                        onClick={() => swiper && swiper.slidePrev()}
                        className='RecPrevSlide  ArrowButtonSlider'>
                        <ArrowRight2 size="20" />
                    </button>
                    <button
                        onClick={() => swiper && swiper.slideNext()}
                        className='RecNextSlide  ArrowButtonSlider'>
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
                        nextEl: ".RecNextSlide",
                        prevEl: ".RecPrevSlide",
                    }}

                    modules={[Navigation]}
                    className="cursor-grab w-full "
                >
                    {/* data.value?.list */}
                    {data && data.map((item: ProductCard, index: number) => {
                        return <SwiperSlide className='py-6 !w-full  !max-w-[321px] !h-full' key={index}>
                            <ProductCards data={item} />
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default RecomendedList