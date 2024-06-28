import Image from 'next/image'
import React from 'react'

function LoginGuide() {
    return (
        <div className='w-full flex flex-col items-center justify-center gap-16'>

            <h1 className='text-2xl lg:text-3xl'>مراحل ثبت نام  و مدارک موردنیاز</h1>
            <div className='w-full bg-gray-25 rounded-2xl mx-auto py-10 max-w-[1080px] '>
                <div className='h-[450px] w-full relative'>
                    <Image src={"/Prelogin/Guide.png"} fill className='object-contain' alt='Guide' sizes="90vw" />
                </div>
            </div>
        </div>
    )
}

export default LoginGuide