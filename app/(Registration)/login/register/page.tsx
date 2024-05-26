"use client";
import SignupForm from "@/components/Layout/Forms/auth/SignupForm";
import React from "react";

function Page() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[380px]  flex flex-col gap-4 lg:gap-6 ">
        <h1 className="text-xl lg:text-2xl font-medium ">
          سلام! به اسپورتیکت خوش آمدید.
        </h1>

        <div className="flex flex-col gap-4">
          <p className="text-2xl md:text-3xl">ثبت نام</p>
        </div>
        <div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default Page;
