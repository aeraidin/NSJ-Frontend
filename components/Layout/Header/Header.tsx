
import React, { useState } from "react";
import Cart from "./Cart";
import Profile from "./Profile";

function Header() {
  return <div className="w-full sticky top-0 left-0 bg-white z-50  px-6">
    <div className="Container flex items-center  justify-between  py-7 border-b border-gray-50">
      <div></div>
      <div className="flex items-center gap-x-8">
        <Profile />
        <Cart />
      </div>
    </div>
  </div>;
}

export default Header;
