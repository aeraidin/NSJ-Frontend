/** @format */

import React from "react";
import SubscribeForm from "./Forms/Subscribe/SubscribeForm";
import Link from "next/link";
import Image from "next/image";
import icon1 from "../../public/FooterIcons/1.png";
import icon2 from "../../public/FooterIcons/2.png";
import icon3 from "../../public/FooterIcons/3.png";
import aparat from "../../public/FooterIcons/aparat.svg";
import instagram from "../../public/FooterIcons/Instagram.png";
import linkedin from "../../public/FooterIcons/Linkedin.png";
import telegram from "../../public/FooterIcons/Telegram.png";
import x from "../../public/FooterIcons/x.svg";
import samandehi from "@/public/FooterIcons/samandehi.png";
import enemad from "@/public/FooterIcons/enemad.png";
import { Copyright } from "iconsax-react";
function Footer() {
  return (
    <footer className=" w-full Container ">
      <div className=" border-t border-gray-50 px-2 lg:px-0  py-10 mb-2 lg:mb-0  flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row">
        <div className=" w-full h-full flex flex-col  gap-y-[38px]">
          <div className=" grid-cols-2 gap-8 lg:gap-0  lg:grid-cols-3 grid">
            <ul className=" space-y-4  ">
              <li className="cursor-pointer ">
                <Link className=" text-gray-600" href={"/about"}>
                  درباره ی فانیکت
                </Link>
              </li>
              <li className="cursor-pointer ">
                <Link className=" text-gray-600" href={"#"}>
                  قوانین و مقررات
                </Link>
              </li>
              <li className="cursor-pointer ">
                <Link className=" text-gray-600" href={"#"}>
                  راهنمای خرید
                </Link>
              </li>
            </ul>

            <ul className=" space-y-4   ">
              <li>
                <Link className=" text-gray-600" href={"/contact"}>
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link className=" text-gray-600" href={"/contribution"}>
                  همکاری با ما
                </Link>
              </li>
              <li>
                <Link className=" text-gray-600" href={"#"}>
                  سوالات متداول
                </Link>
              </li>
            </ul>

            <ul className=" space-y-4  select-none ">
              <li>
                <a href="tel:02188748501" className="  text-gray-600">
                  پشتیبانی : 88748501-021
                </a>
              </li>
            </ul>
          </div>
          <div>
            <span className="  text-gray-400  ">
              آدرس : تهران - خیابان خرمشهر خیابان عربعلی خیابان نسترن شرقی پلاک
              ۵۴ طبقه دوم
            </span>
          </div>
          <div className=" w-full gap-y-4 flex flex-col mb-10 lg:mb-0">
            <h4 className=" text-gray-500">
              جهت اطلاع از آخرین تخفیف های شهرتان آدرس ایمیل خود را وارد نمایید!
            </h4>
            <div className=" w-full rounded-xl  lg:max-w-[585px]">
              <SubscribeForm />
            </div>
          </div>
        </div>
        <div className=" w-full  lg:mt-12 h-full flex justify-center items-start lg:justify-end lg:items-end flex-col gap-y-10">
          <div className="flex gap-x-4">
            {/* <Link
              href="https://trustseal.enamad.ir/?id=490873&Code=6VgDDtlzBJChM4jXJekJ2eSMJRhkQGqL"
              className="w-[108px] relative h-[133px] rounded-lg"
              target="_blank"
              referrerPolicy="origin"
            >
              <Image
                referrerPolicy="origin"
                fill
                sizes="(min-width: 640px) 90vw, 100vw"
                className=" object-contain"
                src="https://trustseal.enamad.ir/logo.aspx?id=490873&Code=6VgDDtlzBJChM4jXJekJ2eSMJRhkQGqL"
                alt="نماد اعتماد الکترونیک"
              />
            </Link> */}
            <Link
              referrerPolicy="origin"
              target="_blank"
              className="  h-[133px] w-[108px] "
              href="https://trustseal.enamad.ir/?id=490873&Code=6VgDDtlzBJChM4jXJekJ2eSMJRhkQGqL"
            >
              <Image
                referrerPolicy="origin"
                src={enemad}
                alt="ENAMAD Logo"
                width={200}
                height={200}
                className="cursor-pointer"
              />
            </Link>
            <div className="w-[108px] relative h-[133px] rounded-lg">
              <Link
                href={
                  "https://logo.samandehi.ir/Verify.aspx?id=369961&p=xlaogvkapfvlpfvlgvkarfth"
                }
                target="_blank"
              >
                <Image
                  // referrerpolicy="origin"
                  referrerPolicy="origin"
                  id="rgvjfukzsizpsizpfukzjxlz"
                  width={120}
                  height={120}
                  className="cursor-pointer"
                  // onclick='window.open("https://logo.samandehi.ir/Verify.aspx?id=369961&p=xlaogvkapfvlpfvlgvkarfth", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")'
                  alt="logo-samandehi"
                  src={samandehi}
                />
              </Link>

              {/* <Image
                fill
                src={icon2}
                alt="icon2"
                sizes="(min-width: 640px) 90vw, 100vw"
              /> */}
            </div>{" "}
          </div>

          <div className=" flex flex-col justify-center items-start lg:justify-end lg:items-start w-full lg:w-fit gap-5">
            <p className=" text-gray-400 text-base font-semibold ">
              فانیکت را در شبکه های اجتماعی دنبال کنید
            </p>

            <div className=" flex gap-x-4">
              <Link
                href={"https://www.instagram.com/funicket.ir"}
                className=" w-12 h-12  relative  duration-200 cursor-pointer  "
              >
                <Image
                  fill
                  src={instagram}
                  className=" object-cover"
                  alt="icon3"
                  sizes="(min-width: 640px) 90vw, 100vw"
                />
              </Link>
              <Link
                href={"https://t.me/funicket"}
                className=" w-12 h-12  relative  duration-200 cursor-pointer  "
              >
                <Image
                  fill
                  src={telegram}
                  className=" object-cover"
                  alt="icon3"
                  sizes="(min-width: 640px) 90vw, 100vw"
                />
              </Link>

              <Link
                href={"https://www.linkedin.com/company/funicket"}
                className=" w-12 h-12  relative  duration-200 cursor-pointer  "
              >
                <Image
                  fill
                  src={linkedin}
                  className=" object-cover"
                  alt="icon3"
                  sizes="(min-width: 640px) 90vw, 100vw"
                />
              </Link>

              <Link
                href={"https://www.aparat.com/funicket"}
                className=" w-12 h-12  relative  duration-200 cursor-pointer  "
              >
                <Image
                  fill
                  src={aparat}
                  className=" object-cover"
                  alt="icon3"
                  sizes="(min-width: 640px) 90vw, 100vw"
                />
              </Link>
              <Link
                href={"https://x.com/funicket"}
                className=" w-12 h-12  relative  duration-200 cursor-pointer  "
              >
                <Image
                  fill
                  src={x}
                  className=" object-cover"
                  alt="icon3"
                  sizes="(min-width: 640px) 90vw, 100vw"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="  border-t mb-20 lg:mb-2 border-gray-50 p-3 gap-3 justify-center h-fit items-start lg:items-center flex ">
        <Copyright
          size={12}
          className=" text-gray-400 mt-1 lg:mt-0 lg:mb-1
        "
        />
        <p className=" text-[8px] text-gray-400 lg:text-sm text-center">
          استفاده از مطالب این وب سایت فقط برای مقاصد غیر تجاری و با ذکر منبع
          بلامانع است. <br className=" lg:hidden" />
          کلیه حقوق این سایت متعلق به شرکت نامدار سهیل جاوید می‌باشد.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
