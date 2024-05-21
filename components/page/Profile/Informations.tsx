/** @format */

import ControlledInput from "@/components/Layout/Input/ControlledInput";
import useGetUser from "@/util/hook/user/useGetUser";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";
import React from "react";

function Informations() {
  const user = useGetUser();
  console.log(user.data);

  return (
    <>
      {user.data?.value ? (
        <div className=" w-full  h-full p-4 lg:p-0 ">
          <Link href={"/profile"} className=" gap-x-2 mb-9 lg:hidden flex">
            <ArrowRight className=" text-gray-500" />
            <p className=" text-sm  text-gray-600">بازگشت</p>
          </Link>

          <p className=" text-lg text-gray-600">اطلاعات حساب کاربری</p>

          <div className=" mt-10 grid grid-cols-1 xl:grid-cols-2 w-full gap-x-20">
            <ControlledInput
              disabled
              id="firstName"
              value={user.data?.value?.firstName}
              error=""
              label="نام"
            />
            <ControlledInput
              disabled
              id="lastName"
              error=""
              value={user.data?.value?.lastName}
              label="نام خانوادگی"
            />
            <ControlledInput
              disabled
              id="phoneNumber"
              error=""
              value={user.data?.value?.phone}
              label="شماره موبایل"
            />
            <ControlledInput
              disabled
              value={user.data?.value?.birthDate}
              id="date"
              error=""
              label="تاریخ تولد"
            />

            <div className="">
              <p className=" text-gray-300 my-6 ">جنسیت</p>

              <div className=" flex  gap-x-20">
                <div className=" text-gray-300 gap-x-2 flex">
                  <p className=" text-gray-300">زن</p>
                  <div
                    className={` rounded-full flex justify-center items-center bg-white border border-gray-50 w-5 h-5 ${
                      user?.data?.value.gender === 1 ? " bg-gray-50" : null
                    }`}
                  >
                    {user?.data?.value.gender === 1 ? (
                      <div className=" w-3 h-3 rounded-full bg-gray-300"></div>
                    ) : null}
                  </div>
                </div>

                <div className=" gap-x-2 flex">
                  <p className=" text-gray-300">مرد</p>
                  <div
                    className={`rounded-full  flex justify-center items-center${
                      user?.data?.value.gender === 0 ? " bg-gray-50" : null
                    } border border-gray-50 w-5 h-5`}
                  >
                    {user?.data?.value.gender === 0 ? (
                      <div className=" w-3 h-3 rounded-full bg-gray-300"></div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Informations;
