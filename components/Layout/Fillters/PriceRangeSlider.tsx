import React from 'react';
import { Range } from 'react-range';

interface PriceRangeSliderProps {
    minPrice: number;
    maxPrice: number;
    step: number;
    values: number[];
    onChange: (values: number[]) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ minPrice, maxPrice, step, values, onChange }) => {
    return (
        <Range
            step={step}
            min={minPrice}
            max={maxPrice}
            values={values}
            onChange={onChange}
            renderTrack={({ props, children }) => (
                <div
                    className='w-full h-1 rounded-full bg-gray-50 !relative'
                    {...props}

                >
                    <div
                        className='absolute bg-primary-600 h-full'
                        style={{
                            left: `${(values[0] - minPrice) / (maxPrice - minPrice) * 100}%`,
                            width: `${(values[1] - values[0]) / (maxPrice - minPrice) * 100}%`
                        }}
                    />
                    {children}

                    <p className='text-xs text-gray-300 absolute left-0 top-[200%]'>ارزانترین</p>
                    <p className='text-xs text-gray-300 absolute right-0 top-[200%]'>گرانترین</p>
                </div>
            )}
            renderThumb={({ props }) => (
                <div
                    className='w-3 h-3 rounded-full bg-white border-[3px] border-primary-600 left-0 outline-none'
                    {...props}

                />
            )}
        />
    );
};

export default PriceRangeSlider;
