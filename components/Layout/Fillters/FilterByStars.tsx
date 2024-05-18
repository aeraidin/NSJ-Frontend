import React from 'react'
import { FaStar } from 'react-icons/fa'

function FilterByStars({ SelectedRate, value }: { SelectedRate: (number: number) => void, value: null | number }) {
    return (
        <div className='flex flex-col gap-6 pt-6'>
            <h4 className='text-gray-500'>بر اساس امتیاز</h4>
            <div className='flex flex-col gap-4'>
                <button onClick={() => SelectedRate(5)} className={`w-full flex items-center gap-2 border hover:border-gray-300 duration-150 rounded-2xl py-6 px-4 ${value === 5 ? "border-gray-300" : "border-gray-50"}`}>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                    </div>
                    <h5 className='text-gray-500'>امتیاز 5 ستاره</h5>
                </button>
                <button onClick={() => SelectedRate(4)} className={`w-full flex items-center gap-2 border hover:border-gray-300 duration-150 rounded-2xl py-6 px-4 ${value === 4 ? "border-gray-300" : "border-gray-50"}`}>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-gray-50' />
                    </div>
                    <h5 className='text-gray-500'>امتیاز 4 ستاره به بالا</h5>
                </button>
                <button onClick={() => SelectedRate(3)} className={`w-full flex items-center gap-2 border hover:border-gray-300 duration-150 rounded-2xl py-6 px-4 ${value === 3 ? "border-gray-300" : "border-gray-50"}`}>
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