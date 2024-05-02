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
      <SansService />
      <AboutService param={params.id} />
      <ContactService param={params.id} />
      <ConditionsService param={params.id} />
      <ReviewService />
      <RelatedService />
    </MainLayout>
  );
}

export default page;
