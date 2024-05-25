/** @format */

"use client";
import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";

const GetFavorites = async (curentPage: number) => {
  try {
    const data = await axiosInstance.get(
      `client/favorite/list?pageSize=10&page=${curentPage}`
    );
    return data.data;
  } catch (error) {
    throw new Error();
  }
};
const useGetFavorites = (curentPage: number) => {
  return useQuery({
    queryKey: ["FavoriteList", curentPage],
    queryFn: () => GetFavorites(curentPage),
  });
};
export default useGetFavorites;
