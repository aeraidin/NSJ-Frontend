/** @format */

import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";

export default function useGetSingleServiceRelated({ id }: { id: string }) {
  return useQuery({
    queryKey: ["SingleServiceRelated", id],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(
          `client/sport-commplex-service/${id}/similar-list?pageSize=10&page=1`
        );
        return response.data;
      } catch (error) {
        throw new Error();
      }
    },
  });
}
