"use client"
import Image from 'next/image'
import React from 'react'
import Banner from "/public/Banner/1344x504.jpg"
import useGetAllCategory from '@/util/hook/Category/useGetAllCategory'
function FirstPartBanner() {
    const data = useGetAllCategory()
    return (
        <div className='aspect-w-16 aspect-h-6 relative '>
            <Image src={Banner} fill className='object-cover rounded-2xl' alt='Banner' placeholder='blur' />
            {/* Category */}
            <div>

            </div>
        </div>
    )
}

export default FirstPartBanner