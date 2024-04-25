import axiosInstance from "@/util/AxiosInstans";
import Cookies from "js-cookie";

export const useSendCodeOtp = async (phone: string) => {
  const response = await axiosInstance.post(`/Authentication/send-otp`, {
    phone: phone,
  });
  if (response.data.isSuccess) {
    Cookies.set("isNew", response.data.value.isNew);
    return response.data;
  } else {
    throw new Error();
  }
};
