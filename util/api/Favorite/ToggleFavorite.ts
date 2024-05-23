import axiosInstance from "@/util/AxiosInstans";

export const ToggleFavorite = async ({
 sportComplexServiceId,
}: {
 sportComplexServiceId: number;
}) => {
 const response = await axiosInstance.post(
  `/client/sport-commplex-service/add-or-remove-to-favorite`,
  {
   sportComplexServiceId,
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
