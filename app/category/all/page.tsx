"use client"
import MainLayout from '@/components/Layout/MainLayout'
import Breadcrumb from '@/components/Layout/breadcrumb'
import useGetAllCategory from '@/util/hook/Category/useGetAllCategory'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Page() {
    const data = useGetAllCategory()
    const Data = data?.data?.value.list as CategoryItem[] | undefined
    return (
        <MainLayout>
            <div className='Container flex flex-col  gap-8 pt-8'>
                <div className='w-full flex items-center justify-between'>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">خانه
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href={`/service`}>
                            دسته بندی ها
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className='w-full grid grid-cols-2 md:grid-cols-4  lg:grid-cols-6 gap-4  '>
                    {Data && Data.map((item, index) => {
                        return <div key={index} className='p-6 flex flex-col items-center justify-center border border-gray-50 rounded-xl hover:shadow-CMSHADOW duration-150 hover:border-gray-100'>
                            <Link href={`/category/${item.id}`} className='flex items-center justify-center flex-col gap-3'>
                                <div className='w-[32px] h-[32px] lg:w-[64px] lg:h-[64px] relative'>
                                    <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URLIMAGE}${item.icon}`} alt={item.name} fill className='object-contain ' />
                                </div>
                                <h3 className='whitespace-nowrap text-base lg:text-lg'>{item.name}</h3></Link>
                        </div>
                    })}
                </div>
            </div>
        </MainLayout>
    )
}

export default Page