/** @format */

import axiosInstance from "@/util/AxiosInstans";

interface AddContactProps {
  fullName: string;
  email: string;
  subject: string;
  text: string;
  phoneNumber: string;
}

export const AddContact = async ({
  fullName,
  email,
  subject,
  text,
  phoneNumber,
}: AddContactProps) => {
  const response = await axiosInstance.post(`/client/contact-us/add`, {
    text: text,
    phoneNumber: phoneNumber,
    subject: subject,
    fullName: fullName,
    email: email,
  });
  if (response.data.isSuccess) {
    return response.data;
  } else if (response.data.isError) {
    throw response.data.error.description;
  } else {
    throw new Error();
  }
};
