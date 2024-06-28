import Image from 'next/image'
import React from 'react'
import BannerRight from "/public/Banner/889x440.jpg"
import LeftTopBanner from "/public/Banner/435x210.jpg"
import LeftBottomBanner from "/public/Banner/435x210a.jpg"

function ThirdPartBanner() {
    return (
        <div className='aspect-w-16 aspect-h-10 lg:aspect-h-5 relative '>
            <div className='grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-y-5 lg:gap-y-0 lg:gap-x-5 '>
                <div className='col-span-2  row-span-2 relative'>
                    <Image src={BannerRight} fill className='object-cover rounded-2xl' alt='Banner' placeholder='blur' sizes="90vw" />
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-1 gap-5 '>
                    <div className='relative'>
                        <Image src={LeftTopBanner} fill className='object-cover rounded-2xl' alt='Banner' placeholder='blur' sizes="90vw" />
                    </div>
                    <div className='relative'>
                        <Image src={LeftBottomBanner} fill className='object-cover rounded-2xl' alt='Banner' placeholder='blur' sizes="90vw" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ThirdPartBanner