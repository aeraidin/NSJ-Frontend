import axiosInstance from "@/util/AxiosInstans";
import Cookies from "js-cookie";

export const useSendCodeOtp = async (phone: string) => {
  const response = await axiosInstance.post(`/Authentication/send-otp`, {
    phone: phone,
  });
  if (response.data.isSuccess) {
    console.log(response.data.value.isRegistered);
    Cookies.set("isregisterd", response.data.value.isRegistered);
    return response.data;
  } else {
    throw new Error();
  }
};
