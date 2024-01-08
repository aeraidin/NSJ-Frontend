import axiosInstance from "@/util/AxiosInstans";

export const useSendCodeOtp = async (phone: string) => {
  try {
    const response = await axiosInstance.post(`/Authentication/send-otp`, {
      phone: phone,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
