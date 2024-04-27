/** @format */

import CustomFetch from "./CustomFetch";

const GetRecLis = async () => {
  try {
    const data = await CustomFetch("client/sport-commplex-service/recom-list");
    return data;
  } catch (error) {
    console.log("hi");
    console.log(error);
  }
};
export default GetRecLis;
