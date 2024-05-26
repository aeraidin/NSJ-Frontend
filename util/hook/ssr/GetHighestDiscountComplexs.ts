/** @format */

import CustomFetch from "./CustomFetch";

const GetHighestDiscountComplexs = async () => {
  try {
    const data = await CustomFetch(
      "client/sport-commplex-service/highest-discount-list?pageSize=10&page=1"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default GetHighestDiscountComplexs;
