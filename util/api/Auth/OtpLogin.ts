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
  const response = await axiosInstance.post(`/Authentication/otp-login`, {
    phone: phone,
    code: code,
  });
  if (response.data.isSuccess) {
    Cookies.set("user", response.data.data.value.token);
    return response.data;
  } else {
    throw new Error(response.data.error.description);
  }
};
