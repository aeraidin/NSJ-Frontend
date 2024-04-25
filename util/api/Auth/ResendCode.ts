/** @format */

import axiosInstance from "@/util/AxiosInstans";

export const ResendCode = async (phone: string) => {
  try {
    const response = await axiosInstance.post(`/client/auth/resend-otp`, {
      phone: phone,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
