import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";

export default function useGetSingleService({ id }: { id: string }) {
 return useQuery({
  queryKey: ["SportComplex", id],
  queryFn: async () => {
   try {
    const response = await axiosInstance.get(`/client/sport-complex/${id}`);
    return response.data;
   } catch (error) {
    throw new Error();
   }
  },
 });
}
