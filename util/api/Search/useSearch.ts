/** @format */

import axiosInstance from "@/util/AxiosInstans";
import Cookies from "js-cookie";

interface useSearchProps {
  serviceName: string;
  sortType: number;
  pageSize: number;
  page: number;
}

export const useSearch = async ({
  serviceName,
  sortType,
  page,
  pageSize,
}: useSearchProps) => {
  const response = await axiosInstance.post(
    `client/sport-commplex/services-list`,
    {
      serviceName: serviceName,
      sortTyp: sortType,
      pageSize: pageSize,
      page: page,
    }
  );
  if (response.data.isSuccess) {
    return response.data;
  } else if (response.data.isError) {
    throw response.data.error.description;
  } else {
    throw new Error();
  }
};
