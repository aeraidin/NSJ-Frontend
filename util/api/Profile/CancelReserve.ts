/** @format */

import axiosInstance from "@/util/AxiosInstans";
import Cookies from "js-cookie";

export const CancelReserve = async ({ id }: { id: number }) => {
  const response = await axiosInstance.post(`/client/reserve/${id}/cancle`, {
    id: id,
  });
  if (response.data.isSuccess) {
    return response.data;
  } else if (response.data.isError) {
    throw response.data.error.description;
  } else {
    throw new Error();
  }
};
