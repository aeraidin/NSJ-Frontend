"use client"
import React, { useEffect, useState } from 'react'
import MainLayout from './MainLayout'
import { useMutation } from '@tanstack/react-query';
import { useSearch } from '@/util/api/Search/useSearch';

function CategoryLayout({ serviceName, serviceId, Insearch }: { serviceName?: string, serviceId?: number, Insearch?: boolean }) {
    const [Data, setData] = useState(null)
    const [MinPrice, setMinPrice] = useState(0)
    const [MaxPrice, setMaxPrice] = useState(0)
    const [MinRate, setMinRate] = useState(0)
    const [Sortby, setSortby] = useState(0)

    const searchHandler = useMutation({
        mutationFn: useSearch,
        onSuccess(data, variables, context) {
            console.log("SoOOOSSOSOSO");
            console.log(data);
            console.log("SoOOOSSOSOSO");

        },
        onError(error, variables, context) { },
    });
    useEffect(() => {
        searchHandler.mutate({
            page: 1, pageSize: 20,
            serviceId: serviceId,
            serviceName: serviceName,
            sortTyp: Sortby,
            maxPrice: MaxPrice,
            minPrice: MinPrice,
            minRate: MinRate,
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <MainLayout>
            <div className='flex flex-col lg:gap-10 py-10'>
                {/* Title */}
                <div className='w-full h-[100px] bg-yellow-300'></div>
                {/* Body */}
                <div className='w-full flex gap-6'>
                    {/* Fillter Part */}
                    <div className='hidden lg:block w-full max-w-[316px] sticky top-28 h-[200px] bg-red-400'>

                    </div>
                    {/* Body */}
                    <div className='w-full flex flex-1 flex-col gap-6'>
                        {/* Sort */}
                        <div className='w-full px-6 pt-4 rounded-2xl border border-gray-50 flex items-center gap-4'>
                            <p className='pb-4'>مرتب سازی بر اساس:</p>
                            <button onClick={() => setSortby(0)} className={`TabBtn ${Sortby === 0 ? "TabBtnActice" : ""}`}>پیش فرض</button>
                            <button onClick={() => setSortby(1)} className={`TabBtn ${Sortby === 1 ? "TabBtnActice" : ""}`} >جدید ترین</button>
                            <button onClick={() => setSortby(2)} className={`TabBtn ${Sortby === 2 ? "TabBtnActice" : ""}`}>محبوب ترین</button>
                            {/* <button className='TabBtn'>بیشترین تخفیف</button> */}

                        </div>
                        {/* Items */}
                        <div className='w-full grid lg:grid-cols-3 h-[1000px] bg-orange-400'>

                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default CategoryLayout