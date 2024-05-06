/** @format */
"use client";

import React, { useEffect, useState } from "react";
import Comment from "./Comments/Comment";
import useGetSingleServiceComment from "@/util/hook/SingleService/useGetSingleServiceComment";
import { ArrowDown2, ArrowDown3, ArrowLeft2, ArrowUp2 } from "iconsax-react";
import { useQueryClient } from "@tanstack/react-query";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";

interface ReviewServiceProps {
  id: string;
}

function ReviewService({ id }: ReviewServiceProps) {
  const [size, setSize] = useState(3);
  const queryclient = useQueryClient();

  const paginateHandler = () => {
    setSize(size + 3);
  };

  useEffect(() => {
    console.log(size);
    queryclient.invalidateQueries({
      queryKey: ["SingleServiceComment", size],
    });
  }, [queryclient, size]);
  const data = useGetSingleServiceComment({ id: id, size: size });

  return (
    <div className="Container">
      <h2 className=" mb-8 text-gray-500 font-semibold ">{` امتیاز و نظرات کاربران(${data.data?.value?.list.length} نظر)`}</h2>

      {data.data?.value.totalCount !== 0 ? (
        <div className=" gap-y-6 flex-col flex">
          {data.data?.value.list.map((item: any, index: number) => {
            return <Comment data={item} key={index} />;
          })}
        </div>
      ) : (
        <p className=" text-gray-400 text-center">نظری ثبت نشده است</p>
      )}

      {data.data?.value?.totalCount !== 0 &&
        data.data?.value?.totalCount >= size ? (
        <div
          onClick={() => paginateHandler()}
          className=" w-full gap-x-4 group justify-center flex text-center mt-6"
        >
          <p className=" text-gray-500 group-hover:text-gray-300 duration-200 cursor-pointer">
            مشاهده بیشتر
          </p>
          <ArrowDown2
            className="text-gray-500 group-hover:text-gray-300"
            size={24}
          />
        </div>
      ) : null}
    </div>
  );
}

export default ReviewService;
