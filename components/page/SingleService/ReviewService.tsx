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
  const [size, setSize] = useState(1);
  const queryclient = useQueryClient();
  const [commentList, setCommentList] = useState<CommentItem[]>([]);
  const paginateHandler = () => {
    setSize(size + 1);
  };

  useEffect(() => {
    console.log(size);
    queryclient.invalidateQueries({
      queryKey: ["SingleServiceComment", size],
    });
  }, [queryclient, size]);
  const data = useGetSingleServiceComment({ id: id, size: size });

  useEffect(() => {
    if (data.data?.value?.list) {
      // Append new comments to the existing list
      setCommentList((prevComments) => [
        ...prevComments,
        ...data.data?.value.list,
      ]);
    }
  }, [data.data?.value.list]);

  return (
    <div className="Container pt-10">
      <h2 className=" mb-8 text-gray-500 font-semibold ">{` امتیاز و نظرات کاربران(${commentList.length} نظر)`}</h2>

      {commentList ? (
        <div className=" gap-y-6 flex-col flex">
          {commentList?.map((item: any, index: number) => {
            return <Comment data={item} key={index} />;
          })}
        </div>
      ) : (
        <p className=" text-gray-400 text-center">نظری ثبت نشده است</p>
      )}

      {data.data?.value?.totalCount !== 0 ? (
        <div
          onClick={() => paginateHandler()}
          className=" w-full gap-x-4 group justify-center flex text-center mt-6"
        >
          <p className=" text-gray-500 group-hover:text-gray-300 duration-200 cursor-pointer">
            مشاهده بیشتر
          </p>

          {data.isPending ? (
            <svg className="h-6 w-6 animate-spin" viewBox="3 3 18 18">
              <path
                className="fill-gray-400/20"
                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
              ></path>
              <path
                className="fill-gray-400"
                d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
              ></path>
            </svg>
          ) : (
            <ArrowDown2
              className="text-gray-500 cursor-pointer group-hover:text-gray-300"
              size={24}
            />
          )}
        </div>
      ) : null}
    </div>
  );
}

export default ReviewService;
