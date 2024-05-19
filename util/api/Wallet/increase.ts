/** @format */

import axiosInstance from "@/util/AxiosInstans";
import Cookies from "js-cookie";

export const increase = async ({
  amount,
  referenceNumber,
}: {
  amount: number;
  referenceNumber?: string;
}) => {
  const response = await axiosInstance.post(`/client/wallet/increase`, {
    amount: amount,
    referenceNumber: referenceNumber,
  });
  if (response.data.isSuccess) {
    return response.data;
  } else if (response.data.isError) {
    throw response.data.error.description;
  } else {
    throw new Error();
  }
};
