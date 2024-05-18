/** @format */

import axiosInstance from "@/util/AxiosInstans";
import Cookies from "js-cookie";
enum sortType {
 Default = 0,
 Newest = 1,
 MostPopular = 2,
}
interface useSearchProps {
 serviceName?: string;
 pageSize: number | null;
 page: number | null;
 sportComplexId?: number | null;
 minPrice?: number | null;
 maxPrice?: number | null;
 minRate?: number | null;
 serviceId?: number | null;
 sortTyp?: sortType;
}

export const useSearch = async ({
 serviceName,
 maxPrice,
 minPrice,
 minRate,
 serviceId,
 sortTyp,
 sportComplexId,
 page,
 pageSize,
}: useSearchProps) => {
 const response = await axiosInstance.post(
  `client/sport-commplex/services-list`,
  {
   serviceName,
   maxPrice,
   minPrice,
   minRate,
   serviceId,
   sortTyp,
   sportComplexId,
   page,
   pageSize,
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
