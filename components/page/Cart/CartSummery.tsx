import SuccessBtn from '@/components/Layout/Buttons/SuccessBtn'
import { UserTypeData } from '@/util/Data/UserTypeData'
import useGetBalance from '@/util/hook/Wallet/useGetBalance'
import { AnimatePresence, motion } from 'framer-motion'
import { Calendar, Clock, Ticket } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'
import { TbH5 } from 'react-icons/tb'
import { NumericFormat } from 'react-number-format'

function CartSummery({ Data, totalDiscount, totalPrice, onClick, disabled, CardPayment, step, back }: { Data: null | CartDetail, totalDiscount: number, totalPrice: number, onClick: () => void, back: () => void; disabled: boolean, CardPayment: boolean, step: number }) {
    const balance = useGetBalance();

    return (
        <div className="max-w-[430px] mx-auto w-full flex-1 flex flex-col  border border-gray-50 rounded-2xl justify-between h-fit  py-6 px-5 sticky top-28 ">
            <h1>خلاصه سفارش </h1>
            {Data && <AnimatePresence mode="wait">
                <motion.div
                    className='flex flex-col gap-4 max-h-[380px] overflow-y-auto mt-4 '
                    key={Data ? 1 : 2}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {Data.list.map((item, index) => {
                        return <div key={index} className='w-full rounded-2xl bg-gray-50 px-4 py-5'>
                            <p className='text-sm text-gray-500 w-full truncate'>{item.serviceName}</p>
                            <div className='w-full grid grid-cols-2 grid-rows-2 gap-y-3 gap-2 mt-3'>
                                <div className='flex items-center gap-1'>
                                    <Image
                                        src={"/Icons/Gender.svg"}
                                        width={16}
                                        height={16}
                                        alt="gendericon" />
                                    <p className='text-xs text-gray-400 w-full truncate'>{UserTypeData[item.clientType].name}</p>
                                </div>
                                <div className='flex items-center gap-1 text-gray-200'>
                                    <Calendar
                                        size="16"
                                        className='text-gray-200'
                                        variant="Bold" />
                                    <p className='text-xs text-gray-400 w-full truncate'>{item.date}</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <Clock
                                        size="16"
                                        className='text-gray-200'
                                        variant="Bold"
                                    />

                                    <p className='text-xs text-gray-400 w-full truncate'>{item.endTime + " الی " + item.startTime}</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <Ticket
                                        size="16"
                                        className='text-gray-200'
                                        variant="Bold"
                                    />
                                    <p className='text-xs text-gray-400 w-full truncate'>تعداد بلیط: {item.count} </p>
                                </div>
                            </div>
                        </div>
                    })}
                </motion.div>
            </AnimatePresence>
            }

            {totalDiscount !== 0 ?
                <React.Fragment>
                    <div className="flex items-center justify-between pt-6">
                        <p>قیمت قبل از تخفیف</p>
                        <p>
                            <NumericFormat
                                value={totalPrice}
                                displayType={"text"}
                                thousandSeparator={","}
                            />
                            {""}
                            {" تومان "}
                        </p>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <p className='text-error-600'>سود شما از خرید</p>
                        <p className='text-error-600'>
                            <NumericFormat
                                value={totalDiscount}
                                displayType={"text"}
                                thousandSeparator={","}
                            />
                            {" تومان "}
                        </p>
                    </div>
                </React.Fragment>
                :
                null
            }
            {CardPayment && ((totalDiscount !== 0 ? totalPrice - totalDiscount : totalPrice) >= balance?.data?.value.balance) ? <div className="flex items-center justify-between pt-4">
                <h5 className='text-gray-500'>مبلغ کل</h5>
                <h4 className="text-gray-600">
                    {" "}
                    <NumericFormat
                        value={totalDiscount !== 0 ? totalPrice - totalDiscount : totalPrice}
                        displayType={"text"}
                        thousandSeparator={","}
                    />
                    {" تومان "}
                </h4>
            </div> : null}
            {CardPayment ? <div className="flex items-center justify-between pt-4 pb-2">
                <h5 className='text-gray-500'>موجودی کیف پول</h5>
                <h4 className="text-third-500">
                    {" "}
                    <NumericFormat
                        value={balance?.data?.value.balance}
                        displayType={"text"}
                        thousandSeparator={","}
                    />
                    {" تومان "}
                </h4>
            </div> : null}
            <div className={`flex flex-col gap-4 pt-4 ${totalDiscount === 0 ? "" : "border-t border-dashed"} border-gray-50`}>
                <div className="flex items-center justify-between">
                    <p>مبلغ قابل پرداخت</p>
                    <h3 className="text-third-600">
                        {" "}
                        <NumericFormat
                            value={CardPayment && ((totalDiscount !== 0 ? totalPrice - totalDiscount : totalPrice) >= balance?.data?.value.balance) ? ((totalDiscount !== 0 ? totalPrice - totalDiscount : totalPrice) - balance?.data?.value.balance) : (totalDiscount !== 0 ? totalPrice - totalDiscount : totalPrice)}
                            displayType={"text"}
                            thousandSeparator={","}
                        />
                        {" تومان "}
                    </h3>
                </div>
                <div className='flex items-center justify-between gap-2'>
                    <SuccessBtn isloading={disabled} disabled={disabled} onClick={onClick}>{CardPayment && ((totalDiscount !== 0 ? totalPrice - totalDiscount : totalPrice) <= balance?.data?.value.balance) ? "برداشت از کیف پول" : "ادامه فرایند رزرو"}</SuccessBtn>
                    {step == 2 ?
                        <button onClick={back} className='px-6  h-[48px] lg:h-[56px] border disabled:cursor-wait disabled:opacity-25 border-gray-100 rounded-2xl text-gray-400 flex items-center gap-2 text-sm font-semibold hover:bg-error-600 hover:text-white group hover:border-transparent duration-150'>
                            انصراف
                        </button> : null}
                </div>
            </div>
        </div>
    )
}

export default CartSummery