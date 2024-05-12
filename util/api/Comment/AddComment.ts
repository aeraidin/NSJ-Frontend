/** @format */

import axiosInstance from "@/util/AxiosInstans";

interface AddCommentProps {
  id: string;
  rate?: number;
  comment: string;
}

export const AddComment = async ({ id, rate, comment }: AddCommentProps) => {
  const response = await axiosInstance.post(
    `/client/sport-complex-service/${id}/add-comment`,
    {
      rate: rate,
      comment: comment,
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
