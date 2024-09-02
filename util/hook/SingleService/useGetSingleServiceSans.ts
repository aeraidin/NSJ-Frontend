/** @format */

import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";

export default function useGetSingleServiceSans({ id }: { id: string }) {
  return useQuery({
    queryKey: ["SingleServiceSans", id],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(
          `client/sport-commplex-service/${id}/sans-list`
        );
        if (response.data.isSuccess) {
          return response.data;
        } else {
          throw new Error();
        }
      } catch (error) {
        throw new Error();
      }
    },
  });
}
