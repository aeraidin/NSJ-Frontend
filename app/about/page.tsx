/** @format */
"use client";

import Breadcrumb from "@/components/Layout/breadcrumb";
import MainLayout from "@/components/Layout/MainLayout";
import Image from "next/image";
import React from "react";
import iran from "../../public/Icons/About/iranmap.png";
import iranlight from "../../public/Icons/About/iranmap-light.png";

function page() {
  return (
    <MainLayout>
      <div className=" w-full mt-4 mb-11 ">
        <Breadcrumb>
          <Breadcrumb.Item href="/dashboard/">خانه</Breadcrumb.Item>
          <Breadcrumb.Item href={`/about`}>درباره ما</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className=" w-full gap-y-20">
        <div className=" w-full max-w-[1344px] h-[190px] lg:h-[360px] bg-gray-200 rounded-[35px]"></div>

        <div className=" w-full mt-20">
          <p className=" text-base lg:text-2xl text-center text-gray-600 font-semibold">
            معرفی اسپورتیکت
          </p>
          <p className=" mt-12 leading-7 font-semibold text-gray-500 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
            می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت
            فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
            برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
            فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
            موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
            نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
            موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با
            تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال
            و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
            رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>

        <div className=" w-full mt-32">
          <p className="text-base lg:text-2xl text-center text-gray-600 font-semibold">
            مزایای اسپورتیکت
          </p>

          <div className=" flex flex-col lg:flex-row gap-y-7 lg:gap-x-3 justify-center items-start mt-20 lg:mt-[172px]">
            <div className=" w-full h-[160px] lg:max-w-[502px] bg-gray-300 rounded-2xl "></div>
            <p className=" font-semibold text-justify text-gray-500 leading-7">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>

        <div className=" mt-10 lg:mt-[188px] flex flex-col-reverse  lg:flex-row gap-y-7 lg:gap-x-3 justify-center items-start ">
          <p className=" font-semibold leading-7 text-justify text-gray-500">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </p>
          <div className=" w-full h-[160px] lg:max-w-[502px] bg-gray-300 rounded-2xl "></div>
        </div>

        <div className=" w-full mt-12 lg:mt-[315px] mb-[92px] relative">
          <p className="text-base lg:text-2xl text-center text-gray-600 font-semibold">
            اسپورتیکت در کدام شهر ها فعال است؟
          </p>

          <div className=" flex gap-x-3 flex-col lg:flex-row justify-center items-center mt-10 lg:mt-[172px]">
            <p className=" max-w-[632px] font-semibold leading-7  text-justify text-gray-500">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
            <div className=" w-[380px] lg:w-[640px] mt-10 lg:0 h-[350px] lg:h-[591px] relative rounded-2xl ">
              <Image
                src={iran}
                className=" select-none object-cover"
                fill
                alt="iranmap"
              />
            </div>
          </div>

          <div className="  flex flex-col lg:flex-row gap-x-[180px] justify-center items-start  lg:items-center mt-10 lg:mt-[155px]">
            <div className=" flex flex-col gap-y-4 lg:gap-y-6 rounded-2xl ">
              <p className=" text-primary-600 font-semibold text-base lg:text-[32px]">
                چشم انداز
              </p>
              <p className=" text-secondary-600 font-semibold text-base lg:text-[32px]">
                اسپورتیکـــــــــــت
              </p>
            </div>
            <p className=" max-w-[632px] leading-7 mt-2 lg:mt-0 text-sm font-semibold text-justify text-gray-500">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد.
            </p>
          </div>

          <div className=" w-[110px] h-[110px]   lg:w-full lg:h-full absolute top-10 lg:top-[480px]   rounded-2xl ">
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
