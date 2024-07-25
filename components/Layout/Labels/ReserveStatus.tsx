/** @format */

import React from "react";

interface reserveStatus {
  usedState: number;
}

function ReserveStatus({ usedState }: reserveStatus) {
  return (
    <>
      {usedState === 0 ? (
        <div className=" text-success-500 w-fit  px-3 py-1 text-xs   bg-success-100 text-[8px] text-center rounded-lg  lg:text-sm font-semibold">
          <p className="text-success-500 text-sm"> فعال</p>
        </div>
      ) : null}
      {usedState === 1 ? (
        <div className=" text-third-500 w-fit   px-3 py-1 text-xs   md:text-[8px]  bg-third-100  text-center rounded-lg  lg:text-sm font-semibold">
          <p className=" text-third-500 text-sm">استفاده شده</p>
        </div>
      ) : null}
      {usedState === 2 ? (
        <div className="  text-error-500 w-fit  px-3 py-1 text-xs bg-error-100  rounded-lg text-center    lg:text-sm font-semibold">
          <p className="text-error-500 text-sm">مستردد شده</p>
        </div>
      ) : null}
      {usedState === 3 ? (
        <div className="  text-error-500 w-fit  px-3 py-1 text-xs bg-error-100  rounded-lg text-center    lg:text-sm font-semibold">
          <p className="text-error-500 text-sm">لغو شده</p>
        </div>
      ) : null}
    </>
  );
}

export default ReserveStatus;
