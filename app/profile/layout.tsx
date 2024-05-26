/** @format */
"use client";
import MainLayout from "@/components/Layout/MainLayout";
import SideBar from "@/components/page/Profile/SideBar";
import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/Layout/breadcrumb";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

function Layout({ children, params }: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const path = usePathname();

  const token = Cookies.get("token");
  useEffect(() => {
    if (!token) {
      redirect("/login");
    }
  }, [token]);
  return (
    <MainLayout>
      <div className=" w-full  lg:gap-x-8 my-8   flex">
        <div className="w-full  min-h-screen lg:max-w-[257px] relative">
          <div className="sticky top-32">
            <SideBar />
          </div>
        </div>
        <div className="flex-1 lg:flex flex-col">
          <div className=" hidden lg:block">
            <Breadcrumb>
              <Breadcrumb.Item href="/">خانه</Breadcrumb.Item>
              <Breadcrumb.Item href={path}>
                {path === "/profile/info" ? "اطلاعات حساب کاربری" : null}
                {path === "/profile/wallet" ? "کیف پول" : null}
                {path === "/profile/reserves" ? "رزرو های من" : null}
                {path === "/profile/favorite" ? "علاقه مندی" : null}
                {path === "/profile/transactions" ? "تراکنش ها" : null}
                {path === "/profile/comments" ? " نظرات من" : null}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="lg:flex-1 overflow-y-auto fixed lg:static top-7 left-0 right-0 bottom-0 bg-white lg:flex lg:px-[146px] mt-[70px]">
            {children}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Layout;
