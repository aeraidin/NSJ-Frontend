/** @format */
"use client";
import {
  Heart,
  LogoutCurve,
  MessageText1,
  Profile,
  Receipt1,
  TableDocument,
  Wallet,
} from "iconsax-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

function Links() {
  const path = usePathname();

  console.log(path);

  return (
    <div className=" w-full mt-6 h-full ">
      <div className=" h-full justify-between lg:gap-y-24 flex  flex-col">
        <div>
          <ul className=" flex flex-col gap-1">
            <Link
              href={"/profile/info"}
              className={` flex hover:bg-gray-25 duration-200 ${
                path === "/profile/info" ? "bg-gray-25  " : null
              } px-6 py-4 rounded-2xl  gap-x-4 `}
            >
              {path === "/profile/info" ? (
                <Profile variant="Bold" className={`text-third-500`} />
              ) : (
                <Profile className={`text-gray-300`} />
              )}
              <p
                className={` text-base text-gray-400 flex-nowrap ${
                  path === "/profile/info" ? "text-third-500  " : null
                }`}
              >
                اطلاعات حساب کاربری
              </p>
            </Link>

            <Link
              href={"/profile/wallet"}
              className={` flex hover:bg-gray-25 duration-200 ${
                path === "/profile/wallet" ? "bg-gray-25 select-none " : null
              } px-6 py-4 rounded-2xl  gap-x-4 `}
            >
              {path === "/profile/wallet" ? (
                <Wallet variant="Bold" className={`text-third-500`} />
              ) : (
                <Wallet className={`text-gray-300`} />
              )}
              <p
                className={` text-base flex-nowrap text-gray-400 ${
                  path === "/profile/wallet" ? "text-third-500  " : null
                }`}
              >
                کیف پول
              </p>
            </Link>

            <Link
              href={"/profile/reserves"}
              className={` flex hover:bg-gray-25 duration-200 ${
                path === "/profile/reserves" ? "bg-gray-25 select-none " : null
              } px-6 py-4 rounded-2xl  gap-x-4 `}
            >
              {path === "/profile/reserves" ? (
                <TableDocument variant="Bold" className={`text-third-500`} />
              ) : (
                <TableDocument className={`text-gray-300`} />
              )}
              <p
                className={` text-base flex-nowrap text-gray-400 ${
                  path === "/profile/reserves" ? "text-third-500  " : null
                }`}
              >
                رزرو های من
              </p>
            </Link>

            <Link
              href={"/profile/favorite"}
              className={` flex hover:bg-gray-25 duration-200 ${
                path === "/profile/favorite" ? "bg-gray-25 select-none " : null
              } px-6 py-4 rounded-2xl  gap-x-4 `}
            >
              {path === "/profile/favorite" ? (
                <Heart variant="Bold" className={`text-third-500`} />
              ) : (
                <Heart className={`text-gray-300`} />
              )}
              <p
                className={` text-base flex-nowrap text-gray-400 ${
                  path === "/profile/favorite" ? "text-third-500  " : null
                }`}
              >
                علاقه مندی
              </p>
            </Link>

            <Link
              href={"/profile/transactions"}
              className={` flex hover:bg-gray-25 duration-200 ${
                path === "/profile/transaction"
                  ? "bg-gray-25 select-none "
                  : null
              } px-6 py-4 rounded-2xl  gap-x-4 `}
            >
              {path === "/profile/transactions" ? (
                <Receipt1 variant="Bold" className={`text-third-500`} />
              ) : (
                <Receipt1 className={`text-gray-300`} />
              )}
              <p
                className={` text-base flex-nowrap text-gray-400 ${
                  path === "/profile/transactions" ? "text-third-500  " : null
                }`}
              >
                تراکنش ها
              </p>
            </Link>

            <Link
              href={"/profile/comments"}
              className={` flex hover:bg-gray-25 duration-200 ${
                path === "/profile/comments" ? "bg-gray-25 select-none " : null
              } px-6 py-4 rounded-2xl  gap-x-4 `}
            >
              {path === "/profile/comments" ? (
                <MessageText1 variant="Bold" className={`text-third-500`} />
              ) : (
                <MessageText1 className={`text-gray-300`} />
              )}
              <p
                className={` text-base flex-nowrap text-gray-400 ${
                  path === "/profile/comments" ? "text-third-500  " : null
                }`}
              >
                نظرات من
              </p>
            </Link>
          </ul>
        </div>

        <div>
          <ul>
            <Link
              href={"/"}
              className=" flex hover:bg-error-100 duration-200  px-6 py-4 rounded-2xl  gap-x-4 "
            >
              <LogoutCurve className=" text-error-500" />
              <p className="text-error-500 text-base flex-nowrap">خروج</p>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Links;
