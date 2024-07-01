"use client"
import React, { useCallback, useEffect, useState } from 'react'
import MainLayout from './MainLayout'
import { useMutation } from '@tanstack/react-query';
import { useSearch } from '@/util/api/Search/useSearch';
import FilterPriceRange from './Fillters/FilterPriceRange';
import FilterByStars from './Fillters/FilterByStars';
import { ArrowDown2, Sort } from 'iconsax-react';
import ProductCards, { ProductCardsLoading } from './Cards/ProductCards';
import useDebounce from '@/util/hook/useDebounce';
import useGetAllCategory from '@/util/hook/Category/useGetAllCategory';
import useGetMaxPriceSans from '@/util/hook/useGetMaxPriceSans';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
function CategoryLayout({ serviceName, serviceId, Insearch }: { serviceName?: string, serviceId?: number, Insearch?: boolean }) {
    const MaxPrice = useGetMaxPriceSans()
    const [Data, setData] = useState<ProductCard[] | null>(null)
    const [PriceRange, setPriceRange] = useState<number[] | null>(null);
    const [pageSize, setPagesize] = useState(20)
    const DebouncedValue = useDebounce({ Delay: 3000, value: PriceRange })
    const [FoundedCategory, setFoundedCategory] = useState<null | { name: string, icon: string }>(null)
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const rating = searchParams.get("rating")
    const SortBy = searchParams.get("SortBy")
    const createQueryString = useCallback(
        (value: string) => {
            if (value === SortBy) {
                return ""
            } else {
                const params = new URLSearchParams(searchParams.toString())
                params.set("SortBy", value)
                return params.toString()
            }
        },
        [SortBy, searchParams]
    )
    useEffect(() => {
        if (MaxPrice.data) {
            setPriceRange([1000, MaxPrice.data.value.price])
        }
    }, [MaxPrice.data])
    const searchHandler = useMutation({
        mutationFn: useSearch,
        onSuccess(data, variables, context) {
            setData(data.value.list);
        },
        onError(error, variables, context) { },
    });
    useEffect(() => {
        if (PriceRange) {

            searchHandler.mutate({
                page: 1,
                pageSize: pageSize,
                serviceId: serviceId,
                serviceName: serviceName ? decodeURIComponent(serviceName) : "",
                sortTyp: SortBy ? Number(SortBy) : 0,
                maxPrice: DebouncedValue[1],
                minPrice: DebouncedValue[0],
                minRate: Number(rating),

            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [SortBy, rating, DebouncedValue, pageSize])
    // Category
    const Categorydata = useGetAllCategory()
    const CategoryData = Categorydata?.data?.value.list as CategoryItem[] | undefined
    useEffect(() => {
        if (!Insearch && CategoryData && serviceId) {
            const founded = CategoryData.find(item => item.id === serviceId)
            if (founded) {
                setFoundedCategory({ icon: founded.icon, name: founded.name })
            }
        }
    }, [CategoryData, Insearch, serviceId,])

    return (
        <MainLayout>
            <div className='flex flex-col gap-6 lg:gap-10 py-4 lg:py-10'>
                {/* Title */}
                <div>
                    {Insearch ? <h1>جستجو برای : ‌{decodeURIComponent(serviceName!)}</h1> : FoundedCategory && <div className='flex items-center gap-4'>
                        <div className='lg:w-[64px] lg:h-[64px] w-[32px] h-[32px] relative'>
                            <Image
                                src={`${process.env.NEXT_PUBLIC_API_BASE_URLIMAGE}${FoundedCategory.icon}`}
                                fill
                                sizes='90vw'
                                className='object-contain'
                                alt={FoundedCategory.name}
                            />
                        </div>
                        <h1>{FoundedCategory.name}</h1>
                    </div>}
                </div>
                {/* Body */}
                <div className='w-full flex gap-6'>
                    {/* Fillter Part */}
                    <div className='hidden lg:flex px-4 py-6 border border-gray-50 h-fit rounded-2xl w-full max-w-[316px] sticky top-28 divide-y  divide-gray-50 flex-col gap-6 '>
                        {/* فیلتر قیمت */}
                        {PriceRange &&
                            <FilterPriceRange onChange={(e) => setPriceRange(e)} values={PriceRange} />
                        }
                        <FilterByStars />
                    </div>
                    {/* Body */}
                    <div className='w-full flex flex-1 flex-col gap-6'>
                        {/* Sort */}
                        <div className='w-full px-6 border-b border-gray-50  flex items-center gap-4'>
                            <div className='flex items-center gap-2 pb-2 '>
                                <Sort size="20" className='text-gray-500' />
                                <p className='text-[10px] whitespace-nowrap lg:text-xs '>مرتب سازی</p>
                            </div>
                            <button onClick={() => router.push(pathname + '?' + createQueryString('0'))} className={`TabBtn ${Number(SortBy) === 0 ? "TabBtnActice" : ""}`}>مرتبط‌ترین</button>
                            <button onClick={() => router.push(pathname + '?' + createQueryString('1'))} className={`TabBtn ${Number(SortBy) === 1 ? "TabBtnActice" : ""}`} >جدیدترین</button>
                            <button onClick={() => router.push(pathname + '?' + createQueryString('2'))} className={`TabBtn ${Number(SortBy) === 2 ? "TabBtnActice" : ""}`}>پربازدیدترین</button>
                            {/* <button className='TabBtn'>بیشترین تخفیف</button> */}
                        </div>
                        {/* Items */}
                        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-center justify-items-center'>
                            {searchHandler.isSuccess && Data && Data?.length > 0 ? Data.map((item, index) => {
                                return <ProductCards data={item} key={index} />
                            }) : searchHandler.isSuccess && Data?.length === 0 ? <p>هیچ  سرویسی وجود ندارد</p> : <React.Fragment>
                                <ProductCardsLoading />
                                <ProductCardsLoading />
                                <ProductCardsLoading />
                                <ProductCardsLoading />
                                <ProductCardsLoading />
                                <ProductCardsLoading />
                            </React.Fragment>}
                        </div>
                        {searchHandler.isSuccess && Data && Data?.length > 20 ? <div className='w-full my-6'>
                            <button
                                onClick={() => setPagesize((prev) => prev + 10)}
                                className=" w-full gap-x-4 group justify-center cursor-pointer flex text-center mt-6">
                                <p className=" text-gray-500 group-hover:text-gray-300 duration-200 ">
                                    مشاهده بیشتر
                                </p>
                                <ArrowDown2
                                    className="text-gray-500 cursor-pointer group-hover:text-gray-300"
                                    size={24}
                                />
                            </button>
                        </div> : null}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default CategoryLayout