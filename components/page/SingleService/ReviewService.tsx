/** @format */

"use client";

import React, { useEffect, useState } from "react";
import Comment from "./Comments/Comment";
import useGetSingleServiceComment from "@/util/hook/SingleService/useGetSingleServiceComment";
import { ArrowDown2, Star, Star1 } from "iconsax-react";
import { SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ReactStars from "react-rating-stars-component";
import Image from "next/image";
import commentIcon from "../../../public/Icons/SingleService/comment 1.png";
import SecondaryBtn from "@/components/Layout/Buttons/SecondaryBtn";
import Modal from "@/components/Layout/Modals/Modal";
import ControlledTextArea from "@/components/Layout/Input/ControlledTextArea";
import PrimaryBtn from "@/components/Layout/Buttons/PrimaryBtn";
import { Form } from "@/components/Layout/Forms/Form";
import {
  CommentSchema,
  CommentSchemaType,
} from "@/util/config/validations/Comment/CommentSchema";
import ControlledRate from "@/components/Layout/Input/ControlledRate";
import Cookies from "js-cookie";
import LoginModal from "@/components/Layout/Modals/auth/LoginModal";
import { AddComment } from "@/util/api/Comment/AddComment";
import useGetSingleService from "@/util/hook/SingleService/useGetSingleService";
import { useToast } from "@/components/Layout/Alerts/ToastProvider";
interface ReviewServiceProps {
  id: string;
}
function ReviewService({ id }: ReviewServiceProps) {
  const [size, setSize] = useState(1);
  const queryclient = useQueryClient();
  const [reset, setReset] = useState({});
  const [commentList, setCommentList] = useState<CommentItem[]>([]);
  const [state, setState] = useState(false);
  const paginateHandler = () => {
    setSize(size + 1);
  };

  const singleService = useGetSingleService({ id: id });
  const Data = singleService?.data?.value as SingleProductPage | undefined;
  const { addToast } = useToast()
  const addComment = useMutation({
    mutationFn: AddComment,
    onSuccess: () => {
      console.log(data);
      setState(false);
      addToast({ messege: "با موفقیت حذف شد", type: "success", duration: 300, })
    },
    onError: (error) => {
      addToast({ messege: error as any, type: "error", duration: 300, })
    },
  });

  useEffect(() => {
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

  const onSubmit: SubmitHandler<CommentSchemaType> = async (
    data: CommentSchemaType
  ) => {
    console.log(data);

    addComment.mutate({
      id: id.toString(),
      rate: data.rate,
      comment: data.text,
    });
  };

  const token = Cookies.get("token");

  return (
    <>
      {/* <div className={`z-50  `}> */}
      <Modal
        CloseModal={() => {
          setState(false);
        }}
        State={state && token ? true : false}
      >
        <div>
          <h2 className=" text-third-600 font-semibold mb-3">دیدگاه شما</h2>
          <p className=" text-sm text-gray-300">
            {`
              درمورد ${Data?.name} ${Data?.service.name}
              
              `}
          </p>
          <div className=" w-full my-5  border-t border-gray-50 h-1"></div>
          <p className=" text-base mb-3 text-gray-600 font-semibold ">
            امتیاز دهید!
          </p>
          <Form<CommentSchemaType>
            validationSchema={CommentSchema}
            onSubmit={onSubmit}
            resetValues={reset}
            className="w-full max-w-[850px] mx-auto"
          >
            {({ register, formState: { errors }, setValue }) => (
              <>
                <ControlledRate
                  setValue={setValue}
                  register={register}
                  id="rate"
                  error={""}
                />

                <div className=" mt-3  flex flex-col">
                  <p className=" text-gray-600 text-base font-semibold">
                    متن دیدگاه
                  </p>
                  <div>
                    <ControlledTextArea
                      id="text"
                      setValue={setValue}
                      register={register}
                      error={errors.text?.message}
                      PlaceHolder="برای ما بنویسید..."
                    />
                  </div>
                </div>
                <div className=" mt-4">
                  <PrimaryBtn isloading={addComment.isPending} type="submit">
                    ثبت
                  </PrimaryBtn>
                </div>
              </>
            )}
          </Form>
        </div>
      </Modal>
      {/* ) : ( */}
      <LoginModal
        CloseModal={() => {
          setState(false);
        }}
        State={state && !token ? true : false}
      />

      {/* </div> */}
      {commentList && !data.isPending ? (
        <div className="Container  pt-6 lg:pt-10">
          <div className=" w-full flex flex-col  lg:flex-row gap-4 mb-10">
            <div className=" w-full lg:max-w-[400px] flex flex-col h-[206px]   justify-center items-center bg-[#FAFAFA] rounded-[20px] ">
              <div className=" w-full  mb-8 flex flex-col  justify-center items-center">
                <p>
                  <span className=" font-semibold text-4xl text-primary-600 pl-[10px]">
                    {Number.isInteger(Data?.rate)
                      ? Data?.rate
                      : Data?.rate.toFixed(1)}
                  </span>
                  از ۵
                </p>
                <div className=" w-full flex select-none justify-center flex-col  items-center">
                  {Data?.rate ? (
                    <ReactStars
                      count={5}
                      edit={false}
                      value={Data?.rate}
                      isHalf={true}
                      emptyIcon={<Image src={"/Icons/Stargray.svg"} width={20} height={20} alt="icon" />}
                      filledIcon={<Image src={"/Icons/Star.svg"} width={20} height={20} alt="icon" />}
                      size={28}
                      activeColor="#FEB92E"
                    />
                  ) : null}
                </div>
              </div>

              <div className=" w-full flex justify-center items-center flex-col">
                <div>
                  <p className=" font-semibold text-gray-500 text-sm">
                    {`    مجموع امتیاز کاربران به ${Data?.name} ${Data?.service.name}`}
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full flex justify-center lg:justify-start items-center lg:items-start  h-[330px]  lg:h-[206px] bg-[#FAFAFA] rounded-[20px] ">
              <div className=" flex flex-col lg:flex-row items-center gap-x-12">
                <div className=" flex justify-center items-center  ">
                  <Image
                    src={commentIcon}
                    alt="cooment"
                    className=" object-cover"
                  />
                </div>
                <div className=" flex-col  flex gap-y-4 justify-center lg:pt-10">
                  <p className="   text-primary-600 font-semibold px-4 lg:px-0 text-sm lg:text-base">
                    با ثبت دیدگاه خود به کاربران دیگر را برای انتخاب و استفاده
                    از خدمات بهتر یاری نمایید!
                  </p>
                  <p className=" text-gray-500 text-sm px-4 lg:px-0">
                    شما هم درباره ی این سرویس دیدگاه خود را ثبت کنید{" "}
                  </p>
                  <div className=" w-full flex pb-4  lg:pb-0  px-4 lg:px-0 lg:max-w-[236px]">
                    <SecondaryBtn onClick={() => setState(!state)}>
                      ثبت دیدگاه
                    </SecondaryBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className=" mb-3 lg:mb-8 text-gray-500 font-semibold ">{` امتیاز و نظرات کاربران(${commentList.length} نظر)`}</h2>

          {commentList.length !== 0 ? (
            <div className=" gap-y-3 md:gap-y-6 flex-col flex">
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
              className=" w-full gap-x-4 group justify-center cursor-pointer flex text-center mt-6"
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
      ) : (
        <>
          <ReviewServiceLoading />
        </>
      )}
    </>
  );
}

export default ReviewService;

export function ReviewServiceLoading() {
  return (
    <>
      <div className=" Container flex-col flex  animate-pulse">
        <div className=" flex gap-x-3 w-full my-10  ">
          <div className=" w-full flex flex-col justify-center items-center gap-y-3 max-w-[400px] h-[206px] rounded-[20px] bg-gray-200">
            <div className=" bg-gray-100 h-6 max-w-[120px] w-full rounded-[20px]"></div>
            <div className=" bg-gray-100 h-6 max-w-[140px] w-full rounded-[20px]"></div>
            <div className=" bg-gray-100 h-4 max-w-[214px] w-full rounded-[20px]"></div>
          </div>
          <div className=" w-full p-6 h-[206px] flex gap-x-12 rounded-[20px] bg-gray-200">
            <div className=" bg-gray-100 w-full max-w-[211px] rounded-[20px] h-[161px]"></div>
            <div className=" w-full flex flex-col gap-y-6 justify-center items-start">
              <div className=" bg-gray-100 w-full max-w-[421px] rounded-[20px] h-4"></div>
              <div className=" bg-gray-100 w-full max-w-[311px] rounded-[20px] h-4"></div>
              <div className=" bg-gray-100 w-full max-w-[211px] rounded-[20px] h-4"></div>
            </div>
          </div>
        </div>

        <div className=" w-full max-w-[200px] rounded-[20px] mb-8 h-5 bg-gray-200"></div>

        <div className=" w-full h-[127px] flex bg-gray-200 rounded-lg">
          <div className=" w-full max-w-[80px] p-3 h-full">
            <div className=" rounded-full w-8 h-8  bg-gray-100"></div>
          </div>

          <div className=" w-full py-4 flex flex-col gap-4">
            <div className=" w-full flex gap-x-4 pl-10 lg:pl-0">
              <div className=" rounded-lg w-full max-w-[120px] h-4 bg-gray-100"></div>
              <div className=" rounded-lg w-full max-w-[220px] lg:max-w-[90px] h-4 bg-gray-100"></div>
            </div>
            <div className=" rounded-lg w-full max-w-[220px] lg:max-w-[520px] h-4 bg-gray-100"></div>

            <div className=" w-full flex lg:hidden  pl-10 ">
              <div className=" w-full    flex gap-x-6">
                <div className=" w-5 h-5 rounded-full bg-gray-100"></div>
                <div className=" w-5 h-5 rounded-full bg-gray-100"></div>
              </div>

              <div className=" w-full gap-x-2 flex">
                <div className=" w-5 h-5 rounded-full bg-gray-100"></div>
                <div className=" w-5 h-5 rounded-full bg-gray-100"></div>
                <div className=" w-5 h-5 rounded-full bg-gray-100"></div>
                <div className=" w-5 h-5 rounded-full bg-gray-100"></div>
                <div className=" w-5 h-5 rounded-full bg-gray-100"></div>
              </div>
            </div>

            <div className=" w-full hidden  lg:flex lg:justify-end gap-x-6   pl-10 lg:pl-0 ">
              <div className=" flex gap-x-6 px-10">
                <div className=" flex gap-x-6">
                  <div className=" w-5 h-5 rounded-full bg-gray-100"></div>
                  <div className=" w-5 h-5 rounded-full bg-gray-100"></div>
                </div>

                <div className=" w-full gap-x-2 flex">
                  <div className=" w-5 h-5 rounded-full bg-gray-100"></div>
                  <div className=" w-5 h-5 rounded-full bg-gray-100"></div>
                  <div className=" w-5 h-5 rounded-full bg-gray-100"></div>
                  <div className=" w-5 h-5 rounded-full bg-gray-100"></div>
                  <div className=" w-5 h-5 rounded-full bg-gray-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
