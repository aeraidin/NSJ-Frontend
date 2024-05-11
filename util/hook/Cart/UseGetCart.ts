/** @format */

import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";

export default function UseGetCart() {
  return useQuery({
    queryKey: ["Cart"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(`/client/cart/list`);
        return response.data;
      } catch (error) {
        throw new Error();
      }
    },
  });
}
