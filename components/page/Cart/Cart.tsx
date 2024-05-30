import CartProductCards from '@/components/Layout/Cards/CartProductCards';
import React from 'react'

function Cart({ Data }: { Data: CartDetail | undefined }) {
    return (
        <>
            {Data
                ? Data.list.map((item, index) => {
                    return <CartProductCards key={index} data={item} />;
                })
                : null}</>
    )
}

export default Cart