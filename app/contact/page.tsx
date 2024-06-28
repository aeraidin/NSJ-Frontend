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
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد.
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
