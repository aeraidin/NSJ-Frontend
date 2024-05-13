/** @format */

import axiosInstance from "@/util/AxiosInstans";

export const RemoveCart = async (id: number) => {
 const response = await axiosInstance.post(`/client/cart/${id}/remove`);
 if (response.data.isSuccess) {
  return response.data;
 } else if (response.data.isError) {
  throw response.data.error.description;
 } else {
  throw new Error();
 }
};
