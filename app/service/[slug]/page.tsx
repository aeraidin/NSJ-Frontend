"use client"
import MainLayout from "@/components/Layout/MainLayout";
import AboutService from "@/components/page/SingleService/AboutService";
import ConditionsService from "@/components/page/SingleService/ConditionsService";
import ContactService from "@/components/page/SingleService/ContactService";
import MainServiceInfo from "@/components/page/SingleService/MainServiceInfo";
import ReviewService from "@/components/page/SingleService/ReviewService";
import React, { useEffect } from "react";
import PropertyService from "@/components/page/SingleService/PropertyService";
import SansService from "@/components/page/SingleService/SansService";
import { notFound } from "next/navigation";
import useGetSingleService from "@/util/hook/useGetComplex";

function Page({ params }: { params: { slug: string } }) {
  const parts = params.slug.split('-');
  const lastItem = parts[parts.length - 1];

  return (

    <MainLayout>
      <MainServiceInfo id={lastItem} />
      <SansService id={lastItem} />
      <div className="flex flex-col gap-10 pb-10 divide-y divide-gray-50">
        <AboutService id={lastItem} />
        <PropertyService id={lastItem} />
        <ContactService id={lastItem} />
        <ConditionsService id={lastItem} />
        <ReviewService id={lastItem} />
        {/* <RelatedService id={params.id} /> */}
      </div>

    </MainLayout >
  );
}

export default Page;
