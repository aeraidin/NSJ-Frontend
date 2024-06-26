import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";

export default function useGetMaxPriceSans() {
 return useQuery({
  queryKey: ["MaxPriceSans"],
  queryFn: async () => {
   try {
    const response = await axiosInstance.get(`/client/common/max-sans-price`);
    return response.data;
   } catch (error) {
    throw new Error();
   }
  },
 });
}
