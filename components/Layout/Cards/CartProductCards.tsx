import { Location } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'
import { NumericFormat } from 'react-number-format'

function CartProductCards({ data }: { data: CartItems }) {
    return (
        <div className='w-full  border border-gray-50 p-7 rounded-2xl hover:border-gray-100 hover:shadow-CMSHADOW duration-200'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5 pb-7 border-b border-dashed border-gray-50'>
                <div className="aspect-w-8 aspect-h-5 overflow-hidden relative rounded-2xl">
                    <Image
                        fill
                        className="object-cover group-hover:scale-110 duration-150 "
                        alt={data.filePath}
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URLIMAGE}${data.filePath}`}
                        sizes="90vw"
                    />
                </div>
                <div className='flex flex-col items-start justify-between'>
                    <div className='flex flex-col gap-4'>
                        <h2>{data.serviceName}</h2>
                        <div className="flex items-center gap-2">
                            <Location size="24" className="text-gray-300" variant="Bold" />
                            <h5>{data.location}</h5>
                        </div>
                    </div>
                    <div className='w-full flex items-end justify-between'>
                        <div className='flex items-center gap-2'>
                            <p>تعداد بلیت</p>
                            <div className='flex items-center gap-2'>
                                <button className='CartAddButtons'>+</button>
                                <p>{data.count}</p>
                                <button className='CartAddButtons'>-</button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-end'>

                            <div className={`flex items-center gap-2  ${data.hasDiscount ? "opacity-100" : "opacity-0"}`}>
                                <div className="px-2 py-1  bg-error-500 rounded-xl">
                                    <h5 className="text-white leading-4">{data.discountPresentage}٪</h5>
                                </div>
                                <h5 className="text-gray-200 line-through">  <NumericFormat
                                    value={data.price}

                                    displayType={"text"}
                                    thousandSeparator={","}
                                /> </h5>
                            </div>
                            <h2 className='text-third-500'> <NumericFormat
                                value={data.hasDiscount ? data.priceAfterDiscount : data.price}
                                displayType={"text"}
                                thousandSeparator={","}
                            />{" تومان "}</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProductCards