/** @format */
"use client";

import React, { ChangeEvent, useState } from "react";
import sidebarPicture from "../../../public/profile/sidebar.png";
import walletPicture from "../../../public/profile/wallet.png";
import Image from "next/image";
import { Edit2 } from "iconsax-react";
import Links from "./Links";
import useGetUser from "@/util/hook/user/useGetUser";
import useGetBalance from "@/util/hook/Wallet/useGetBalance";
import { NumericFormat } from "react-number-format";
import { motion } from "framer-motion";
import imggg from "../../../public/Banner/435x210.jpg";
import { convertFileToBase64 } from "@/util/convertFileToBase64";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import UploadFile from "@/util/api/Upload/UploadFile";
import UploadProfile from "@/util/api/Upload/UploadProfile";
function SideBar() {
  const user = useGetUser();
  const balance = useGetBalance();
  const [Result, setResult] = useState(false);
  const queryclient = useQueryClient();
  const [uploadedPhoto, setUploadedPhoto] = useState<string>();

  const UploadProfileMutation = useMutation({
    mutationFn: UploadProfile,
    onSuccess(data, variables, context) {
      queryclient.invalidateQueries({ queryKey: ["UserData"] });
    },
    onError(error, variables, context) {
      setResult(true);
    },
  });

  const UploadFileMutation = useMutation({
    mutationFn: UploadFile,
    onSuccess(data, variables, context) {
      UploadProfileMutation.mutate({
        imageFilePath: data.value.fileName,
      });
      UploadProfileMutation.isSuccess
        ? setUploadedPhoto(data.value.fileName)
        : null;
    },
    onError(error, variables, context) {
      setResult(true);
    },
  });

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log({ id: Math.random(), src: reader.result as string });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
    if (!file) return;
    try {
      const base64String = await convertFileToBase64(file);
      await UploadFileMutation.mutateAsync({
        file: base64String,
        fileName: file.name,
        fileType: 3,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className=" w-full flex   flex-col p-2 items-center rounded-[20px]   lg:border border-gray-50 ">
      <div className=" w-full  relative ">
        <div className="  aspect-w-12 aspect-h-4 md:aspect-w-16 md:aspect-h-5 lg:aspect-w-16 lg:aspect-h-9">
          <Image src={sidebarPicture} fill alt="sidebar-pic" sizes="90vw" />

          {UploadFileMutation.isPending || user.isPending ? (
            <div className=" w-full flex h-full justify-center">
              <div className=" rounded-full bg-white border border-gray-50 flex justify-center items-center h-20 w-20 bottom-[-32px] absolute">
                <svg className="h-6 w-6 animate-spin" viewBox="3 3 18 18">
                  <path
                    className="fill-gray-300"
                    d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                  ></path>
                  <path
                    className="fill-gray-100 "
                    d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                  ></path>
                </svg>
              </div>
            </div>
          ) : (
            <div className=" w-full    h-full  flex justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URLIMAGE}${user?.data?.value.image}`}
                alt="user_profile"
                height={80}
                width={80}
                className=" rounded-full object-cover border select-none  h-20 w-20 bg-white bottom-[-32px]  absolute "
              />

              <input
                id="photo"
                disabled={UploadFileMutation.isPending}
                type="file"
                onChange={handleFileChange}
                accept=".jpg, .jpeg, .png"
                className="hidden"
              />

              {/* Label  Edit2 icon */}
              <label
                htmlFor="photo"
                className=" bg-third-500 cursor-pointer flex justify-center items-center w-6 h-6 rounded-full absolute bottom-[-28px] lg:bottom-[-32px] translate-x-7 lg:translate-x-0 lg:right-[78px]"
              >
                <Edit2 size={16} variant="Bold" className="text-white" />
              </label>
            </div>
          )}
        </div>
      </div>
      {user.isPending ? (
        <div className=" w-24 mt-12 h-4 animate-pulse rounded-2xl bg-gray-200"></div>
      ) : (
        <>
          <p className=" mt-12 text-gray-500 font-semibold">{`${user?.data?.value.firstName} ${user?.data?.value.lastName}`}</p>
        </>
      )}

      <div className=" border mt-5 h-[77px] rounded-[20px] relative px-6 border-gray-50 flex  w-full">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className=" absolute bottom-0 left-0  w-24 h-24"
        >
          <div className=" relative w-24 h-24">
            <Image src={walletPicture} fill alt="wallet" sizes="90vw" />
          </div>
        </motion.button>
        <div className=" flex flex-col w-full justify-center items-start">
          <p className=" text-gray-300 font-semibold text-xs">موجودی کیف پول</p>
          {balance.isPending ? (
            <div className=" flex  text-base animate-pulse justify-center items-center font-semibold">
              <div className=" w-20 h-4 rounded-2xl bg-gray-200"></div>
              <span className=" pr-1 text-gray-200 ">{"تومان"}</span>
            </div>
          ) : (
            <>
              <p className=" text-third-500  text-base font-semibold">
                <NumericFormat
                  value={balance?.data?.value.balance}
                  displayType={"text"}
                  className="text-third-500 "
                  thousandSeparator={","}
                />
                <span className=" pr-1">{"تومان"}</span>
              </p>
            </>
          )}
        </div>
      </div>

      <div className=" w-full mt-4">
        <Links />
      </div>
    </div>
  );
}

export default SideBar;
