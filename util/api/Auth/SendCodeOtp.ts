import axiosInstance from "@/util/AxiosInstans";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

function useSendCodeOtp() {
  // const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (phone: string) => {
      try {
        const response = await axiosInstance.post(`/Authentication/send-otp`, {
          phone: phone,
        });
        return response.data;
      } catch (error) {
        // handleApiError(error);
        console.log(error);
      }
    },
    onSettled: () => {},
  });
  return mutation;
}

export default useSendCodeOtp;
