import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";

export default function useGetAllCategory() {
 return useQuery({
  queryKey: ["Category"],
  queryFn: async () => {
   try {
    const response = await axiosInstance.get(`/client/common/category/list`);
    return response.data;
   } catch (error) {
    throw new Error();
   }
  },
 });
}
