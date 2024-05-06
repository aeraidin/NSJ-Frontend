/** @format */

import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";

interface SingleCommentsProps {
  id: string;
  size: number;
}

export default function useGetSingleServiceComment({
  id,
  size,
}: SingleCommentsProps) {
  return useQuery({
    queryKey: ["SingleServiceComment", id, size],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(
          `client/sport-commplex-service/${id}/comment-list?pageSize=${size}&page=1`
        );
        return response.data;
      } catch (error) {
        throw new Error();
      }
    },
  });
}
