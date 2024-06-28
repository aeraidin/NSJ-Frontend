import Image from 'next/image'
import React from 'react'
import Banner from "/public/Banner/1344x130a.jpg"
function ForthPartBanner() {
    return (
        <div className='aspect-w-16 aspect-h-2 max-h-[130px] relative'>
            <Image src={Banner} fill className='object-contain rounded-2xl max-h-[130px] ' alt='Banner' placeholder='blur' sizes="90vw" />
            {/* Category */}
        </div>
    )
}

export default ForthPartBanner