/** @format */

import MainLayout from "@/components/Layout/MainLayout";
import AboutService from "@/components/page/SingleService/AboutService";
import ConditionsService from "@/components/page/SingleService/ConditionsService";
import ContactService from "@/components/page/SingleService/ContactService";
import MainServiceInfo from "@/components/page/SingleService/MainServiceInfo";
import RelatedService from "@/components/page/SingleService/RelatedService";
import ReviewService from "@/components/page/SingleService/ReviewService";
import SansService from "@/components/page/SingleService/SansService";
import React from "react";

function page({ params }: { params: { id: string } }) {
  return (
    <MainLayout>
      <MainServiceInfo id={params.id} />
      <div className="flex flex-col gap-10 mt-10 divide-y divide-gray-25">
        <SansService id={params.id} />
        <AboutService id={params.id} />
        <ContactService id={params.id} />
        <ConditionsService id={params.id} />
        <ReviewService id={params.id} />
        <RelatedService id={params.id} />
      </div>
    </MainLayout>
  );
}

export default page;
