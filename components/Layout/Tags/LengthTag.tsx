import React from 'react'

function LengthTag({ length, favorite }: { length: number, favorite?: boolean }) {
    return (
        <div className={`absolute border-2 border-white -right-[6px] top-[0px]  w-[20px] h-[20px] ${length > 0 && !favorite ? "bg-success-600" : length > 0 && favorite ? "bg-error-600" : "bg-gray-300"}  rounded-full text-white text-center flex items-center justify-center`}><h5 className='text-white text-[12px]'>{length}</h5></div>
    )
}

export default LengthTag