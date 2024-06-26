/** @format */

import { ArrowLeft2, Location } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { NumericFormat } from "react-number-format";

function ProductCards({ data }: { data: ProductCard }) {
  return (
    <div className="w-full select-none bg-white max-w-[321px] h-fit border border-gray-50 rounded-2xl overflow-hidden hover:shadow-CMSHADOW duration-200 group">
      <Link href={`/service/${data.id}`}>
        <div className="aspect-w-8 aspect-h-5 overflow-hidden relative">
          <Image
            fill
            className="object-cover group-hover:scale-110 duration-150"
            alt={data.filePath}
            src={`${process.env.NEXT_PUBLIC_API_BASE_URLIMAGE}${data.filePath}`}
            sizes="90vw"
          />
        </div>
      </Link>
      <div className="p-3">
        {/* Info Part */}
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full flex items-center justify-between gap-4
          "
          >
            <Link className="  truncate" href={`/service/${data.id}`}>
              <h4 className="text-gray-600">
                {data.serviceName}{" "}{data.sportComplex.name}
              </h4>
            </Link>
            <div className="flex items-center gap-2 justify-center">
              <h5 className="text-sm">{data.rate}</h5>
              <FaStar className="text-secondary-600 size-4" />
            </div>
          </div>
          <div className="w-full flex items-center gap-2 ">
            {/* Location */}
            <div className="flex items-center border-l border-gray-300 pl-2 gap-1">
              <Location size="20" className="text-gray-300" variant="Bold" />
              <h5>{data.location}</h5>
            </div>
            <Link href={`/category/${data.service.id}`} className="group/item">
              <h5 className="group-hover/item:text-third-500 group-hover/item:underline duration-150">
                {data.service.name}
              </h5>
            </Link>
          </div>
          <div
            className={`flex items-center gap-2 ${data.hasDiscount ? "opacity-100" : "opacity-0"
              }`}
          >
            <h5 className="text-gray-200 line-through">
              {" "}
              <NumericFormat
                value={data.price}
                displayType={"text"}
                thousandSeparator={","}
              />{" "}
            </h5>
            <div className="px-2 py-1 border border-error-500 rounded-xl">
              <h5 className="text-error-500 leading-4">
                تا {Math.floor(data.discountPresentage)}٪ تخفیف
              </h5>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>
            {" "}
            <NumericFormat
              value={data.hasDiscount ? data.priceAfterDiscount : data.price}
              displayType={"text"}
              thousandSeparator={","}
            />{" "}
            تومان
          </p>
          <Link
            href={`/service/${data.id}`}
            className="text-third-600 flex items-center gap-1 -translate-x-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-150 "
          >
            <h5 className="text-third-600">مشاهده و خرید</h5>
            <ArrowLeft2 size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;

export function ProductCardsLoading() {
  return (
    <div className="w-full select-none bg-white max-w-[321px] h-fit border border-gray-50 rounded-2xl overflow-hidden hover:shadow-CMSHADOW duration-200 group animate-pulse ">
      <div className="aspect-w-8 aspect-h-5 overflow-hidden relative">
        <div className="w-full h-full bg-gray-300"></div>
      </div>
      <div className="p-3">
        {/* Info Part */}
        <div className="flex flex-col gap-3 pb-3">
          <div className="w-full flex items-center justify-between gap-4">
            <div className=" w-[100px] h-3 rounded-full bg-gray-200"></div>
            <div className="flex items-center gap-2 justify-center">
              <h5 className="leading-[12px]">5</h5>
              <FaStar className="text-secondary-600" size={20} />
            </div>
          </div>
          <div className="w-full flex items-center gap-2 ">
            {/* Location */}
            <div className="flex items-center border-l border-gray-300 pl-2 gap-1">
              <Location size="20" className="text-gray-300" variant="Bold" />
              <div className="w-[50px] h-2 bg-gray-100 rounded-full"></div>
            </div>
            <div className="group/item">
              <div className="w-[100px] h-2 rounded-full  bg-gray-100"></div>
            </div>
          </div>
          <div className={`flex items-center gap-2  opacity-0`}>
            <div className="w-full max-w-[100px] h-2 rounded-full bg-gray-100"></div>

            <div className="px-2 py-1 border border-error-500 rounded-xl">
              <h5 className="text-error-500 leading-4">تا 20٪ تخفیف</h5>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-full max-w-[100px] rounded-2xl h-2 bg-gray-100"></div>
          <div className="text-third-600 flex items-center gap-1 -translate-x-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-150">
            <h5 className="text-third-600">مشاهده و خرید</h5>
            <ArrowLeft2 size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
