import React from 'react'

function LengthTag({ length }: { length: number }) {
    return (
        <div className='absolute border-2 border-white -right-[6px] top-[0px] text-[10px] w-[20px] h-[20px] bg-error-600  rounded-full text-white text-center flex items-center justify-center'><p>{length}</p></div>
    )
}

export default LengthTag