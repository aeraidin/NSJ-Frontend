/** @format */

import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";

export default function useGetUser() {
  return useQuery({
    queryKey: ["UserData"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(`client/show-profile`);
        return response.data;
      } catch (error) {
        throw new Error();
      }
    },
  });
}
