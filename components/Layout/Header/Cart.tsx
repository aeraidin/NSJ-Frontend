/** @format */

import { Bag2 } from "iconsax-react";
import React from "react";
import LengthTag from "../Tags/LengthTag";
import Link from "next/link";
import UseGetCart from "@/util/hook/Cart/UseGetCart";

function Cart() {
  const data = UseGetCart();

  return (
    <Link href={"/cart"} className="relative">
      <LengthTag length={data.isSuccess ? data.data.value.list.length : 0} />
      <Bag2 size="32" className="text-gray-600" />
    </Link>
  );
}

export default Cart;
