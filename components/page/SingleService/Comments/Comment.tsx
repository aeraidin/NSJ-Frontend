/** @format */

import { Like, Like1, Star1 } from "iconsax-react";
import Image from "next/image";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

interface commentProps {
  data: any;
}

function Comment({ data }: commentProps) {
  console.log(data);
  const ratingChanged = (newRating: any) => {
    console.log(newRating);
  };
  return (
    <div className=" w-full h-[219px] flex flex-col rounded-[20px] border border-gray-50 ">
      <div className=" w-full flex ">
        <div className="w-full max-w-[65px] py-6 flex justify-center h-full">
          <div className=" w-10 h-10 bg-slate-600 rounded-full">
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
            <div className=" w-full  flex justify-center md:justify-end md:max-w-[340px] gap-x-6 md:gap-x-8  md:mx-6 ">
              <div className=" flex gap-x-3">
                <div className=" flex gap-3">
                  <p className=" text-gray-400 text-sm md:text-base">5</p>
                  <Like1 className=" text-gray-300 rotate-180" />
                </div>
                <div className=" flex gap-x-3">
                  <p className=" text-gray-400 text-sm md:text-base">5</p>
                  <Like1 className=" text-gray-300" />
                </div>
              </div>

              <div className=" flex items-center gap-x-3">
                <p className="text-sm md:text-base">4.5/5</p>
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
                    count={5}
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
  );
}

export default Comment;
