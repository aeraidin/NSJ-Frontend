/** @format */

"use client";
import React, { useEffect, useState } from "react";
import DropDown from "../Dropdowns/Dropdown";
import ControlledInput from "../Input/ControlledInput";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { Location, SearchNormal } from "iconsax-react";
import useDebounce from "@/util/hook/useDebounce";

function SearchBox() {
  const options = [
    {
      label: "تهران",
      value: "1",
    },
  ];

  const [inputValue, setInputValue] = useState("");

  const debouncedValue = useDebounce({
    Delay: 3000,
    value: "Searchiiing...",
  });

  useEffect(() => {
    if (inputValue !== "") {
      console.log(debouncedValue);
    }
  }, [debouncedValue, inputValue]);

  return (
    <div className=" w-full  flex justify-between gap-x-4 items-center py-1 rounded-2xl text-gray-300 border border-gray-50 px-2">
      <div className="  h-10   w-full max-w-[158px] flex justify-center items-center">
        <Location size={24} className=" text-gray-400" />
        <DropDown
          isHeader
          placeholder="استان"
          onSelect={(e) => console.log(e)}
          options={options}
        />
      </div>
      <div className=" h-7 border-l border-gray-100 "></div>
      <div className="  w-full">
        <input
          onChange={(e: any) => {
            setInputValue(e.target.value);
          }}
          className=" w-full outline-none h-10 placeholder:text-gray-300"
          placeholder="جستجو ورزش،تفریح،باشگاه و... "
        />
      </div>

      <div className=" ">
        <button
          onClick={() => console.log(inputValue)}
          className=" bg-primary-600  hover:bg-primary-400 focus:bg-primary-400 duration-200 flex justify-center items-center w-12 h-12 rounded-xl"
        >
          <SearchNormal className=" text-white" />
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
