"use client"
import React, { useEffect, useState } from 'react'
import PriceRangeSlider from './PriceRangeSlider'
import { NumericFormat } from 'react-number-format';
import useGetMaxPriceSans from '@/util/hook/useGetMaxPriceSans';
interface PriceRangeSliderProps {
    values: number[];
    onChange: (values: number[]) => void;
}
const FilterPriceRange: React.FC<PriceRangeSliderProps> = ({ values, onChange }) => {
    const [PriceRange, setPriceRange] = useState<number[] | null>(null);
    const MaxPrice = useGetMaxPriceSans()
    useEffect(() => {
        if (MaxPrice.data) {
            setPriceRange([1000, MaxPrice.data.value.price])
        }
    }, [MaxPrice.data])
    return (
        <div className='flex flex-col gap-6 '>
            <h4 className='text-gray-500'>فیلتر قیمت</h4>
            {PriceRange &&
                <PriceRangeSlider
                    minPrice={PriceRange[0]}
                    maxPrice={PriceRange[1]}
                    step={5000}

                    values={values}
                    onChange={onChange}
                />}
            <div className='flex flex-col gap-4 items-center justify-center'>
                <div className='w-full mt-6 grid grid-cols-2 gap-3'>
                    <div className='w-full py-3 flex items-center justify-center rounded-2xl bg-gray-25 border border-gray-50'>
                        <h3><NumericFormat
                            value={values ? values[1] : 0}
                            displayType={"text"}
                            thousandSeparator={","}
                        /></h3>
                    </div>
                    <div className='w-full py-3 flex items-center justify-center rounded-2xl bg-gray-25 border border-gray-50'>
                        <h3><NumericFormat
                            value={values ? values[0] : 0}
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