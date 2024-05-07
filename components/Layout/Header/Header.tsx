/** @format */

import React from "react";
import Cart from "./Cart";
import Profile from "./Profile";
import SearchBox from "./SearchBox";
import BookMark from "./BookMark";
import Link from "next/link";
import { useSestion } from "@/util/session";

function Header() {
  const Session = useSestion();

  return (
    <div className="w-full sticky top-0 left-0 bg-white z-50  px-6">
      <div className="Container flex items-center  justify-between  py-7 border-b border-gray-50">
        <div className=" flex justify-between items-center w-full max-w-[900px] ">
          <Link href={"/"}>
            <h1 className=" text-primary-600 text-4xl select-none">
              SportTicket
            </h1>
          </Link>
          <div className=" max-w-[589px] max-h-[112px]  h-full w-full">
            <SearchBox />
          </div>
        </div>
        <div className="flex items-center gap-x-8">

          <Profile />
          {Session ? <React.Fragment>
            <BookMark />
            <Cart />
          </React.Fragment>
            : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
