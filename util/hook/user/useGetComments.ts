/** @format */

"use client";
import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";

const GetComments = async (curentPage: number) => {
  try {
    const data = await axiosInstance.get(
      `client/comment/list?pageSize=10&page=${curentPage}`
    );
    return data.data;
  } catch (error) {
    throw new Error();
  }
};
const useGetComments = (curentPage: number) => {
  return useQuery({
    queryKey: ["CommentList", curentPage],
    queryFn: () => GetComments(curentPage),
  });
};
export default useGetComments;
