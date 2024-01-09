import SignupForm from "@/components/Layout/Forms/auth/SignupForm";
import React from "react";

function page() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[380px]  flex flex-col gap-6 ">
        <div className="flex flex-col gap-4">
          <p className="text-3xl">ثبت نام</p>
          <p className="text-gray-400"></p>
        </div>
        <div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default page;
