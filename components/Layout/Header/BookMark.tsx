import { Heart } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'
import LengthTag from '../Tags/LengthTag'

function BookMark() {
    return (
        <Link href={"/"} className='relative'>
            <LengthTag length={0} />
            <Heart size="32" className='text-gray-600' />
        </Link>
    )
}

export default BookMark