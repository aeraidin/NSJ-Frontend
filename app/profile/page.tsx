/** @format */
"use client";

import SideBar from "@/components/page/Profile/SideBar";
import useMediaQuery from "@/util/hook/useMediaQuery";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

function Page() {
  const isTabletOrLarger = useMediaQuery("(min-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const token = Cookies.get("token");
  const [LoginModalState, setLoginModal] = useState(true);

  useEffect(() => {
    if (!token) {
      redirect("/login");
    }
    if (isTabletOrLarger && token) {
      redirect("/profile/info");
    }
  }, [isMobile, isTabletOrLarger, token]);
  return (
    <>
      <div className=" w-full lg:hidden  ">{<SideBar />}</div>
    </>
  );
}

export default Page;
