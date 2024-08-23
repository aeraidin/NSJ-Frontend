"use client"
import { Bag2 } from "iconsax-react";
import React from "react";
import LengthTag from "../Tags/LengthTag";
import Link from "next/link";
import UseGetCart from "@/util/hook/Cart/UseGetCart";

function Cart() {
  const data = UseGetCart();
  console.log(data.isSuccess);

  return (
    <Link href={"/cart"} className="relative">
      <LengthTag length={data.isSuccess && data.data.value ? data.data.value.packageList.length + data.data.value.sansList.length : 0} />
      <Bag2 size="32" className="text-gray-600" />
    </Link>
  );
}

export default Cart;
