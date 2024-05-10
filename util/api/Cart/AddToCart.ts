/** @format */

import axiosInstance from "@/util/AxiosInstans";

export const AddToCart = async (sansId: number) => {
  const response = await axiosInstance.post(`/client/cart/add`, {
    sansId,
  });
  if (response.data.isSuccess) {
    return response.data;
  } else if (response.data.isError) {
    throw response.data.error.description;
  } else {
    throw new Error();
  }
};
