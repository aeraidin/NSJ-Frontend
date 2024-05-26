import { Heart } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'
import LengthTag from '../Tags/LengthTag'
import useGetFavorites from '@/util/hook/user/useGetFavorites'

function BookMark() {
    const data = useGetFavorites(1)
    return (
        <Link href={"/profile/favorite"} className='relative'>
            <LengthTag favorite length={data.data ? data?.data?.value?.list.length : 0} />
            <Heart size="32" className='text-gray-600' />
        </Link>
    )
}

export default BookMark