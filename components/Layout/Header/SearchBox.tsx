/** @format */

"use client";
import React, { useEffect, useState } from "react";
import DropDown from "../Dropdowns/Dropdown";
import { usePathname, useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft2, Location, SearchNormal } from "iconsax-react";
import useDebounce from "@/util/hook/useDebounce";
import { AnimatePresence, motion } from "framer-motion";
import { useSearch } from "@/util/api/Search/useSearch";
import { log } from "console";
import Link from "next/link";
import useClickOutside from "@/util/hook/useClickOutside";

function SearchBox() {
  const options = [
    {
      label: "تهران",
      value: "1",
    },
  ];

  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState(false);
  const [data, setData] = useState<any>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const pathname = usePathname();

  const debouncedValue = useDebounce({
    Delay: 1500,
    value: inputValue,
  });

  const searchHandler = useMutation({
    mutationFn: useSearch,
    onSuccess(data, variables, context) {
      console.log(data);
    },
    onError(error, variables, context) {},
  });

  useEffect(() => {
    if (inputValue !== "") {
      setSearch(true);
      setLoading(true);

      searchHandler.mutate({
        serviceName: debouncedValue,
        sortTyp: 0,
        page: 1,
        pageSize: 3,
      });
    } else {
      setSearch(false);

      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, debouncedValue]);

  // useEffect(() => {
  //  if(inputValue )
  // }, [debouncedValue]);

  const handleClickOutside = () => {
    setSearch(false);
  };
  const containerRef = useClickOutside(handleClickOutside);

  return (
    <>
      {search ? (
        <div
          className={` w-full h-screen  absolute lg:bg-black/40 ${
            pathname !== "/" ? "hidden" : null
          }  lg:block top-[172px] md:top-[180px] lg:top-[100px] bottom-0 right-0`}
        ></div>
      ) : null}
      {/* <div className=" w-full h-screen  absolute bg-white top-0 bottom-0 right-0"></div> */}

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
            onKeyDown={(e: any) => {
              if (e.key === "Enter") {
                router.push(`/search/${inputValue}`);
              }
            }}
            className={`w-full placeholder:text-gray-300 outline-none h-10 bg-transparent`}
            placeholder="جستجو ورزش،تفریح،باشگاه و... "
          />
        </div>

        <div className=" hidden md:block">
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
              ref={containerRef}
              className=" absolute  w-full"
              initial={{ opacity: 0, translateY: 30 }}
              exit={{ opacity: 0, translateY: 30 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={` w-full  ${
                  pathname === "/" ? "" : null
                } bg-white lg:border border-gray-50  overflow-y-scroll rounded-2xl h-fit  p-2 absolute top-10 left-1 z-20 `}
              >
                {searchHandler.isPending ? (
                  <>
                    <div className=" w-full flex justify-center items-center">
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
                    </div>
                  </>
                ) : (
                  <>
                    {searchHandler.data?.value?.list.length > 0 ? (
                      <div className=" h-[460px] overflow-y-scroll">
                        {searchHandler.data?.value?.list.map(
                          (item: any, index: number) => {
                            return (
                              <Link
                                href={`/service/${item.id}`}
                                key={index}
                                className=" cursor-pointer hover:bg-gray-50 duration-200 rounded-lg flex items-center px-4 my-2 w-full h-10"
                              >
                                {item.serviceName}
                              </Link>
                            );
                          }
                        )}
                        <Link
                          href={`/search/${inputValue}`}
                          className=" w-full flex justify-center items-center gap-x-3 hover:bg-gray-50 rounded-lg p-2 cursor-pointer duration-200"
                        >
                          <p className=" text-center text-primary-600">
                            مشاهده همه
                          </p>
                          <ArrowLeft2 size={14} className=" text-primary-600" />
                        </Link>
                      </div>
                    ) : (
                      <>
                        <div className=" flex justify-center items-center">
                          <p className=" text-gray-5">یافت نشد</p>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </>
  );
}

export default SearchBox;
