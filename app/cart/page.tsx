"use client"
import SuccessBtn from '@/components/Layout/Buttons/SuccessBtn'
import MainLayout from '@/components/Layout/MainLayout'
import UseGetCart from '@/util/hook/Cart/UseGetCart'
import React from 'react'

function page() {
    const data = UseGetCart()

    return (
        <MainLayout>
            <div className='w-full flex gap-6 py-8'>
                {/* خلاصه سبد خرید */}
                <div className='w-full bg-blue-100 flex flex-1 h-[200px]'>s</div>
                {/* ایتم های سبد خرید */}
                <div className='max-w-[430px] flex-1 flex flex-col  border border-gray-50 rounded-2xl justify-between h-[200px] py-6 px-5'>
                    <h2>خلاصه سفارش </h2>
                    <div>
                        <SuccessBtn>ادامه فرایند رزرو</SuccessBtn>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default page