/** @format */

import axiosInstance from "@/util/AxiosInstans";
import Cookies from "js-cookie";

export const Signup = async ({
  Family,
  Name,
  BirthDate,
  Gender,
  token,
}: {
  Family: string;
  Name: string;
  BirthDate: string;
  Gender: number;
  token: string;
}) => {
  const response = await axiosInstance.post(`/client/complete-profile`, {
    firstName: Name,
    lastName: Family,
    birthDate: BirthDate,
    gender: Gender,
  });
  if (response.data.isSuccess) {
    return response.data;
  } else if (response.data.isError) {
    throw response.data.error.description;
  } else {
    throw new Error();
  }
};
