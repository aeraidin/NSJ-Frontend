/** @format */

import React from "react";

function ReserveStatus({ status }: { status: boolean }) {
  return (
    <>
      {status === true ? (
        <div className=" text-success-500 w-fit  px-3 py-1 text-xs   bg-success-100 text-[8px] text-center rounded-lg  lg:text-sm font-semibold">
          <p className="text-success-500 text-sm"> فعال</p>
        </div>
      ) : null}
      {status === null ? (
        <div className=" text-third-500 w-fit   px-3 py-1 text-xs   md:text-[8px]  bg-third-100  text-center rounded-lg  lg:text-sm font-semibold">
          <p className=" text-third-500 text-sm">بررسی نشده</p>
        </div>
      ) : null}
      {status === false ? (
        <div className="  text-error-500 w-fit  px-3 py-1 text-xs bg-error-100  rounded-lg text-center    lg:text-sm font-semibold">
          <p className="text-error-500 text-sm">رد شده</p>
        </div>
      ) : null}
    </>
  );
}

export default ReserveStatus;
