/** @format */

import axiosInstance from "@/util/AxiosInstans";
import Cookies from "js-cookie";

export const addRemoveFavorites = async ({
  sportComplexServiceId,
}: {
  sportComplexServiceId: number;
}) => {
  const response = await axiosInstance.post(
    `/client/sport-commplex-service/add-or-remove-to-favorite`,
    {
      sportComplexServiceId: sportComplexServiceId,
    }
  );
  if (response.data.isSuccess) {
    return response.data;
  } else if (response.data.isError) {
    throw response.data.error.description;
  } else {
    throw new Error();
  }
};
