"use client"
import { useSearch } from '@/util/api/Search/useSearch'
import useGetAllCategory from '@/util/hook/Category/useGetAllCategory'
import { useMutation } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import ProductCards, { ProductCardsLoading } from '@/components/Layout/Cards/ProductCards'
function RandomCategory() {
    const [Data, setData] = useState<ProductCard[] | null>(null)
    const [FoundedCategory, setFoundedCategory] = useState<null | string>(null)
    const AllCategory = useGetAllCategory()
    const DataAllCategory = AllCategory?.data?.value.list as CategoryItem[] | undefined
    const getRandomItem = (items: CategoryItem[]): CategoryItem => {
        const randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
    };
    const searchHandler = useMutation({
        mutationFn: useSearch,
        onSuccess(data, variables, context) {
            setData(data.value.list);
        },
        onError(error, variables, context) { },
    });
    useEffect(() => {
        if (DataAllCategory) {
            const randomItem = getRandomItem(DataAllCategory);
            console.log(randomItem);

            setFoundedCategory(randomItem.name)
            searchHandler.mutate({
                page: 1,
                pageSize: 20,
                serviceId: randomItem.id,
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [DataAllCategory])
    const swiper = useSwiper();

    return (
        <div className='Container w-full flex flex-col lg:gap-6'>
            <div
                className='flex items-center justify-between '>
                <h1>{FoundedCategory}</h1>
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
                    className="cursor-grab w-full"
                >
                    {/* data.value?.list */}
                    {Data && Data.map((item: ProductCard, index: number) => {
                        return <SwiperSlide className='py-6 !w-full  !max-w-[321px] !h-full' key={index}>
                            <ProductCards data={item} />
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default RandomCategory