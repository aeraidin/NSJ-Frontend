import Image from 'next/image'
import React from 'react'
import BannerRight from "/public/Banner/548x210.jpg"
import BannerLeft from "/public/Banner/779x210.jpg"

function SecondPartBanner() {
    return (
        <div className='aspect-w-16 aspect-h-10 lg:aspect-h-3   relative'>
            <div className='grid grid-cols-1 lg:grid-cols-9 w-full h-full gap-6 '>
                <div className='relative lg:col-span-4'>
                    <Image src={BannerRight} fill className='object-cover rounded-2xl' alt='Banner' placeholder='blur' />
                </div>
                <div className='relative lg:col-span-5'>
                    <Image src={BannerLeft} fill className='object-cover rounded-2xl' alt='Banner' placeholder='blur' />
                </div>
            </div>

        </div>
    )
}

export default SecondPartBanner