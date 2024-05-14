/** @format */

import axiosInstance from "@/util/AxiosInstans";

export const UpdateCount = async ({
 id,
 count,
}: {
 id: number;

 count: number;
}) => {
 const response = await axiosInstance.post(`/client/cart/${id}/update-count`, {
  sansId: id,
  count,
 });
 if (response.data.isSuccess) {
  return response.data;
 } else if (response.data.isError) {
  throw response.data.error.description;
 } else {
  throw new Error();
 }
};
