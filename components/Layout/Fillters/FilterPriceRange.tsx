"use client"
import React from 'react'
import PriceRangeSlider from './PriceRangeSlider'
import { NumericFormat } from 'react-number-format';
interface PriceRangeSliderProps {
    values: number[];
    onChange: (values: number[]) => void;
}
const FilterPriceRange: React.FC<PriceRangeSliderProps> = ({ values, onChange }) => {

    return (
        <div className='flex flex-col gap-6 '>
            <h4 className='text-gray-500'>فیلتر قیمت</h4>
            <PriceRangeSlider
                minPrice={1000}
                maxPrice={400000}
                step={5000}
                values={values}
                onChange={onChange}
            />
            <div className='flex flex-col gap-4 items-center justify-center'>
                <div className='w-full mt-6 grid grid-cols-2 gap-3'>
                    <div className='w-full py-3 flex items-center justify-center rounded-2xl bg-gray-25 border border-gray-50'>
                        <h3><NumericFormat
                            value={values[1]}
                            displayType={"text"}
                            thousandSeparator={","}
                        /></h3>
                    </div>
                    <div className='w-full py-3 flex items-center justify-center rounded-2xl bg-gray-25 border border-gray-50'>
                        <h3><NumericFormat
                            value={values[0]}
                            displayType={"text"}
                            thousandSeparator={","}
                        /></h3>
                    </div>
                </div>
                <p className='text-xs text-gray-300'>قیمت به تومان است</p>
            </div>
        </div>
    )
}

export default FilterPriceRange