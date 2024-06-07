/** @format */

import axiosInstance from "@/util/AxiosInstans";

type PreLoginProps = {
 firstName: string;
 lastName: string;
 nationalCode: string;
 phone: string;
 email: string;
 birthDate: string;
};
export const PreLoginApi = async ({
 firstName,
 lastName,
 birthDate,
 email,
 nationalCode,
 phone,
}: PreLoginProps) => {
 const response = await axiosInstance.post(`/manager/preregister`, {
  firstName,
  lastName,
  birthDate,
  email,
  nationalCode,
  phone,
 });
 if (response.data.isSuccess) {
  return response.data;
 } else if (response.data.isError) {
  throw response.data.error.description;
 } else {
  throw new Error();
 }
};
