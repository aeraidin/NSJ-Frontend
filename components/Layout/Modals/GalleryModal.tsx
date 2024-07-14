import React, { useState } from 'react'
import Modal from './Modal'
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Image from 'next/image';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import GalleryModalMain from './GalleryModalMain';
function GalleryModal({ CloseModal, State, Data }: { State: boolean, CloseModal: () => void, Data: string[] | null }) {
    const swiper = useSwiper();
    const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
    };
    return (
        <GalleryModalMain
            State={State}
            CloseModal={() => { CloseModal(); setThumbsSwiper(null) }}>
            <div className='w-full h-full '>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                    onSlideChange={handleSlideChange}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Autoplay, Thumbs]}
                    navigation={{
                        nextEl: ".SinglePageNextSlide",
                        prevEl: ".SinglePagePrevSlide",
                    }}

                    className='w-full h-full rounded-2xl relative group mb-4'
                >
                    {Data ? Data.map((item, index) => {
                        return (
                            <SwiperSlide key={index} >
                                <div className='relative  w-full h-full aspect-w-6 aspect-h-3'>
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
                    }) : <SwiperSlide className='relative  w-full h-full aspect-w-8 aspect-h-5 bg-gray-200 animate-pulse'>
                    </SwiperSlide>}
                    <button
                        onClick={() => swiper && swiper.slidePrev()}
                        className='SinglePagePrevSlide w-6 h-6 lg:w-16 lg:h-16 rounded-full disabled:cursor-not-allowed disabled:group-hover:opacity-20 duration-150 bg-black/30 text-white hover:shadow-CMSHADOW flex items-center justify-center  absolute top-1/2 transform right-2 -translate-y-1/2 z-20'>
                        <ArrowRight2 className='size-4 lg:size-6' />
                    </button>
                    <button
                        onClick={() => swiper && swiper.slideNext()}
                        className='SinglePageNextSlide w-6 h-6 lg:w-16 lg:h-16 rounded-full disabled:cursor-not-allowed disabled:group-hover:opacity-20 duration-150 bg-black/30 text-white hover:shadow-CMSHADOW flex items-center justify-center absolute top-1/2 transform left-2 -translate-y-1/2 z-20'>
                        <ArrowLeft2 className='size-4 lg:size-6' />
                    </button>

                </Swiper>
                {Data ?
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={3}
                        freeMode={true}
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
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className=""
                    >
                        {Data ? Data.map((item, index) => {
                            return (
                                <SwiperSlide key={index} >
                                    <div className='relative  w-full h-full  aspect-w-8 aspect-h-5 lg:aspect-h-4 rounded-2xl overflow-hidden'>
                                        <Image
                                            alt={item}
                                            fill
                                            src={`${process.env.NEXT_PUBLIC_API_BASE_URLIMAGE}${item}`}
                                            sizes="(min-width: 640px) 90vw, 100vw"
                                            className="object-cover"
                                        />
                                        <div
                                            className={`w-full h-full absolute top-0 left-0  ${activeIndex === index
                                                ? ""
                                                : "bg-black/55 group-hover:bg-black/30"
                                                }  duration-200`}
                                        ></div>
                                    </div>
                                </SwiperSlide>
                            );
                        }) : <SwiperSlide className='relative  w-full h-full aspect-w-8 aspect-h-5 bg-gray-200 animate-pulse'>
                        </SwiperSlide>}
                    </Swiper>
                    : null}
            </div>
        </GalleryModalMain>
    )
}

export default GalleryModal