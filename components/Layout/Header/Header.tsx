import React from "react";
import Cart from "./Cart";
import { User } from "iconsax-react";

function Header() {
  return <div className="w-full  px-6">
    <div className="Container flex items-center  justify-between  py-7 border-b border-gray-50">
      <div></div>
      <div className="flex items-center gap-x-8">
        <button className="bg-secondary-600  text-white px-6 py-4 rounded-xl shadow-xl text-sm shadow-secondary-600/60 hover:shadow-none duration-200">
          ورود/عضویت
        </button>
        <Cart />
      </div>

    </div>
  </div>;
}

export default Header;
