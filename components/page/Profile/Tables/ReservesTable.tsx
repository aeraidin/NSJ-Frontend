/** @format */
"use client";
import ErrorBtn from "@/components/Layout/Buttons/ErrorBtn";
import PrimaryBtn from "@/components/Layout/Buttons/PrimaryBtn";
import SecondaryBtn from "@/components/Layout/Buttons/SecondaryBtn";
import ReserveStatus from "@/components/Layout/Labels/ReserveStatus";
import Modal from "@/components/Layout/Modals/Modal";
import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CancelReserve } from "@/util/api/Profile/CancelReserve";

interface TransactionsProps {
  data: any[];
  selectedRow: (value: any) => void;
}

function ReservesTable({ data = [], selectedRow }: TransactionsProps) {
  const [Result, setResult] = useState(false);
  const [State, setState] = useState(false);
  const [reserveItem, setReserveItem] = useState(0);
  const queryClient = useQueryClient();
  const cancelReserve = useMutation({
    mutationFn: CancelReserve,
    onSuccess(data, variables, context) {
      setResult(true);
      setState(false);
      queryClient.invalidateQueries({ queryKey: ["ReserveList"] });
      queryClient.invalidateQueries({ queryKey: ["Balance"] });
    },
    onError(error, variables, context) {
      setResult(true);
    },
  });

  return (
    <>
      <Modal
        State={State}
        CloseModal={() => {
          setState(false);
        }}
        HaveBack={false}
        // BackFunction={() => setphoneNumber(null)}
      >
        <div className=" w-full flex flex-col gap-10 items-center justify-center">
          <h3>آیا از استرداد رزرو خود اطمینان دارید ؟</h3>
          <div className=" w-full flex gap-3">
            <PrimaryBtn
              isloading={cancelReserve.isPending}
              disabled={cancelReserve.isPending}
              onClick={() => {
                cancelReserve.mutate({
                  id: reserveItem,
                });
              }}
            >
              بله
            </PrimaryBtn>
            <ErrorBtn
              onClick={() => {
                setState(false);
              }}
            >
              خیر
            </ErrorBtn>
          </div>
        </div>
      </Modal>
      <div>
        {data.length !== 0 && data ? (
          <>
            <div className=" flex-col border border-gray-50   rounded-lg hidden lg:flex  ">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full  py-2 sm:px-6 lg:px-8 ">
                  <div className="overflow-hidden ">
                    <table className="min-w-full border-gray-50   table-fixed border-collapse text-right text-sm font-light">
                      <thead className="font-medium  dark:border-neutral-500 ">
                        <tr className="text-gray-400   border-b  border-gray-50  ">
                          <th className="px-3 py-4 text-center ">نام مجموعه</th>
                          <th className="px-3 py-4">مبلغ</th>
                          <th className="px-3 py-4">کد رزرو</th>

                          <th className="px-3 py-4">تاریخ</th>
                          <th className="px-3 py-4">ساعت</th>
                          <th className="px-3 py-4">وضعیت</th>
                          <th className="px-3 py-4"></th>
                        </tr>
                      </thead>
                      <tbody className=" overflow-y-scroll">
                        {data.map((item: any, index: number) => {
                          return (
                            <tr
                              key={index}
                              className="text-gray-300 font-semibold border-t border-gray-50 "
                            >
                              <td className="whitespace-nowrap px-3 py-4 ">
                                <div className=" w-full flex justify-center items-center">
                                  {/* <TransactionStatus data={item.type} /> */}
                                  {/* {item.type === 0 ? "واریز" : null}
                                {item.type === 1 ? "برداشت" : null} */}
                                  {item.serviceName}
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 ">
                                <NumericFormat
                                  value={item.amount}
                                  displayType={"text"}
                                  thousandSeparator={","}
                                />
                                تومان{" "}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4">
                                ---
                              </td>
                              <td className="whitespace-nowrap px-3 py-4">
                                {item.reserveDate.split(" ")[0]}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4">
                                {item.reserveTime.slice(0, 5)}
                              </td>
                              <td className=" cursor-pointer whitespace-nowrap px-3 py-4 text-third-500">
                                <ReserveStatus usedState={item.usedState} />
                              </td>
                              {item.usedState === 0 ? (
                                <td
                                  onClick={() => {
                                    setReserveItem(item.id);
                                    setState(true);
                                  }}
                                  className=" cursor-pointer whitespace-nowrap px-3 py-4 text-third-500"
                                >
                                  استرداد
                                </td>
                              ) : null}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {data.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className=" w-full border border-gray-50 gap-y-4  flex-col flex lg:hidden my-4 px-4 py-6  h-[260px] rounded-2xl"
                >
                  <div className=" w-full justify-between flex">
                    <p className="text-sm text-gray-400 font-semibold">
                      نام مجموعه
                    </p>
                    <p className=" text-gray-300 text-sm font-semibold">
                      {item.serviceName}
                    </p>
                  </div>

                  <div className=" w-full justify-between  flex">
                    <p className="text-sm text-gray-400 font-semibold">مبلغ</p>
                    <p className=" text-gray-300 text-sm font-semibold">
                      <NumericFormat
                        value={item.amount}
                        displayType={"text"}
                        thousandSeparator={","}
                      />
                      تومان{" "}
                    </p>
                  </div>

                  <div className=" w-full justify-between  flex">
                    <p className="text-sm text-gray-400 font-semibold">تاریخ</p>
                    <p className=" text-gray-300 text-sm font-semibold">
                      {item.reserveDate.split(" ")[0]}
                    </p>
                  </div>

                  <div className=" w-full justify-between  flex">
                    <p className="text-sm text-gray-400 font-semibold">ساعت</p>
                    <p className=" text-gray-300 text-sm font-semibold">
                      {item.reserveTime.slice(0, 5)}
                    </p>
                  </div>

                  <div className=" w-full justify-between  flex">
                    <p className="text-sm text-gray-400 font-semibold">وضعیت</p>
                    <p className=" text-gray-300 text-sm font-semibold">
                      <ReserveStatus usedState={item.usedState} />
                    </p>
                  </div>

                  <div className=" w-full justify-end  flex">
                    {item.usedState === 0 ? (
                      <p
                        onClick={() => {
                          setReserveItem(item.id);
                          setState(true);
                        }}
                        className=" text-third-500 cursor-pointer text-sm font-semibold"
                      >
                        استرداد
                      </p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className=" w-full  lg:min-h-[230px]  md:flex justify-center items-center text-center text-gray-200">
            <p>رزرو ثبت نشده</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ReservesTable;

export function ReservesTableLoading() {
  const placeholderRows = Array.from({ length: 10 });
  return (
    <>
      <div className=" flex-col border border-gray-50  rounded-lg hidden md:flex  ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full  py-2 sm:px-6 lg:px-8 ">
            <div className="overflow-hidden ">
              <table className="min-w-full border-gray-50   table-fixed border-collapse text-right text-sm font-light">
                <thead className="font-medium  dark:border-neutral-500 ">
                  <tr className="text-gray-400   border-b  border-gray-50 ">
                    <th className="px-3 py-4 text-center ">نام مجموعه</th>
                    <th className="px-3 py-4">مبلغ</th>
                    <th className="px-3 py-4">کد رزرو</th>

                    <th className="px-3 py-4">تاریخ</th>
                    <th className="px-3 py-4">ساعت</th>
                    <th className="px-3 py-4">جزییات</th>
                  </tr>
                </thead>
                <tbody className=" overflow-y-scroll animate-pulse">
                  {placeholderRows.map((item: any, index: number) => {
                    return (
                      <tr
                        key={index}
                        className="text-gray-300 font-semibold border-t   border-gray-50 "
                      >
                        <td className="whitespace-nowrap px-3 py-4 flex justify-center items-center  ">
                          <div className=" w-[75px] rounded-lg bg-gray-100 h-6 "></div>
                        </td>

                        <td className="whitespace-nowrap px-3 py-4 ">
                          <div className=" w-[75px] rounded-lg bg-gray-100  h-6"></div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 ">
                          <div className=" w-[75px] rounded-lg bg-gray-100  h-6"></div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 ">
                          <div className=" w-[75px] rounded-lg bg-gray-100  h-6"></div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 ">
                          <div className=" w-[75px] rounded-lg bg-gray-100 h-6"></div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 ">
                          <div className=" w-[75px] rounded-lg bg-gray-100 h-6"></div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 ">
                          <div className=" w-[75px] rounded-lg bg-gray-100 h-6"></div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-4  flex flex-col animate-pulse gap-y-3">
        <div className=" flex rounded-2xl  border border-gray-50 justify-center items-center gap-y-6  h-[280px] flex-col md:hidden">
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              نام مجموعه
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              مبلغ
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              کد رزرو
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              تاریخ
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              ساعت
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              جزئیات
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
        </div>

        <div className=" flex rounded-2xl  border border-gray-50 justify-center items-center gap-y-6  h-[280px] flex-col md:hidden">
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              نام مجموعه
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              مبلغ
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              کد رزرو
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              تاریخ
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              ساعت
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              جزئیات
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
        </div>

        <div className=" flex rounded-2xl  border border-gray-50 justify-center items-center gap-y-6  h-[280px] flex-col md:hidden">
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              نام مجموعه
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              مبلغ
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              کد رزرو
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              تاریخ
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              ساعت
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
          <div className=" w-full flex justify-between px-4 ">
            <div className=" w-24 h-4 text-sm text-gray-400 font-semibold ">
              جزئیات
            </div>
            <div className=" w-24 h-4 rounded-2xl bg-gray-200"></div>
          </div>
        </div>
      </div>
    </>
  );
}
