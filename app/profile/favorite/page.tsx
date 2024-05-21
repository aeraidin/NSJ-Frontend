/** @format */
"use client";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "iconsax-react";
function Page() {
  const token = Cookies.get("token");
  useEffect(() => {
    if (!token) {
      redirect("/login");
    }
  }, [token]);
  return (
    <div className=" w-full p-4 lg:p-0">
      <Link href={"/profile"} className=" gap-x-2 mb-9 lg:hidden flex">
        <ArrowRight className=" text-gray-500" />
        <p className=" text-sm  text-gray-600">بازگشت</p>
      </Link>
    </div>
  );
}

export default Page;
