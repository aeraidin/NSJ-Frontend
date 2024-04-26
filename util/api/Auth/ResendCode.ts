/** @format */

import axiosInstance from "@/util/AxiosInstans";

export const ResendCode = async (phone: string) => {
  const response = await axiosInstance.post(`/client/auth/resend-otp`, {
    phone: phone,
  });
  if (response.data.isSuccess) {
    return response.data;
  } else if (response.data.isError) {
    throw response.data.error.description;
  } else {
    throw new Error();
  }
};
