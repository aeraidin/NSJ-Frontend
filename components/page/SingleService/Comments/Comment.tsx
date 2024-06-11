/** @format */

import Toast from "@/components/Layout/Alerts/Toast";
import { AddDisLike } from "@/util/api/Comment/AddDisLike";
import { AddLike } from "@/util/api/Comment/AddLike";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Like, Like1, Star1, User, UserOctagon } from "iconsax-react";
import Image from "next/image";
import Cookies from "js-cookie";
const token = Cookies.get("token");
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import LoginModal from "@/components/Layout/Modals/auth/LoginModal";
import { log } from "console";
interface commentProps {
  data: any;
}

function Comment({ data }: commentProps) {
  const queryClient = useQueryClient();
  const [like, setLike] = useState(0);
  const [type, setType] = useState<string>();
  const [dislike, setDisLike] = useState(0);
  const [token, setToken] = useState<string | undefined>(undefined);

  const [Result, setResult] = useState(false);
  const [LoginModalState, setLoginModal] = useState(false);
  const ratingChanged = (newRating: any) => {};

  const addLikeHandler = useMutation({
    mutationFn: AddLike,
    onSuccess(data, variables, context) {
      if (type === "like") {
        setLike(1);
        setDisLike(0);
      }
    },
    onError(error, variables, context) {
      setResult(true);
    },
  });

  const addDisLikeHandler = useMutation({
    mutationFn: AddDisLike,
    onSuccess(data, variables, context) {
      if (type === "dislike") {
        setDisLike(1);
        setLike(0);
      }
    },
    onError(error, variables, context) {
      setResult(true);
    },
  });

  useEffect(() => {
    setToken(Cookies.get("token"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Cookies.get("token")]);
  return (
    <>
      <Toast
        messege={
          addLikeHandler.error || addDisLikeHandler.error
            ? "عملیات با خطا مواجه شد"
            : "با موفقیت حذف شد"
        }
        Close={() => setResult(false)}
        isError={addLikeHandler.isError || addDisLikeHandler.isError}
        Result={Result}
      />

      {LoginModalState ? (
        <LoginModal
          CloseModal={() => setLoginModal(false)}
          State={LoginModalState}
        />
      ) : null}

      <div className=" w-full h-fit flex pb-6 flex-col rounded-[20px] border border-gray-50 ">
        <div className=" w-full flex ">
          <div className="w-full max-w-[65px] py-6 flex justify-center h-full">
            <div className=" w-10 h-10 flex justify-center items-center bg-gradient-to-l from-primary-500 to-primary-200 rounded-full relative">
              {data.user?.profileImage ? (
                <Image
                  className=" rounded-full"
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URLIMAGE}${data.user.profileImage}`}
                  alt="profile"
                  fill
                />
              ) : (
                <User variant="Bold" color="#fff" size={24} />
              )}
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
                        setType("dislike");
                        if (dislike === 0 && !token) {
                          setLoginModal(true);
                        } else if (dislike === 0 && token) {
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
                        setType("like");

                        if (like === 0 && !token) {
                          setLoginModal(true);
                        } else if (like === 0 && token) {
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
                      halfIcon={
                        <FaStarHalfAlt className=" text-sm lg:text-2xl" />
                      }
                      emptyIcon={<FaStar className=" text-base lg:text-2xl" />}
                      filledIcon={<FaStar className=" text-base lg:text-2xl" />}
                      value={data.rate}
                      edit={false}
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
            <div className="  w-full   h-full ">
              <div className="w-full bg-[#FBFBFB] rounded-[20px]  flex justify-start px-6 py-4  lg:p-6 h-fit">
                <div className="w-full max-w-[65px]">
                  <div className=" w-10 h-10 bg-gradient-to-l flex justify-center items-center from-third-500 to-third-200 rounded-full">
                    <UserOctagon variant="Bold" size={24} color="#fff" />
                  </div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="  w-full flex flex-col  h-full">
                    <div className="   flex gap-x-3 h-full w-full">
                      <p className="text-gray-500 text-sm md:text-base whitespace-pre-wrap">
                        پاسخ مدیر مجموعه
                      </p>
                    </div>
                    <div className=" h-full w-full mt-2 lg:mt-5 flex justify-between">
                      <div className=" w-full">
                        <p className="text-sm md:text-base text-justify break-words">
                          {data.replay}
                        </p>
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
