/** @format */

import CustomFetch from "./CustomFetch";

interface singleServiceProps {
  id: string;
}

const GetSingleService = async ({ id }: singleServiceProps) => {
  try {
    const data = await CustomFetch(`client/sport-commplex-service/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default GetSingleService;
