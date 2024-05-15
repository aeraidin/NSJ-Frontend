/** @format */

import axiosInstance from "@/util/AxiosInstans";

interface AddLikeProps {
  commentId: string;
}

export const AddLike = async ({ commentId }: AddLikeProps) => {
  const response = await axiosInstance.post(
    `/client/sport-commplex-service/like-comment`,
    {
      commentId: commentId,
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
