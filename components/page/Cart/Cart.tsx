/** @format */

import CartProductCards from "@/components/Layout/Cards/CartProductCards";
import React from "react";
type CartProductCardsType = packCartItems & sansCartItems;

function Cart({ Data }: { Data: any | undefined }) {
  console.log(Data);

  return (
    <div className="flex flex-col gap-4">
      {Data
        ? Data.map((item: CartProductCardsType, index: number) => {
            return <CartProductCards key={index} data={item} />;
          })
        : null}
    </div>
  );
}

export default Cart;
