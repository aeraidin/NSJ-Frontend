/** @format */

import CategoryLayout from "@/components/Layout/CategoryLayout";
import MainLayout from "@/components/Layout/MainLayout";
import React from "react";

function page({ params }: { params: { search: string } }) {


  return <CategoryLayout Insearch serviceName={params.search} />;
}

export default page;
