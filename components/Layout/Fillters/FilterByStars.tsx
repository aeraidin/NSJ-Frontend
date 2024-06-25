import React, { useCallback } from 'react'
import { FaStar } from 'react-icons/fa'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function FilterByStars() {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const rating = searchParams.get("rating")
    const createQueryString = useCallback(
        (value: string) => {
            if (value === rating) {
                return ""
            } else {
                const params = new URLSearchParams(searchParams.toString())
                params.set("rating", value)
                return params.toString()
            }
        },
        [rating, searchParams]
    )



    return (
        <div className='flex flex-col gap-6 pt-6'>
            <h4 className='text-gray-500'>بر اساس امتیاز</h4>
            <div className='flex flex-col gap-4'>
                <button onClick={() => router.push(pathname + '?' + createQueryString('5'))} className={`w-full flex items-center gap-2 border hover:border-gray-300 duration-150 rounded-2xl py-6 px-4 ${rating === "5" ? "border-gray-300" : "border-gray-50"}`}>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                    </div>
                    <h5 className='text-gray-500'>امتیاز 5 ستاره</h5>
                </button>
                <button onClick={() => router.push(pathname + '?' + createQueryString('4'))} className={`w-full flex items-center gap-2 border hover:border-gray-300 duration-150 rounded-2xl py-6 px-4 ${rating === "4" ? "border-gray-300" : "border-gray-50"}`}>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-gray-50' />
                    </div>
                    <h5 className='text-gray-500'>امتیاز 4 ستاره به بالا</h5>
                </button>
                <button onClick={() => router.push(pathname + '?' + createQueryString('3'))} className={`w-full flex items-center gap-2 border hover:border-gray-300 duration-150 rounded-2xl py-6 px-4 ${rating === "3" ? "border-gray-300" : "border-gray-50"}`}>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-gray-50' />
                        <FaStar className='text-gray-50' />
                    </div>
                    <h5 className='text-gray-500'>امتیاز 3 ستاره به بالا</h5>
                </button>
            </div>
        </div>
    )
}

export default FilterByStars