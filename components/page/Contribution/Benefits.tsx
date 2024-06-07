import Image from 'next/image'
import React from 'react'
function Benefits() {
    const data = [
        { title: "افزایش فروش و درآمد", image: "/Prelogin/Benefits/Income.png" },
        { title: "بازاریابی هدفمند", image: "/Prelogin/Benefits/TargetMarketing.png" },
        { title: "مدیریت آسان", image: "/Prelogin/Benefits/EasyManage.png" }
    ]
    return (
        <div className='w-full flex flex-col items-center justify-center gap-16'>
            <h1 className='text-2xl lg:text-3xl'>مزایای همکاری با فانیکت</h1>
            <div className='w-full  grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {data.map((item, index) => {
                    return <div key={index} className='w-full h-full  flex flex-col gap-6 items-center justify-center group hover:-translate-y-6 duration-150'>
                        <div className='w-full h-[300px] max-w-[500px] mx-auto bg-gray-25 rounded-2xl border border-transparent group-hover:border-gray-200 duration-150'>
                            <div className='w-full max-w-[260px] h-full relative mx-auto'>
                                <Image src={item.image} fill alt='image' className='object-contain' />
                            </div>
                        </div>
                        <h2 className='font-semibold'>{item.title}</h2>
                    </div>
                })}
            </div>
        </div>


    )
}

export default Benefits