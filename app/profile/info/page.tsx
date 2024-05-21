/** @format */
"use client";

import Informations from "@/components/page/Profile/Informations";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

function Page() {
  const token = Cookies.get("token");
  useEffect(() => {
    if (!token) {
      redirect("/login");
    }
  }, [token]);

  return (
    <div className=" w-full  ">
      <Informations />
    </div>
  );
}

export default Page;
