/** @format */

import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "درباره ما",
  description:
    "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  openGraph: {
    images: "@/public/Banner/AboutUs/1344x360.jpg",
  },
};

function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default layout;
