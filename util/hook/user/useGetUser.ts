"use client";

import axiosInstance from "@/util/AxiosInstans";
import { useQuery } from "@tanstack/react-query";
const GetUser = async () => {
      try {
            const data = await axiosInstance.get(`client/show-profile`);
            if (data.data.isSuccess) {
                  return data.data;
            } else {
                  throw new Error();
            }
      } catch (error) {
            throw new Error();
      }
};
const useGetUser = () => {
      return useQuery({
            queryKey: ["UserData"],
            queryFn: () => GetUser(),
      });
};
export default useGetUser;
