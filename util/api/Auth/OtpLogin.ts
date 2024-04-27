/** @format */

import axiosInstance from "@/util/AxiosInstans";
import { error } from "console";
import Cookies from "js-cookie";

export const OtpLogin = async ({
  code,
  phone,
}: {
  phone: string;
  code: string;
}) => {
  const response = await axiosInstance.post(`/client/auth/otp-login`, {
    phone: phone,
    code: code,
  });
  if (response.data.isSuccess) {
    Cookies.set("userToken", response.data.value.token);
    return response.data;
  } else if (response.data.isError) {
    throw response.data.error.description;
  } else {
    throw new Error();
  }
};
