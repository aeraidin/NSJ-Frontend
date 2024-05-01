/** @format */

import AboutService from "@/components/page/SingleService/AboutService";
import ConditionsService from "@/components/page/SingleService/ConditionsService";
import ContactService from "@/components/page/SingleService/ContactService";
import MainServiceInfo from "@/components/page/SingleService/MainServiceInfo";
import RelatedService from "@/components/page/SingleService/RelatedService";
import ReviewService from "@/components/page/SingleService/ReviewService";
import SansService from "@/components/page/SingleService/SansService";
import useGetSingleService from "@/util/hook/SingleService/useGetSingleService";
import React from "react";

function Page({ params }: { params: { id: string } }) {
  console.log("====================================");
  console.log(params.id);
  console.log("====================================");

  return (
    <div className=" flex flex-col w-full Container divide-y divide-gray-50 ">
      <MainServiceInfo />
      <SansService />
      <AboutService param={params.id} />
      <ContactService param={params.id} />
      <ConditionsService param={params.id} />
      <ReviewService />
      <RelatedService />
    </div>
  );
}

export default Page;
