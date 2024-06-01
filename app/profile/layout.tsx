/** @format */

import MainLayout from "@/components/Layout/MainLayout";
import SideBar from "@/components/page/Profile/SideBar";
import { useSestion } from "@/util/session";
import { redirect } from "next/navigation";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  const Session = useSestion();
  if (!Session) {
    redirect("/");
  }
  return (
    <MainLayout isProfile>
      <div className=" w-full  lg:gap-x-8 lg:my-8    flex">
        <div className="w-full  hidden lg:block min-h-screen   lg:max-w-[257px] relative">
          <div className="  sticky  top-32">
            <SideBar />
          </div>
        </div>
        <div className="flex-1 lg:flex flex-col">
          <div className="  flex-1 pb-10 overflow-y-auto mx-auto w-full  lg:max-w-[843px] lg:mt-[70px] ">
            <div className=" min-h-screen  w-full mb-12 mt-8 lg:mb-0 lg:mt-0 lg:my-0    ">
              {children}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Layout;
