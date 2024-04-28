"use client";

import ProductCards from '@/components/Layout/Cards/ProductCards';
import GetRecLis from '@/util/hook/GetRecLis';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
function RecomendedList() {
    // const data = await GetRecLis()
    // // console.log('====================================');
    // console.log(data.value.list);
    // // console.log('====================================');
    const data = [{
        id: 34,
        filePath: 'PersonalDoc/svcuwexe.2x3-638472425771206637..png',
        serviceName: 'قق',
        rate: 0,
        location: '',
        categoryName: 'test Category',
        price: 0,
        priceAfterDiscount: 0
    }, {
        id: 34,
        filePath: 'PersonalDoc/svcuwexe.2x3-638472425771206637..png',
        serviceName: 'قق',
        rate: 0,
        location: '',
        categoryName: 'test Category',
        price: 0,
        priceAfterDiscount: 0
    }, {
        id: 34,
        filePath: 'PersonalDoc/svcuwexe.2x3-638472425771206637..png',
        serviceName: 'قق',
        rate: 0,
        location: '',
        categoryName: 'test Category',
        price: 0,
        priceAfterDiscount: 0
    }, {
        id: 34,
        filePath: 'PersonalDoc/svcuwexe.2x3-638472425771206637..png',
        serviceName: 'قق',
        rate: 0,
        location: '',
        categoryName: 'test Category',
        price: 0,
        priceAfterDiscount: 0
    }, {
        id: 34,
        filePath: 'PersonalDoc/svcuwexe.2x3-638472425771206637..png',
        serviceName: 'قق',
        rate: 0,
        location: '',
        categoryName: 'test Category',
        price: 0,
        priceAfterDiscount: 0
    }, {
        id: 34,
        filePath: 'PersonalDoc/svcuwexe.2x3-638472425771206637..png',
        serviceName: 'قق',
        rate: 0,
        location: '',
        categoryName: 'test Category',
        price: 0,
        priceAfterDiscount: 0
    }, {
        id: 34,
        filePath: 'PersonalDoc/svcuwexe.2x3-638472425771206637..png',
        serviceName: 'قق',
        rate: 0,
        location: '',
        categoryName: 'test Category',
        price: 0,
        priceAfterDiscount: 0
    }, {
        id: 34,
        filePath: 'PersonalDoc/svcuwexe.2x3-638472425771206637..png',
        serviceName: 'قق',
        rate: 0,
        location: '',
        categoryName: 'test Category',
        price: 0,
        priceAfterDiscount: 0
    }, {
        id: 34,
        filePath: 'PersonalDoc/svcuwexe.2x3-638472425771206637..png',
        serviceName: 'قق',
        rate: 0,
        location: '',
        categoryName: 'test Category',
        price: 0,
        priceAfterDiscount: 0
    }, {
        id: 34,
        filePath: 'PersonalDoc/svcuwexe.2x3-638472425771206637..png',
        serviceName: 'قق',
        rate: 0,
        location: '',
        categoryName: 'test Category',
        price: 0,
        priceAfterDiscount: 0
    }, {
        id: 34,
        filePath: 'PersonalDoc/svcuwexe.2x3-638472425771206637..png',
        serviceName: 'قق',
        rate: 0,
        location: '',
        categoryName: 'test Category',
        price: 0,
        priceAfterDiscount: 0
    }, {
        id: 34,
        filePath: 'PersonalDoc/svcuwexe.2x3-638472425771206637..png',
        serviceName: 'قق',
        rate: 0,
        location: '',
        categoryName: 'test Category',
        price: 0,
        priceAfterDiscount: 0
    }, {
        id: 34,
        filePath: 'PersonalDoc/svcuwexe.2x3-638472425771206637..png',
        serviceName: 'قق',
        rate: 0,
        location: '',
        categoryName: 'test Category',
        price: 0,
        priceAfterDiscount: 0
    }, {
        id: 34,
        filePath: 'PersonalDoc/svcuwexe.2x3-638472425771206637..png',
        serviceName: 'قق',
        rate: 0,
        location: '',
        categoryName: 'test Category',
        price: 0,
        priceAfterDiscount: 0
    }, {
        id: 34,
        filePath: 'PersonalDoc/svcuwexe.2x3-638472425771206637..png',
        serviceName: 'قق',
        rate: 0,
        location: '',
        categoryName: 'test Category',
        price: 0,
        priceAfterDiscount: 0
    }, {
        id: 34,
        filePath: 'PersonalDoc/svcuwexe.2x3-638472425771206637..png',
        serviceName: 'قق',
        rate: 0,
        location: '',
        categoryName: 'test Category',
        price: 0,
        priceAfterDiscount: 0
    }, {
        id: 34,
        filePath: 'PersonalDoc/svcuwexe.2x3-638472425771206637..png',
        serviceName: 'قق',
        rate: 0,
        location: '',
        categoryName: 'test Category',
        price: 0,
        priceAfterDiscount: 0
    },]
    return (
        <div className='Container w-full flex flex-col gap-8'>
            <div
                className=' '>
                <h1>پیشنهاد های ویژه</h1>
            </div>
            <div className='FullContainer'>
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={16}
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
                            spaceBetween: 32,
                        },
                        976: {
                            width: 976,
                            slidesPerView: 3.5,
                        },
                        1440: {
                            width: 1440,
                            slidesPerView: 5,
                        },
                    }}
                    modules={[Navigation]}
                    className="w-full relative"
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