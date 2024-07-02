/** @format */

"use client";

import Breadcrumb from "@/components/Layout/breadcrumb";
import MainLayout from "@/components/Layout/MainLayout";
import Image from "next/image";
import React from "react";
import iran from "../../public/Icons/About/iranmap.png";
import iranlight from "../../public/Icons/About/iranmap-light.png";
import banner from "../../public/Banner/AboutUs/1344x360.jpg";
import check from "../../public/Icons/About/check.png";
import target from "../../public/Icons/About/target.png";

function page() {
  return (
    <MainLayout>
      <div className=" w-full mt-4 mb-11">
        <Breadcrumb>
          <Breadcrumb.Item href="/">خانه</Breadcrumb.Item>
          <Breadcrumb.Item href={`/about`}>درباره ما</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className=" w-full gap-y-20 px-4 lg:px-0">
        <div className=" w-full relative  max-w-[1344px] h-[190px] lg:h-[360px] rounded-[35px] bg-gray-200 ">
          <Image
            src={banner}
            className="rounded-[35px]"
            fill
            alt="aboutUs"
            sizes="90vw"
          />
        </div>

        <div className=" w-full mt-20">
          <p className=" text-base lg:text-2xl text-center text-gray-600 font-semibold">
            معرفی فانیکت
          </p>
          <p className=" mt-12 leading-7 font-semibold text-gray-500 text-justify">
            فانیکت پلتفرمی نوآورانه برای خرید و فروش بلیط رویدادهای مختلف است که
            با هدف ارائه تجربه‌ای آسان و لذت‌بخش برای کاربران خود طراحی شده است.
            ما در فانی تیکت به دنبال آن هستیم که با ارائه تنوع گسترده‌ای از
            بلیط‌ها برای انواع رویدادها، از جمله مسابقات ورزشی و جشنواره‌ها،
            نیازهای مختلف کاربران خود را برآورده کنیم. ماموریت فانیکت این است که
            به کاربران خود امکان دسترسی آسان به بلیط رویدادهای مورد علاقه‌شان را
            با قیمتی مناسب فراهم کند. ما با حذف واسطه‌ها و ارائه بلیط‌ها به صورت
            مستقیم از برگزارکنندگان، قیمت‌ها را تا حد امکان پایین نگه می‌داریم.
          </p>
        </div>

        <div className=" w-full mt-10 lg:mt-24">
          <div className=" flex flex-col xl:flex-row gap-y-7 lg:gap-x-3 justify-center items-center mt-10 lg:mt-12">
            <div className=" w-full hidden xl:flex xl:max-w-[320px]  justify-center items-center">
              <div className=" w-full max-w-[180px]   h-[160px] relative xl:max-w-[180px] rounded-2xl ">
                <Image src={check} fill alt="check" sizes="90vw" />
              </div>
            </div>
            <div className=" flex flex-col items-start gap-y-6">
              <p className="text-base  lg:text-2xl text-center text-gray-600 font-semibold">
                مزایای فانیکت
              </p>
              <div className=" font-semibold flex flex-col gap-y-1 lg:max-w-[830px] text-justify text-gray-500 leading-7">
                <p className=" font-semibold text-justify text-gray-500 leading-7">
                  <span className=" font-bold">طیف گسترده ای از بلیط ها :</span>
                  ما بلیط های رویدادهای مختلف را در سراسر کشور ارائه می دهیم.
                </p>
                <p className=" font-semibold text-justify text-gray-500 leading-7">
                  <span className=" font-bold">قیمت های مناسب :</span>
                  ما همیشه در تلاش هستیم تا بهترین قیمت ها را به مشتریان خود
                  ارائه دهیم.
                </p>
                <p className=" font-semibold text-justify text-gray-500 leading-7">
                  <span className=" font-bold">خرید آسان :</span>
                  می توانید به راحتی و به سرعت بلیط های خود را به صورت آنلاین یا
                  از طریق اپلیکیشن ما خریداری کنید.
                </p>
                <p className=" font-semibold text-justify text-gray-500 leading-7">
                  <span className=" font-bold">خدمات مشتری عالی :</span>
                  تیم پشتیبانی ما همیشه در دسترس شما هستند تا به شما کمک کنند.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-10 lg:mt-[90px] flex flex-col-reverse  xl:flex-row gap-y-7 lg:gap-x-3 justify-center items-center ">
          <div className=" flex flex-col items-start gap-y-6">
            <p className="text-base  lg:text-2xl text-center text-gray-600 font-semibold">
              خدمات ما
            </p>
            <div className=" font-semibold flex flex-col gap-y-2 lg:max-w-[830px] text-justify text-gray-500 leading-7">
              <p className=" font-semibold text-justify text-gray-500 leading-7">
                فانیکت طیف گسترده‌ای از خدمات را به کاربران خود ارائه می‌دهد، از
                جمله: امکان جستجو و یافتن بلیط برای انواع خدمات ورزشی مقایسه
                قیمت بلیط‌ها از فروشندگان مختلف خرید بلیط به صورت آنلاین یا از
                طریق اپلیکیشن موبایل دانلود بلیط‌های الکترونیکی لغو یا تغییر
                بلیط (در صورت امکان) مزایای ما تنوع گسترده‌ای از بلیط‌ها برای
                انواع رویدادها قیمت‌های مناسب فرآیند خرید آسان و امن تیمی متخصص
                و با انگیزه
              </p>
            </div>
          </div>
          <div className=" w-full hidden xl:flex xl:max-w-[320px]  justify-center items-center">
            <div className=" w-full h-[160px] relative xl:max-w-[180px] rounded-2xl ">
              <Image src={target} fill alt="target" sizes="90vw" />
            </div>
          </div>
        </div>

        <div className=" w-full mt-12 lg:mt-[90px] mb-[92px] relative">
          <div className=" flex w-full gap-x-3 flex-col xl:flex-row justify-center items-center mt-10 lg:mt-[118px]">
            <div className=" flex flex-col items-start gap-y-10">
              <p className="text-base lg:text-2xl  text-gray-600 font-semibold">
                اسپورتیکت در کدام شهر ها فعال است؟
              </p>

              <p className=" max-w-[740px]  w-full font-semibold leading-7  text-justify text-gray-500">
                در حال حاضر فانیکت تنها در استان تهران فعالیت دارد اما به زودی
                وارد شهر شما میشود
              </p>
            </div>
            <div className=" w-[380px] lg:w-[440px] mt-10 lg:mt-20 xl:mt-0 lg:0 h-[350px] lg:h-[391px] relative rounded-2xl ">
              <Image
                src={iran}
                className=" relative select-none object-cover"
                fill
                alt="iranmap"
              />
              <div className=" absolute w-fit rounded-2xl select-none py-2 px-4 top-20 lg:top-24 animate-bounce left-40 lg:left-44 bg-primary-600">
                <p className=" text-center font-semibold text-white">تهران</p>
              </div>

              {/* <div className=" absolute w-fit rounded-2xl select-none py-2 px-4 top-20 lg:top-24 animate-bounce left-64 lg:left-[310px] bg-primary-600">
                <p className=" text-center font-semibold text-white">مشهد</p>
              </div>

              <div className=" absolute w-fit rounded-2xl select-none py-2 px-4 top-44 lg:top-[210px] animate-bounce left-20 lg:left-[100px] bg-primary-600">
                <p className=" text-center font-semibold text-white">اهواز</p>
              </div> */}
            </div>
          </div>

          <div className="  flex flex-col lg:flex-row gap-x-[120px] justify-center items-start  lg:items-center mt-10 lg:mt-[220px]">
            <div className=" flex flex-col gap-y-4 lg:gap-y-6 rounded-2xl ">
              <p className=" text-primary-600 font-semibold text-base lg:text-[32px]">
                چشم انداز
              </p>
              <p className=" text-secondary-600 font-semibold text-base lg:text-[32px]">
                فانیکـــــــــــت
              </p>
            </div>
            <p className=" w-full lg:max-w-[632px] leading-7 mt-2 lg:mt-0 text-sm font-semibold text-justify text-gray-500">
              وب اپلیکیشن فانیکت ارائه دهنده خدمات تفریحی و ورزشی ما با هدف
              ایجاد یک فضای یکپارچه و دسترس‌پذیر برای همه علاقه‌مندان به
              فعالیت‌های تفریحی و ورزشی طراحی شده است. چشم‌انداز ما این است که
              این پلتفرم به مرجعی جامع و معتبر برای تمامی افراد، از مبتدیان تا
              حرفه‌ای‌ها، تبدیل شود. ما به دنبال این هستیم که هر فرد بتواند به
              راحتی و با اطمینان کامل، خدمات مورد نیاز خود را پیدا کند و
              تجربه‌ای بی‌نظیر و به یاد ماندنی را برای خود رقم بزند.
            </p>
          </div>

          <div className=" w-[110px] h-[110px]   lg:w-full lg:h-full absolute top-10 lg:top-[120px]   rounded-2xl ">
            <Image
              src={iranlight}
              className="object-cover select-none"
              alt="iranmap"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default page;
