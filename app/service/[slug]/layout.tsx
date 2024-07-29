/** @format */

import useGetSingleService from "@/util/hook/SingleService/useGetSingleService";
import { notFound } from "next/navigation";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

interface MetadataParams {
  params: {
    slug: any;
  };
}

export async function generateMetadata({ params }: MetadataParams) {
  const parts = params.slug.split('-');
  const lastItem = parts[parts.length - 1];
  try {
    const response = await fetch(
      `
https://dev.funicket.ir/api/v1/client/sport-commplex-service/${lastItem}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const product = await response.json();
    return {
      title: `${product.value.name} ${product.value.sportComplex.name}`,
      description: `${product.value.description}`,
      openGraph: {
        images: `https://dev.funicket.ir/${product.value.filePathes[0]}`,
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    notFound()
    return {
      title: "Service not found",
    };
  }
}

function Layout({ children }: LayoutProps) {
  return <div>{children}</div>;
}

export default Layout;
