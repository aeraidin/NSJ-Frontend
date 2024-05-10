import { Bag2 } from 'iconsax-react'
import React from 'react'
import LengthTag from '../Tags/LengthTag'
import Link from 'next/link'

function Cart() {
    return (
        <Link href={"/cart"} className='relative'>
            <LengthTag length={0} />
            <Bag2 size="32" className='text-gray-600' />
        </Link>
    )
}

export default Cart