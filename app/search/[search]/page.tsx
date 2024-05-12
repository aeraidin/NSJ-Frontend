/** @format */

import MainLayout from "@/components/Layout/MainLayout";
import React from "react";

function page({ params }: { params: { search: string } }) {
  console.log(params.search);

  return <MainLayout>page</MainLayout>;
}

export default page;
