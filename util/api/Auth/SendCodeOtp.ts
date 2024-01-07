import axiosInstance from "@/util/AxiosInstans";
import React from "react";

export const SendCodeOtp = async (phone: string) => {
  try {
    const response = await axiosInstance.get(
      `Authentication/send-otp/${phone}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
