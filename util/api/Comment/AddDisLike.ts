/** @format */

import axiosInstance from "@/util/AxiosInstans";

interface AddDisLikeProps {
  commentId: string;
}

export const AddDisLike = async ({ commentId }: AddDisLikeProps) => {
  const response = await axiosInstance.post(
    `/client/sport-commplex-service/dis-like-comment`,
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
