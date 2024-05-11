"use client"
import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Profile from "./Profile";
import SearchBox from "./SearchBox";
import BookMark from "./BookMark";
import Link from "next/link";
import { useSestion } from "@/util/session";
import Image from "next/image";
import { motion } from "framer-motion";
function Header() {
  const [scrolled, setscroll] = useState(false);
  const [active, setactive] = useState(false);
  useEffect(() => {
    const changecolor = () => {
      if (window.scrollY > 40) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    };
    window.addEventListener("scroll", changecolor);
    return () => {
      window.removeEventListener("scroll", changecolor);
    };
  }, []);
  return (
    <div
      className={`w-full sticky top-0 left-0 bg-white z-50 px-6 border-b border-gray-50`}>
      <motion.div animate={scrolled ? { paddingTop: "10px", paddingBottom: "10px" } : { paddingTop: "14px", paddingBottom: "14px" }}
        transition={{ duration: 0.1 }} className={`Container flex items-center justify-between`}>
        <div className=" flex justify-between items-center w-fit ">
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <motion.div animate={scrolled ? { width: "35px", height: "69px" } : { width: "40px", height: "78px" }}
                transition={{ duration: 0.1 }} className="relative">
                <Image src={"/Icons/Logo.svg"} fill alt="Logo" />
              </motion.div>
              <motion.div animate={scrolled ? { width: "140px", height: "35px" } : { width: "160px", height: "55px" }} className=" relative">
                <Image src={"/Icons/LogoFont.svg"} fill alt="Logo" />
              </motion.div>
            </div>
          </Link>
        </div>
        <div className="max-w-[590px] w-full hidden lg:block">
          <SearchBox />
        </div>
        <div className=" items-center gap-x-8 hidden lg:flex">
          <Profile />
          <BookMark />
          <Cart />
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
