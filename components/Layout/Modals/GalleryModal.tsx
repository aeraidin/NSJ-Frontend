import React, { useState } from 'react'
import { Autoplay, EffectCoverflow, FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Image from 'next/image';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import GalleryModalMain from './GalleryModalMain';
function GalleryModal({ CloseModal, State, Data }: { State: boolean, CloseModal: () => void, Data: string[] }) {
    const swiper = useSwiper();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
    };
    return (
        <GalleryModalMain
            State={State}
            CloseModal={() => { CloseModal(), setActiveIndex(0) }}>
            <div className='w-full h-full '>
                <Swiper

                    slidesPerView={1}
                    breakpoints={{
                        440: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 1.2,
                        },
                        1080: {
                            slidesPerView: 1.2,
                        },
                        1380: {
                            slidesPerView: 1.4,
                        },
                    }}
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                    onSlideChange={handleSlideChange}
                    modules={[Navigation, Autoplay, EffectCoverflow, Pagination]}
                    navigation={{
                        nextEl: ".SinglePageNextSlide",
                        prevEl: ".SinglePagePrevSlide",
                    }}
                    effect={"coverflow"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: -50,
                        depth: 0,
                        modifier: 1,
                        slideShadows: false,
                        scale: .8
                    }}
                    pagination={{
                        clickable: true,
                        // dynamicBullets: true,
                        renderBullet: (index, className) => (
                            `<span class="${className}"></span>`
                        ),
                    }}
                    centeredSlides
                    className='w-full h-full  relative group !px-5 !md:px-0'
                >
                    {Data.map((item, index) => {
                        return (
                            <SwiperSlide key={index} >
                                <div className='relative w-full h-full !aspect-w-10 !aspect-h-3 select-none  '>
                                    <Image
                                        alt={item}
                                        fill
                                        src={`${process.env.NEXT_PUBLIC_API_BASE_URLIMAGE}${item}`}
                                        sizes="(min-width: 640px) 90vw, 100vw"
                                        className={`object-cover rounded-2xl`}
                                    />
                                    {activeIndex !== index &&
                                        <div className={`absolute inset-0 bg-black opacity-50 `}></div>
                                    }
                                </div>
                                <button
                                    onClick={() => swiper && swiper.slidePrev()}
                                    className={`${activeIndex === index ? "opacity-100 disabled:cursor-not-allowed disabled:group-hover:opacity-40" : "opacity-0"} SinglePagePrevSlide w-6 h-6 lg:w-11 lg:h-11 rounded-full  duration-150 bg-white text-blackText hover:shadow-CMSHADOW flex items-center justify-center  absolute top-1/2 transform right-2 -translate-y-1/2 z-20`}>
                                    <ArrowRight2 className='size-4 lg:size-6' />
                                </button>
                                <button
                                    onClick={() => swiper && swiper.slideNext()}
                                    className={`${activeIndex === index ? "opacity-100 disabled:cursor-not-allowed disabled:group-hover:opacity-40" : "opacity-0"} SinglePageNextSlide w-6 h-6 lg:w-11 lg:h-11 rounded-full  duration-150 bg-white text-blackText hover:shadow-CMSHADOW flex items-center justify-center absolute top-1/2 transform left-2 -translate-y-1/2 z-20`}>
                                    <ArrowLeft2 className='size-4 lg:size-6' />
                                </button>
                            </SwiperSlide>
                        );
                    })}

                </Swiper>

            </div>
        </GalleryModalMain>
    )
}

export default GalleryModal