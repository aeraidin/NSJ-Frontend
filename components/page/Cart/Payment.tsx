import RadioButton from '@/components/Layout/Buttons/RadioButton'
import useGetBalance from '@/util/hook/Wallet/useGetBalance';
import Image from 'next/image'
import React from 'react'
import { NumericFormat } from 'react-number-format'
import { motion } from "framer-motion";


function Payment({ state, ChangeState }: { state: boolean, ChangeState: (e: boolean) => void }) {
    const balance = useGetBalance();

    return (
        <div className='w-full rounded-2xl border border-gray-50 p-6 lg:p-10'>
            <h2>شیوه پرداخت</h2>
            <div className='mt-6 border-b border-b-gray-50 pb-6'>
                <p className='text-gray-300 mb-2'>پرداخت با کارت بانکی</p>
                <button onClick={() => ChangeState(false)} className='flex items-center gap-4 px-6 py-4 lg:px-8 lg:py-6 border border-gray-50 rounded-2xl w-full hover:border-gray-200 '>
                    <RadioButton checked={state === false} />
                    <div className='w-14 h-14 lg:w-16 lg:h-16 relative'>
                        <Image src={"/Icons/ZarinPal.png"} fill alt='iconZarinPal' className='object-contain' sizes="90vw" />
                    </div>
                    <h3>زرین پال</h3>
                </button>
            </div>
            {/* کیف پول */}
            <div className='mt-6'>
                <p className='text-gray-300 mb-2'>استفاده از اعتبار کیف پول</p>
                <button onClick={() => ChangeState(true)} className="py-12 w-full  bg-gray-25 border border-transparent hover:border-gray-200 duration-150 rounded-2xl gap-2 flex items-center p-6 lg:p-10">

                    <RadioButton checked={state} />
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="w-20 h-20 relative hidden md:block"
                    >
                        <Image src={"/profile/wallet.png"} alt="wallet1" fill sizes="90vw" />
                    </motion.button>


                    <div className="items-start flex gap-y-4 flex-col">
                        <p className="select-none  font-semibold text-gray-400">
                            موجودی کیف پول شما
                        </p>
                        {balance.isPending ? (
                            <span className=" select-none flex justify-center items-center text-base  lg:text-[40px] text-primary-600 font-bold">
                                <div className=" w-28 lg:w-48 h-4  lg:h-8 animate-pulse rounded-2xl bg-gray-200"></div>

                                <span className=" select-none mr-1 lg:mr-4 text-sm lg:text-base xl:text-[20px] text-gray-200 font-semibold">
                                    تومان
                                </span>
                            </span>
                        ) : (
                            <>
                                <div className="flex items-end gap-2 ">
                                    <h1>
                                        <NumericFormat
                                            value={balance?.data?.value.balance}
                                            displayType={"text"}
                                            className="text-primary-600"
                                            thousandSeparator={","}
                                        />
                                    </h1>
                                    <span className="select-none text-sm lg:text-base  text-gray-200 font-semibold">
                                        تومان
                                    </span>
                                </div>
                            </>
                        )}
                    </div>
                </button>

            </div>
        </div>
    )
}

export default Payment