/** @format */

"use client";
import MainLayout from "@/components/Layout/MainLayout";
import React from "react";
import Breadcrumb from "@/components/Layout/breadcrumb";
import ContactUsForm from "@/components/Layout/Forms/ContactUsForm";
import Image from "next/image";
import { motion } from "framer-motion";

import support from "@/public/Support/support.png";

function contact() {
  return (
    <MainLayout>
      <div className=" w-full mt-4 mb-11 ">
        <Breadcrumb>
          <Breadcrumb.Item href="/dashboard/">خانه</Breadcrumb.Item>
          <Breadcrumb.Item href={`/about`}>تماس ما</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <h1 className=" text-primary-600 mb-8">تماس با ما</h1>
      <p className=" font-semibold text-sm lg:text-base leading-7">
        در فانیکت، همواره آماده پاسخگویی به سوالات، پیشنهادات و نیازهای شما
        هستیم. <br />
        برای ارتباط با تیم پشتیبانی ما، می‌توانید از روش‌های زیر استفاده کنید :
      </p>
      <br />
      <p className=" font-semibold xl:mt-2 text-sm lg:text-base leading-7">
        آدرس دفتر مرکزی: تهران، خیابان سهروردی، خیابان خرمشهر، خیابان عربعلی،
        خیابان نسترن شرقی، پلاک 54
      </p>
      <br />
      <p className=" font-semibold xl:mt-2 text-sm lg:text-base leading-7">
        شماره تماس : 02188748501
      </p>
      <br />
      <p className=" font-semibold xl:mt-2 text-sm lg:text-base leading-7">
        ایمیل پشتیبانی: support@faniket.ir
        <br />
        ایمیل عمومی: info@faniket.ir
      </p>
      <br />

      <p className=" font-semibold xl:mt-2 text-sm lg:text-base leading-7">
        ساعات کاری: <br />
        شنبه تا چهارشنبه: 9 صبح تا 6 عصر <br />
        پنج‌شنبه: 9 صبح تا 1 بعدازظهر
        <br />
        همچنین می‌توانید از فرم زیر برای ارسال پیام به ما استفاده کنید. تیم ما
      </p>

      <p className=" font-semibold xl:mt-4 text-sm lg:text-base leading-7">
        در اسرع وقت با شما تماس خواهد گرفت. مشتاقانه منتظر شنیدن نظرات و
        پیشنهادات شما هستیم. با ما در تماس باشید!
      </p>

      <h2 className=" text-primary-600 font-semibold  mt-16">فرم تماس</h2>
      <div className=" w-full flex mt-8">
        <div className=" w-full max-w-[924px] px-9 py-[74px] mb-10 border-gray-50 h-fit lg:h-[636px] border rounded-3xl">
          <ContactUsForm />
        </div>
        <div className=" w-full hidden  lg:flex justify-center items-start">
          <div className="  w-full h-full flex justify-center items-start relative">
            <motion.button
              className=" absolute w-[373px]  h-[373px]"
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src={support}
                className=" select-none"
                fill
                sizes="90vw"
                alt="support"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default contact;
