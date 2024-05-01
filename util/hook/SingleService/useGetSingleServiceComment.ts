/** @format */

import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";

export default function useGetSingleServiceComment({ id }: { id: string }) {
  return useQuery({
    queryKey: ["SingleServiceComment", id],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(
          `client/sport-commplex-service/${id}/comment-list?pageSize=10&page=1`
        );
        return response.data;
      } catch (error) {
        throw new Error();
      }
    },
  });
}
