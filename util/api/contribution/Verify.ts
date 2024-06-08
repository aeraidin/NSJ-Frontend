/** @format */

import axiosInstance from "@/util/AxiosInstans";
import Cookies from "js-cookie";

type PreLoginProps = {
 code: string;
 nationalCode: string;
 phone: string;
};
export const VerifyManager = async ({
 code,
 nationalCode,
 phone,
}: PreLoginProps) => {
 const response = await axiosInstance.post(`/manager/verify`, {
  otpCode: code,
  nationalCode,
  phone,
 });
 if (response.data.isSuccess) {
  Cookies.set("token", response.data.value.token);

  return response.data;
 } else {
  throw new Error();
 }
};
