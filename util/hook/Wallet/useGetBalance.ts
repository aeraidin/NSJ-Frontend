/** @format */

import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";

export default function useGetBalance() {
  return useQuery({
    queryKey: ["Balance"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(`/client/wallet/balance`);
        return response.data;
      } catch (error) {
        throw new Error();
      }
    },
  });
}
