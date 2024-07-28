/** @format */

import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";

export default function useGetSingleServiceRelated({ id }: { id: string }) {
      return useQuery({
            queryKey: ["SingleServiceRelated", id],
            queryFn: async () => {
                  try {
                        const response = await axiosInstance.get(`client/sport-commplex-service/${id}/similar-list?pageSize=10&page=1`);
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
