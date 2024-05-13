/** @format */

"use client";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Profile from "./Profile";
import SearchBox from "./SearchBox";
import BookMark from "./BookMark";
import Link from "next/link";
import { useSestion } from "@/util/session";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, SearchNormal, SearchNormal1 } from "iconsax-react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const [searching, setSearching] = useState(false);
  return (
    <>
      {searching ? (
        <div className=" w-full gap-y-9 flex flex-col  min-h-screen  absolute lg:hidden bg-white z-50 top-0 bottom-0 right-0">
          <div className=" flex w-full justify-between items-center p-6">
            <ArrowRight
              className=" cursor-pointer text-gray-700 hover:text-gray-300 duration-200"
              onClick={() => setSearching(false)}
            />
            <div className="w-full ">
              <h2 className=" text-[#5C5C5C] text-center">جستجو</h2>
            </div>
          </div>
          <div className=" px-3">
            <SearchBox />
          </div>
        </div>
      ) : null}

      <div
        className={`w-full sticky top-0 left-0 bg-white z-30 px-6 border-b border-gray-50`}
      >
        <motion.div
          // animate={
          //   scrolled
          //     ? { paddingTop: "10px", paddingBottom: "10px" }
          //     : { paddingTop: "14px", paddingBottom: "14px" }
          // }
          // transition={{ duration: 0.1 }}
          className={`Container flex items-center justify-between py-4`}
        >
          <div className=" flex flex-col lg:flex-row gap-4 lg:gap-0  justify-between items-center w-full lg:w-fit ">
            <div className=" w-full justify-between flex  items-center">
              <Link href={"/"}>
                <div className="flex items-center gap-2">
                  <div
                    // animate={
                    //   scrolled
                    //     ? { width: "35px", height: "69px" }
                    //     : { width: "40px", height: "78px" }
                    // }
                    // transition={{ duration: 0.1 }}
                    className="relative w-[40px] h-[78px]"
                  >
                    <Image src={"/Icons/Logo.svg"} fill alt="Logo" />
                  </div>
                  <div
                    // animate={
                    //   scrolled
                    //     ? { width: "140px", height: "35px" }
                    //     : { width: "160px", height: "55px" }
                    // }
                    className=" relative w-[160px] h-[55px]"
                  >
                    <Image src={"/Icons/LogoFont.svg"} fill alt="Logo" />
                  </div>
                </div>
              </Link>

              <div className=" w-full flex items-center gap-x-7 lg:hidden justify-end ">
                {pathname !== "/" ? (
                  <>
                    <SearchNormal1
                      onClick={() => setSearching(true)}
                      className=" cursor-pointer text-gray-700 hover:text-gray-500 duration-200"
                    />
                  </>
                ) : null}
                <Cart />
              </div>
            </div>

            <div className="max-w-[590px] w-full block  lg:hidden">
              {pathname === "/" ? <SearchBox /> : null}
            </div>
          </div>

          <div className="max-w-[590px] w-full hidden  lg:block">
            <SearchBox />
          </div>
          <div className=" items-center gap-x-8 hidden lg:flex">
            <Profile />
            <BookMark />
            <Cart />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Header;
