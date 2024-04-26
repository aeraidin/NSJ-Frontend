import { Bag2 } from 'iconsax-react'
import React from 'react'
import LengthTag from '../Tags/LengthTag'

function Cart() {
    return (
        <div className='relative'>
            <LengthTag length={0} />
            <Bag2 size="32" className='text-gray-600' />
        </div>
    )
}

export default Cart