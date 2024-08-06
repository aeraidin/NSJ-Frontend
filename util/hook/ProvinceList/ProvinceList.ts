/** @format */

import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";

export default function useGetProvinceList() {
  return useQuery({
    queryKey: ["ProvinceList"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(
          "client/common/active-province-list"
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
