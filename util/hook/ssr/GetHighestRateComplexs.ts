/** @format */

import CustomFetch from "./CustomFetch";

const GetHighestRateComplexs = async () => {
  try {
    const data = await CustomFetch(
      "client/sport-commplex-service/highest-rate-list?pageSize=10&page=1"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default GetHighestRateComplexs;
