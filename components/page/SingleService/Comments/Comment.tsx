/** @format */

import Toast from "@/components/Layout/Alerts/Toast";
import { AddDisLike } from "@/util/api/Comment/AddDisLike";
import { AddLike } from "@/util/api/Comment/AddLike";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Like, Like1, Star1 } from "iconsax-react";
import Image from "next/image";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
interface commentProps {
  data: any;
}

function Comment({ data }: commentProps) {
  const queryClient = useQueryClient();
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  const [Result, setResult] = useState(false);

  const ratingChanged = (newRating: any) => {
    console.log(newRating);
  };

  const addLikeHandler = useMutation({
    mutationFn: AddLike,
    onSuccess(data, variables, context) {
      setLike(1);
    },
    onError(error, variables, context) {},
  });

  const addDisLikeHandler = useMutation({
    mutationFn: AddDisLike,
    onSuccess(data, variables, context) {
      setDisLike(1);

      console.log(data);
    },
    onError(error, variables, context) {},
  });

  return (
    <>
      <Toast
        messege={
          addLikeHandler.error
            ? (addLikeHandler.error as unknown as string)
            : "با موفقیت حذف شد"
        }
        Close={() => setResult(false)}
        isError={addLikeHandler.isError || addDisLikeHandler.isError}
        isSuccess={addLikeHandler.isError || addDisLikeHandler.isError}
        Result={Result}
      />
      <div className=" w-full h-[219px] flex flex-col rounded-[20px] border border-gray-50 ">
        <div className=" w-full flex ">
          <div className="w-full max-w-[65px] py-6 flex justify-center h-full">
            <div className=" w-10 h-10 bg-slate-600 rounded-full relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URLIMAGE}${data.user.profileImage}`}
                alt="profile"
                fill
              />
            </div>
          </div>
          <div className="  w-full flex flex-col  h-full">
            <div className="  pt-6 flex gap-x-3 h-full w-full">
              <p className=" text-gray-500 text-sm md:text-base">
                {data.user.name}
              </p>
              <p className=" text-gray-300 text-sm md:text-base">
                {data.createdDate}
              </p>
            </div>
            <div className=" h-full w-full flex flex-col lg:flex-row justify-center  lg:justify-between">
              <div>
                <p className=" text-sm md:text-base">{data.text}</p>
              </div>
              <div className=" w-full  flex justify-center items-center md:justify-end md:max-w-[340px] gap-x-6 md:gap-x-8  md:mx-6 ">
                <div className=" flex gap-x-3">
                  <div className=" flex gap-3">
                    <p className=" text-gray-400 text-sm md:text-base">
                      {data.disLikeCount + dislike}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.5 }}
                      onClick={() => {
                        if (dislike === 0) {
                          addDisLikeHandler.mutate({
                            commentId: data.id,
                          });
                        }
                      }}
                    >
                      {data.disLikeCount || dislike > 0 ? (
                        <>
                          <Like1
                            variant="Bold"
                            color="#FE8484"
                            className=" text-gray-300 cursor-pointer rotate-180"
                          />
                        </>
                      ) : (
                        <>
                          <Like1 className=" text-gray-300 cursor-pointer rotate-180" />
                        </>
                      )}
                    </motion.button>
                  </div>
                  <div className=" flex gap-x-3">
                    <p className=" text-gray-400 text-sm md:text-base">
                      {data.likeCount + like}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.5 }}
                      onClick={() => {
                        if (like === 0) {
                          addLikeHandler.mutate({
                            commentId: data.id,
                          });
                        }
                      }}
                    >
                      {data.likeCount || like > 0 ? (
                        <>
                          <Like1
                            variant="Bold"
                            color="#73D99F"
                            className=" text-gray-300 cursor-pointer"
                          />
                        </>
                      ) : (
                        <>
                          <Like1 className=" text-gray-300 cursor-pointer" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>

                <div className=" flex items-center gap-x-3">
                  <p className="text-sm md:text-base">{`${
                    data.rate === null ? 0 : data.rate
                  }/5`}</p>
                  {/* <div className=" flex">
                  <Star1
                    className=" text-secondary-400"
                    size={16}
                    variant="Bold"
                  />
                  <Star1
                    className=" text-secondary-400"
                    size={16}
                    variant="Bold"
                  />{" "}
                  <Star1
                    className=" text-secondary-400"
                    size={16}
                    variant="Bold"
                  />{" "}
                  <Star1
                    className=" text-secondary-400"
                    size={16}
                    variant="Bold"
                  />
                  <Star1
                    className=" text-secondary-400"
                    size={16}
                    variant="Bold"
                  />
                </div> */}
                  <div>
                    <ReactStars
                      className={"cursor-pointer"}
                      count={5}
                      isHalf={true}
                      halfIcon={<Star1 variant="Bold" />}
                      emptyIcon={<Star1 variant="Bold" />}
                      filledIcon={<Star1 variant="Bold" />}
                      value={data.rate}
                      onChange={ratingChanged}
                      size={20}
                      activeColor="#FEB92E"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {data.replay && (
          <div className=" px-6 w-full mt-8">
            <div className="  w-full   h-[65px] ">
              <div className="w-full bg-[#FBFBFB] rounded-[20px]  flex justify-start px-6 py-2 h-full">
                <div className="w-full max-w-[65px]">
                  <div className=" w-10 h-10 bg-red-600 rounded-full"></div>
                </div>
                <div>
                  <div className="  w-full flex flex-col  h-full">
                    <div className="   flex gap-x-3 h-full w-full">
                      <p className=" text-gray-500 text-sm md:text-base">
                        پاسخ مدیر مجموعه
                      </p>
                    </div>
                    <div className=" h-full w-full flex justify-between">
                      <div>
                        <p className="text-sm md:text-base">{data.replay}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Comment;
