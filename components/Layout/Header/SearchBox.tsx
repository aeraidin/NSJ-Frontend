/** @format */

"use client";
import React, { useEffect, useState } from "react";
import DropDown from "../Dropdowns/Dropdown";
import ControlledInput from "../Input/ControlledInput";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { Location, SearchNormal } from "iconsax-react";
import useDebounce from "@/util/hook/useDebounce";
import { AnimatePresence, motion } from "framer-motion";
function SearchBox() {
  const options = [
    {
      label: "تهران",
      value: "1",
    },
  ];

  const [inputValue, setInputValue] = useState(null);
  const [search, setSearch] = useState(false);

  const debouncedValue = useDebounce({
    Delay: 3000,
    value: inputValue || "",
  });

  useEffect(() => {
    if (inputValue !== null) {
      console.log(debouncedValue);
      setSearch(true);
    } else {
      setSearch(false);
    }
  }, [debouncedValue, inputValue]);

  return (
    <div className=" w-full relative flex justify-between gap-x-4 items-center py-1 rounded-2xl text-gray-300 border border-gray-50 px-2">
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
      {/* {search && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            exit={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className=" w-full bg-white border border-gray-50 rounded-2xl h-20 absolute top-16 left-1 z-20 "></div>
          </motion.div>
        </AnimatePresence>
      )} */}
    </div>
  );
}

export default SearchBox;
