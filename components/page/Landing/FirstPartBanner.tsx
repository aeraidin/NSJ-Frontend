"use client"
import Image from 'next/image'
import React from 'react'
import Banner from "/public/Banner/1344x504.jpg"
import useGetAllCategory from '@/util/hook/Category/useGetAllCategory'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
function FirstPartBanner() {
    const data = useGetAllCategory()

    const Data = data?.data?.value.list as CategoryItem[] | undefined

    return (
        <div className='aspect-w-16 aspect-h-6 relative '>
            <Image src={Banner} fill className='object-cover rounded-2xl' alt='Banner' placeholder='blur' />
            {/* Category */}
            <div className='w-[80%] h-[80px] lg:h-[150px]  rounded-2xl absolute top-[75%] mx-auto bg-white shadow-CMSHADOW '>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={5}
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}

                    className='w-full h-full rounded-2xl relative group'
                >
                    {Data ? Data.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className='w-full  h-full !flex !items-center !justify-center'  >
                                <p>{item.name}</p>
                            </SwiperSlide>
                        );
                    }) : <SwiperSlide className='relative  w-full h-full bg-gray-200 animate-pulse'>
                    </SwiperSlide>}
                </Swiper>
            </div>
        </div>
    )
}

export default FirstPartBanner