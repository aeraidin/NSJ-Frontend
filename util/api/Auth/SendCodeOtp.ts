/** @format */

import axiosInstance from "@/util/AxiosInstans";
import Cookies from "js-cookie";

export const useSendCodeOtp = async (phone: string) => {
  const response = await axiosInstance.post(`client/auth/send-otp`, {
    phone: phone,
  });
  if (response.data.isSuccess) {
    Cookies.set("isNew", response.data.value.isNew);
    return response.data;
  } else if (response.data.isError) {
    throw response.data.error.description;
  } else {
    throw new Error();
  }
};
