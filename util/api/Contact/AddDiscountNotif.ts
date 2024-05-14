/** @format */

import axiosInstance from "@/util/AxiosInstans";

interface AddContactProps {
  email: string;
  province: string;
}

export const AddDiscountNotif = async ({
  province,
  email,
}: AddContactProps) => {
  const response = await axiosInstance.post(
    `/client/contact-us/insert-discount-notification`,
    {
      province: province,
      email: email,
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
