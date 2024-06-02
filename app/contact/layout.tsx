/** @format */

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "تماس با ما",
  description:
    "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
};

function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default layout;
