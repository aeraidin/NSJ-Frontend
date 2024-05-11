/** @format */

"use client";
import React, { useEffect, useState } from "react";
import DropDown from "../Dropdowns/Dropdown";
import ControlledInput from "../Input/ControlledInput";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { Location, SearchNormal } from "iconsax-react";
import useDebounce from "@/util/hook/useDebounce";
import { AnimatePresence, motion } from "framer-motion";
import { useSearch } from "@/util/api/Search/useSearch";
import { log } from "console";
function SearchBox() {
  const options = [
    {
      label: "تهران",
      value: "1",
    },
  ];

  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState(false);
  const [data, setData] = useState();

  const debouncedValue = useDebounce({
    Delay: 3000,
    value: inputValue,
  });

  // const searching = useSearch({
  //   serviceName: debouncedValue,
  //   sortType: 0,
  //   page: 1,
  //   pageSize: 3,
  // });

  useEffect(() => {
    if (inputValue !== "") {
      setSearch(true);
    } else {
      setSearch(false);
    }
  }, [inputValue, debouncedValue]);

  // useEffect(() => {
  //   searching
  //     .then((response) => {
  //       console.log(response);
  //       setData(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [searching]);

  // const searchResult =

  return (
    <>
      <div className=" w-full relative flex justify-between gap-x-4 items-center py-1 rounded-2xl text-gray-300 border border-gray-50 px-1 ">
        <div className="h-10  pr-2  w-full max-w-[158px] flex justify-center items-center">
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

        {search && (
          <AnimatePresence>
            <motion.div
              className=" absolute bg-red-300  w-full"
              initial={{ opacity: 0, translateY: 30 }}
              exit={{ opacity: 0, translateY: 30 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className=" w-full bg-white border border-gray-50 overflow-y-scroll rounded-2xl h-fit  p-2 absolute top-10 left-1 z-20 ">
                {/* {data?.value?.list.map((item: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className=" cursor-pointer hover:bg-gray-50 duration-200 rounded-lg flex items-center px-4 my-2 w-full h-10"
                    >
                      {item.serviceName}
                    </div>
                  );
                })} */}
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </>
  );
}

export default SearchBox;
