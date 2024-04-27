/** @format */

import React from "react";
import SubscribeForm from "./Forms/Subscribe/SubscribeForm";
import { Instagram, Sms } from "iconsax-react";
import { TbBrandTelegram } from "react-icons/tb";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" w-full px-20 ">
      <div className=" border-t border-gray-50  py-12 px-28 flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row">
        <div className=" w-full h-full flex flex-col gap-y-[68px]">
          <div className=" grid-cols-3 grid">
            <ul className=" space-y-4 ">
              <li className="cursor-pointer select-none">فانیتیکت</li>
              <li className="cursor-pointer select-none">درباره ی فانیتیکت</li>
              <li className="cursor-pointer select-none">قوانین و مقررات</li>
              <li className="cursor-pointer select-none">راهنمای خرید</li>
            </ul>

            <ul className=" space-y-4  ">
              <li className="cursor-pointer select-none">ارتباط با ما</li>
              <li className="cursor-pointer select-none">تماس با ما</li>
              <li className="cursor-pointer select-none">همکاری با ما</li>
              <li className=" cursor-pointer select-none">سوالات متداول</li>
            </ul>

            <ul className=" space-y-4 ">
              <li className=" cursor-pointer select-none">
                پشتیبانی:87653-021
              </li>
              <li className=" cursor-pointer  select-none">شرکت:87653-021</li>
            </ul>
          </div>

          <div className=" w-full gap-y-4 flex flex-col">
            <h1 className=" text-gray-500">
              جهت اطلاع از آخرین تخفیف های شهرتان آدرس ایمیل خود را وارد نمایید!
            </h1>
            <div className=" w-full  bg-[#F9F8F8] rounded-xl  max-w-[585px]">
              <SubscribeForm />
            </div>
          </div>
        </div>
        <div className=" w-full  h-full flex justify-end items-end flex-col gap-y-10">
          <h1 className=" text-primary-600 text-4xl">SportTicket</h1>
          <div className=" flex gap-x-4">
            <div className=" w-12 h-12 flex justify-center hover:bg-gray-25 duration-200 cursor-pointer items-center border border-gray-100 rounded-2xl">
              <Instagram variant="Bold" className=" text-gray-300" size={24} />
            </div>
            <div className=" w-12 h-12 flex justify-center hover:bg-gray-25 duration-200 cursor-pointer  items-center border border-gray-100 rounded-2xl">
              <Sms variant="Bold" className=" text-gray-300" size={24} />
            </div>
            <div className=" w-12 h-12 flex justify-center hover:bg-gray-25 duration-200 cursor-pointer items-center border border-gray-100 rounded-2xl">
              <TbBrandTelegram className=" text-gray-300" size={24} />{" "}
            </div>
            <div className=" w-12 h-12 flex justify-center hover:bg-gray-25 duration-200 cursor-pointer  items-center border border-gray-100 rounded-2xl">
              <Instagram variant="Bold" className=" text-gray-300" size={24} />
            </div>
          </div>
          <div className="flex gap-x-4">
            <div className="w-[108px] h-[133px] bg-gray-200 rounded-lg"></div>
            <div className="w-[108px] h-[133px] bg-gray-200 rounded-lg"></div>
            <div className="w-[108px] h-[133px] bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
