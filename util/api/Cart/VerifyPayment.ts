/** @format */

import axiosInstance from "@/util/AxiosInstans";

export const VerifyPayment = async (authority: string) => {
 const response = await axiosInstance.post(`/client/cart/verify`, {
  authority,
 });
 if (response.data.isSuccess) {
  return response.data;
 } else if (response.data.isError) {
  throw response.data.error.description;
 } else {
  throw new Error();
 }
};
