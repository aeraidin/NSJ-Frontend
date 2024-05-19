/** @format */
"use client";
import MainLayout from "@/components/Layout/MainLayout";
import SideBar from "@/components/page/Profile/SideBar";
import React from "react";
import Breadcrumb from "@/components/Layout/breadcrumb";
import { usePathname } from "next/navigation";

function layout({ children, params }: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = usePathname();
  console.log(path);

  return (
    <MainLayout>
      <div className=" w-full  lg:gap-x-8 my-8   flex">
        <div className="w-full h-screen lg:max-w-[257px] relative">
          <div className="sticky top-32">
            <SideBar />
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className=" hidden lg:block">
            <Breadcrumb>
              <Breadcrumb.Item href="/dashboard/">خانه</Breadcrumb.Item>
              <Breadcrumb.Item href={path}>
                {path === "/profile" ? "اطلاعات حساب کاربری" : null}
                {path === "/profile/wallet" ? "کیف پول" : null}
                {path === "/profile/my-reserves" ? "رزومه های من" : null}
                {path === "/profile/favorite" ? "علاقه مندی" : null}
                {path === "/profile/transactions" ? "تراکنش ها" : null}
                {path === "/profile/my-comments" ? " نظرات من" : null}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div className="flex-1 overflow-y-auto hidden lg:flex px-[146px] mt-[70px]">
            {children}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default layout;
