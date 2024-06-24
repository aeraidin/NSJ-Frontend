"use client"
import React, { useEffect, useState } from 'react'
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
function CategoryLayout({ serviceName, serviceId, Insearch }: { serviceName?: string, serviceId?: number, Insearch?: boolean }) {

    const MaxPrice = useGetMaxPriceSans()
    console.log('====================================');
    console.log(MaxPrice.data);
    console.log('====================================');
    const [Data, setData] = useState<ProductCard[] | null>(null)
    const [MinRate, setMinRate] = useState<null | number>(null)
    const [Sortby, setSortby] = useState<number>(0)
    const [PriceRange, setPriceRange] = useState<number[]>([1000, 200000]);
    const [pageSize, setPagesize] = useState(20)
    const DebouncedValue = useDebounce({ Delay: 3000, value: PriceRange })
    const [FoundedCategory, setFoundedCategory] = useState<null | string>(null)
    const searchHandler = useMutation({
        mutationFn: useSearch,
        onSuccess(data, variables, context) {
            setData(data.value.list);
        },
        onError(error, variables, context) { },
    });
    useEffect(() => {
        searchHandler.mutate({
            page: 1,
            pageSize: pageSize,
            serviceId: serviceId,
            serviceName: serviceName ? decodeURIComponent(serviceName) : "",
            sortTyp: Sortby,
            maxPrice: DebouncedValue[1],
            minPrice: DebouncedValue[0],
            minRate: MinRate,
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Sortby, MinRate, DebouncedValue, pageSize])
    // Category
    const Categorydata = useGetAllCategory()
    const CategoryData = Categorydata?.data?.value.list as CategoryItem[] | undefined
    useEffect(() => {
        if (!Insearch && CategoryData && serviceId) {
            const founded = CategoryData.find(item => item.id === serviceId)
            if (founded) {
                setFoundedCategory(founded.name)
            }
        }
    }, [CategoryData, Insearch, serviceId,])

    return (
        <MainLayout>
            <div className='flex flex-col gap-6 lg:gap-10 py-4 lg:py-10'>
                {/* Title */}
                <div>
                    {Insearch ? <h1>جستجو برای : ‌{decodeURIComponent(serviceName!)}</h1> : FoundedCategory && <h1>{FoundedCategory}</h1>}
                </div>
                {/* Body */}
                <div className='w-full flex gap-6'>
                    {/* Fillter Part */}
                    <div className='hidden lg:flex px-4 py-6 border border-gray-50 h-fit rounded-2xl w-full max-w-[316px] sticky top-28 divide-y  divide-gray-50 flex-col gap-6 '>
                        {/* فیلتر قیمت */}
                        <FilterPriceRange onChange={(e) => setPriceRange(e)} values={PriceRange} />
                        <FilterByStars value={MinRate} SelectedRate={(e) => setMinRate((prev) => (prev === e ? null : e))} />
                    </div>
                    {/* Body */}
                    <div className='w-full flex flex-1 flex-col gap-6'>
                        {/* Sort */}
                        <div className='w-full px-6 border-b border-gray-50  flex items-center gap-4'>
                            <div className='flex items-center gap-2 pb-2 '>
                                <Sort size="20" className='text-gray-500' />
                                <p className='text-xs '>مرتب سازی</p>
                            </div>
                            <button onClick={() => setSortby(0)} className={`TabBtn ${Sortby === 0 ? "TabBtnActice" : ""}`}>مرتبط‌ترین</button>
                            <button onClick={() => setSortby(1)} className={`TabBtn ${Sortby === 1 ? "TabBtnActice" : ""}`} >جدیدترین</button>
                            <button onClick={() => setSortby(2)} className={`TabBtn ${Sortby === 2 ? "TabBtnActice" : ""}`}>پربازدیدترین</button>
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