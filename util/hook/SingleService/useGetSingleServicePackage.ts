/** @format */

import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";

export default function useGetSingleServicePackage({ id }: { id: string }) {
  return useQuery({
    queryKey: ["SingleServicePackage", id],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(
          `client/${id}/package/list?PageSize=10&Page=1`
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
