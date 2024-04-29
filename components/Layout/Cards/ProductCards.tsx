import { ArrowLeft2, Location } from 'iconsax-react';
import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa6";
function ProductCards({ data }: { data: ProductCard }) {
    return (
        <div className='w-full select-none max-w-[321px] h-fit border border-gray-50 rounded-2xl overflow-hidden hover:shadow-CMSHADOWHover duration-200 group'>
            <div className='aspect-w-8 aspect-h-5 overflow-hidden relative'>
                <Image fill
                    className="object-cover group-hover:scale-110 duration-150"
                    alt={data.filePath}
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URLIMAGE}${data.filePath}`} />
            </div>
            <div className='p-3'>
                {/* Info Part */}
                <div className='flex flex-col gap-3 pb-3'>
                    <div className='w-full flex items-center justify-between'>
                        <h3>{data.serviceName}</h3>
                        <div className='flex items-center gap-2 justify-center'>
                            <h4 className='leading-[12px]'>{data.rate}</h4>
                            <FaStar className='text-secondary-600' size={20} />
                        </div>
                    </div>
                    <div className='w-full flex items-center gap-2 '>
                        {/* Location */}
                        <div className='flex items-center border-l border-gray-300 pl-2 gap-1'>
                            <Location
                                size="20"
                                className='text-gray-300'
                                variant='Bold'
                            />
                            <h4>پاسداران</h4>
                        </div>
                        <h4>ورزش و تفریحات آبی</h4>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h4 className='text-gray-200 line-through'>200.000</h4>
                        <div></div>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <p>180.000 تومان</p>

                    <div className='text-third-400 flex items-center gap-1 -translate-x-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-150 '>
                        <h5 className=''>مشاهده و خرید</h5>
                        <ArrowLeft2 size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCards