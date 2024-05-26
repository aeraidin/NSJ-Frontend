/** @format */

"use client";
import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";

const GetTransactions = async (curentPage: number) => {
  try {
    const data = await axiosInstance.get(
      `client/transaction/list?pageSize=10&page=${curentPage}`
    );
    return data.data;
  } catch (error) {
    throw new Error();
  }
};
const useGetTransactions = (curentPage: number) => {
  return useQuery({
    queryKey: ["TransactionsList", curentPage],
    queryFn: () => GetTransactions(curentPage),
  });
};
export default useGetTransactions;
