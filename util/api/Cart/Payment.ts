/** @format */

import axiosInstance from "@/util/AxiosInstans";

export const PaymentApi = async (fromWallet: boolean) => {
 const response = await axiosInstance.post(`/client/cart/finalize`, {
  fromWallet,
 });
 if (response.data.isSuccess) {
  return response.data;
 } else if (response.data.isError) {
  throw response.data.error.description;
 } else {
  throw new Error();
 }
};
