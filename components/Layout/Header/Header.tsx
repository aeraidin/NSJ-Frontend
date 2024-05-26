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
import useClickOutside from "@/util/hook/useClickOutside";

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
  const handleClickOutside = () => {
    setSearching(false);
  };
  const containerRef = useClickOutside(handleClickOutside);

  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (searching) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [searching]);
  return (
    <>
      {searching ? (
        <>
          <div className=" w-full min-h-screen lg:hidden bg-black/40 backdrop-blur-sm fixed z-40"></div>
          <motion.div
            ref={containerRef}
            dragConstraints={containerRef}
            drag={"y"}
            initial={{ opacity: 0, translateY: 30 }}
            exit={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2 }}
            onDrag={(event, info) => {
              if (info.offset.y > 400) {
                setSearching(false);
              }
            }}
            className=" w-full gap-y-9 flex flex-col  min-h-screen  fixed lg:hidden rounded-3xl bg-white z-50 top-40 bottom-0 right-0"
          >
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
          </motion.div>
        </>
      ) : null}

      <div
        className={`w-full sticky top-0 left-0 bg-white z-30 px-6 border-b border-gray-50`}
      >
        <motion.div
          className={`Container flex items-center justify-between gap-6 py-4`}
        >
          <div className=" flex flex-col lg:flex-row gap-4 lg:gap-0  justify-between items-center w-full lg:w-fit ">
            <div className=" w-full justify-between flex  items-center">
              <Link href={"/"}>
                <div className="flex items-center gap-2">
                  <div
                    className="relative w-[24px] h-[45px] lg:w-[30px] lg:h-[68px]"
                  >
                    <Image src={"/Icons/Logo.svg"} fill alt="Logo" />
                  </div>
                  <div
                    className="relative w-[80px] h-[34px]  lg:w-[120px] lg:h-[35px]"
                  >
                    <Image src={"/Icons/LogoFont.svg"} fill alt="Logo" />
                  </div>
                </div>
              </Link>
              <div className=" w-full flex items-center gap-x-7 lg:hidden justify-end ">
                <SearchNormal1
                  onClick={() => setSearching(true)}
                  className=" cursor-pointer text-gray-700 hover:text-gray-500 duration-200"
                />
                <Cart />
              </div>
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
