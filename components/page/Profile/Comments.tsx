/** @format */

import Toast from "@/components/Layout/Alerts/Toast";
import { AddDisLike } from "@/util/api/Comment/AddDisLike";
import { AddLike } from "@/util/api/Comment/AddLike";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Like, Like1, Star1 } from "iconsax-react";
import Image from "next/image";
import Cookies from "js-cookie";
const token = Cookies.get("token");
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import LoginModal from "@/components/Layout/Modals/auth/LoginModal";
import { log } from "console";

function Comments({ data }: { data: myCommentData }) {
  const queryClient = useQueryClient();
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const [token, setToken] = useState<string | undefined>(undefined);

  const [Result, setResult] = useState(false);
  const [LoginModalState, setLoginModal] = useState(false);
  const ratingChanged = (newRating: any) => {
  };

  const addLikeHandler = useMutation({
    mutationFn: AddLike,
    onSuccess(data, variables, context) {
      setLike(1);
    },
    onError(error, variables, context) {
      setResult(true);
    },
  });

  const addDisLikeHandler = useMutation({
    mutationFn: AddDisLike,
    onSuccess(data, variables, context) {
      setDisLike(1);
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

      <div className=" w-full h-fit  flex flex-col pb-3 rounded-[20px] border border-gray-50 ">
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
            <div className=" w-full flex items-start  pt-6 justify-between lg:px-6 flex-col gap-y-2 lg:gap-y-0 xl:flex-row">
              <div className="  flex gap-x-3 w-fit  h-full">
                <p className=" text-gray-500 text-sm md:text-base">
                  {data.user.name}
                </p>
                <p className=" text-gray-300 text-sm md:text-base">
                  {data.createDate.split(" ")[0]}
                </p>
              </div>
              <div className=" flex max-w-[420px] items-center  gap-x-3">
                <p className="text-sm md:text-base">{`${data.rate === null ? 0 : data.rate
                  }/5`}</p>
                <div>
                  <ReactStars
                    className={"cursor-pointer"}
                    count={5}
                    isHalf={true}
                    halfIcon={<FaStarHalfAlt size={20} />}
                    emptyIcon={<FaStar size={20} />}
                    filledIcon={<FaStar size={20} />}
                    value={data.rate}
                    edit={false}
                    onChange={ratingChanged}
                    size={20}
                    activeColor="#FEB92E"
                  />
                </div>
              </div>
            </div>

            {/* comment mobile */}
            <div
              className=" h-full w-full lg:hidden mt-2 lg:mt-0 flex flex-col 
             lg:flex-row justify-center  lg:justify-between"
            >
              <div className=" w-full lg:hidden  flex justify-start  lg:justify-start  items-center   md:max-w-[340px] gap-x-6 md:gap-x-8  md:mx-6 "></div>
              <div>
                <p className=" text-sm md:text-base text-justify pl-6   ">
                  {data.text}
                </p>
              </div>
            </div>

            {/* comment dekstop */}
            <div
              className=" h-full w-full hidden lg:flex flex-col mt-4
             lg:flex-row justify-center  lg:justify-between"
            >
              <div className=" w-full   flex  flex-col  justify-start mb-3 items-end   gap-x-6 md:gap-x-8  md:mx-6 ">
                <div className=" w-full ">
                  <p className=" text-sm md:text-base text-justify mt-5">
                    {data.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {data.replay && (
          <div className="px-6 w-full mt-3 lg:pb-8">
            <div className="w-full h-full">
              <div className="w-full bg-[#FBFBFB] h-fit rounded-[20px] flex justify-start px-6 pt-11 pb-6">
                <div className="w-full max-w-[65px]">
                  <div className="w-10 h-10 bg-red-600 rounded-full"></div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="w-full flex flex-col h-full">
                    <div className="flex gap-x-3 h-full w-full">
                      <p className="text-gray-500 text-sm md:text-base whitespace-pre-wrap">
                        پاسخ مدیر مجموعه
                      </p>
                    </div>
                    <div className="h-fit w-full mt-2 lg:mt-5 flex justify-between">
                      <div className="w-full">
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

export default Comments;

export function CommentsLoading() {
  return (
    <>
      <div className=" Container flex-col flex  animate-pulse">
        <div className=" w-full h-[127px] flex bg-gray-200 rounded-lg">
          <div className=" w-full max-w-[80px] p-3 h-full">
            <div className=" rounded-full w-8 h-8  bg-gray-100"></div>
          </div>

          <div className=" w-full p-4 flex flex-col gap-4">
            <div className=" w-full flex gap-x-4 pl-10 lg:pl-0">
              <div className=" rounded-lg w-full max-w-[120px] h-4 bg-gray-100"></div>
              <div className=" rounded-lg w-full max-w-[220px] lg:max-w-[90px] h-4 bg-gray-100"></div>
            </div>
            <div className=" rounded-lg w-full max-w-[220px] lg:max-w-[520px] h-4  bg-gray-100"></div>

            <div className=" w-full hidden  lg:flex lg:justify-end gap-x-6   pl-10 lg:pl-0 ">
              <div className=" flex gap-x-6 px-10"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
