"use client"
import SuccessBtn from '@/components/Layout/Buttons/SuccessBtn'
import { UserTypeData } from '@/util/data/UserTypeData'
import { DaysOfWeekArray } from '@/util/data/WorkDayTime'
import useGetSingleServiceSans from '@/util/hook/SingleService/useGetSingleServiceSans'
import { Timer1 } from 'iconsax-react'
import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-collapse'
import { NumericFormat } from 'react-number-format'

function SansService({ id }: { id: string }) {
    const data = useGetSingleServiceSans({ id: id })
    const [SelectedClient, setSelectedClient] = useState<Sans | null>(null)
    const [expandedRow, setexpandedRow] = useState<number | null>(null)
    const Data = data?.data?.value.list as Sans[] | undefined
    useEffect(() => {
        if (Data) {
            setSelectedClient({ clientType: Data[0].clientType, days: Data[0].days })
            console.log(Data[0].days);
        }
    }, [Data])
    const CollapseHandler = (id: number) => {
        setexpandedRow((prev) => (prev === id ? null : id));
    };
    return (
        <div id='sans' className="Container">
            <h2 className="text-gray-500 font-semibold ">رزرو</h2>
            <div className='border-b border-gray-50'>
                {Data ? Data.map((item, index) => {
                    return <button onClick={() => setSelectedClient({ clientType: item.clientType, days: item.days })} className={`px-10 py-6 border-b-2 font-semibold ${SelectedClient?.clientType === item.clientType ? "text-third-500 border-third-500" : "border-transparent text-gray-300"} duration-200`} key={index}>
                        {UserTypeData[item.clientType].name}
                    </button>
                }) : "Loading"}
            </div>
            <div className='py-6'>
                <table className="min-w-full table-fixed">
                    <thead>
                        <tr className="text-gray-400">
                            <th className="px-6 py-5 bg-gray-25 rounded-r-2xl font-semibold">روز</th>
                            <th className="px-3 py-5 bg-gray-25 font-semibold">مدت زمان هر سانس</th>
                            <th className="px-3 py-5 bg-gray-25 font-semibold">قیمت</th>
                            <th className="px-3 py-5 bg-gray-25 font-semibold">مدت زمان استفاده</th>
                            <th className="px-3 py-5 bg-gray-25 rounded-l-2xl font-semibold w-[170px]"></th>
                        </tr>
                    </thead>
                    <tbody className="overflow-y-scroll ">
                        {SelectedClient ? SelectedClient?.days.map((item, index) => {
                            return <React.Fragment key={index}>
                                <tr onClick={() => CollapseHandler(index)} className={`${index !== expandedRow ? "pb-6 border-b border-b-gray-50" : ""} cursor-pointer select-none `} >
                                    <td className='text-center py-5 px-3'><p>{DaysOfWeekArray[item.dayOfWeek].name}</p></td>
                                    <td className='text-center py-5 px-3'><p>{DaysOfWeekArray[item.dayOfWeek].name}</p></td>
                                    <td className='text-center py-5 px-3'><p>   <NumericFormat
                                        value={item.price}
                                        displayType={"text"}
                                        thousandSeparator={","}
                                    />
                                        {" تومان "}</p></td>
                                    <td className='text-center py-5 px-3'><p>{DaysOfWeekArray[item.dayOfWeek].name}</p></td>
                                    <td className='text-center py-5 px-3 w-[170px]'><div className='w-[170px]'><SuccessBtn>رزور بلیت</SuccessBtn></div></td>
                                </tr>
                                <tr>
                                    <td colSpan={6} className={index === expandedRow ? "pb-6 border-b border-b-gray-50" : " p-0"}>
                                        <Collapse
                                            isOpened={index === expandedRow}
                                            className="w-full">
                                            <div className='text-gray-500 flex items-center gap-4 px-6 mt-2'>
                                                <Timer1 size="24" />
                                                <p className='text-gray-400'>سانس مورد نظر را انتخاب کنید</p>
                                            </div>
                                            <div className='flex items-center flex-wrap gap-3 py-4 px-6'>
                                                {item.details.map((item, index) => {
                                                    return (
                                                        <button key={index} className=' '>
                                                            <div className=" relative overflow-hidden h-8 text-sm lg:text-base group lg:h-10 border flex items-center gap-3 border-third-400 hover:border-transparent rounded-lg   hover:shadow px-4 py-2  duration-200">
                                                                <p className='text-third-400 group-hover:opacity-0'>{(item.end) + "-" + (item.start)}</p>
                                                                <div className='group-hover:opacity-100 h-8 w-full bg-success-600 text-center flex items-center justify-center lg:h-10 opacity-0 absolute top-full  group-hover:top-1/2 left-1/2 transform -translate-x-1/2 group-hover:-translate-y-1/2 duration-200 '>
                                                                    <p className="text-white">خرید</p>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </Collapse>
                                    </td>
                                </tr>
                            </React.Fragment>
                        }) : "loading"}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SansService