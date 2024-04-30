/** @format */
import Description from "@/components/page/SingleService/Description";
import CustomFetch from "@/util/hook/ssr/CustomFetch";
import GetSingleService from "@/util/hook/ssr/GetSingleService";
import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import MainLayout from "@/components/Layout/MainLayout";

async function Page({ params }: { params: { id: string } }) {
  const data = await GetSingleService({ id: params.id });

  console.log(data);

  return (
    <>
      <div className="w-full Container">
        <Description data={data} />
      </div>
    </>
  );
}

export default Page;
