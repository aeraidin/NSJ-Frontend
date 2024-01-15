import axiosInstance from "@/util/AxiosInstans";
import Cookies from "js-cookie";

export const Signup = async ({
  Family,
  Name,
  BirthDate,
  Gender,
}: {
  Family: string;
  Name: string;
  BirthDate: string;
  Gender: number;
}) => {
  const response = await axiosInstance.post(`/Authentication/update`, {
    Name: Name,
    Family: Family,
    BirthDate: BirthDate,
    Gender: Gender,
  });
  if (response.data.isSuccess) {
    Cookies.set("isNew", response.data.isSuccess);

    return response.data;
  } else {
    throw new Error(response.data.error.description);
  }
};
