import CartProductCards from '@/components/Layout/Cards/CartProductCards';
import React from 'react'

function Cart({ Data }: { Data: CartDetail | undefined }) {
    return (
        <div className='flex flex-col gap-4'>
            {Data
                ? Data.list.map((item, index) => {
                    return <CartProductCards key={index} data={item} />;
                })
                : null}</div>
    )
}

export default Cart