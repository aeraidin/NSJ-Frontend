"use client";
import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";

const GetReserves = async (curentPage: number) => {
 try {
  const data = await axiosInstance.get(
   `client/reserve/list?pageSize=10&page=${curentPage}`
  );
  return data.data;
 } catch (error) {
  throw new Error();
 }
};
const useGetReserves = (curentPage: number) => {
 return useQuery({
  queryKey: ["ReserveList", curentPage],
  queryFn: () => GetReserves(curentPage),
 });
};
export default useGetReserves;
