/** @format */

import useGetSingleService from "@/util/hook/SingleService/useGetSingleService";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

interface MetadataParams {
  params: {
    id: any;
  };
}

export async function generateMetadata({ params }: MetadataParams) {
  try {
    const response = await fetch(
      `
https://dev.funicket.ir/api/v1/client/sport-commplex-service/${params.id}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const product = await response.json();

    return {
      title: ` ${product.value.sportComplex.name}${product.value.service.name}`,
      description: `${product.value.description}`,
      openGraph: {
        images: `https://dev.funicket.ir/${product.value.filePathes[0]}`,
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Service not found",
    };
  }
}

function Layout({ children }: LayoutProps) {
  return <div>{children}</div>;
}

export default Layout;
