"use client"
import SuccessBtn from '@/components/Layout/Buttons/SuccessBtn'
import { UserTypeData } from '@/util/data/UserTypeData'
import { DaysOfWeekArray } from '@/util/data/WorkDayTime'
import useGetSingleServiceSans from '@/util/hook/SingleService/useGetSingleServiceSans'
import { Calendar, Clock, Timer1 } from 'iconsax-react'
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
            console.log(Data);

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
                {SelectedClient ? SelectedClient?.days.map((item, index) => {
                    return <div key={index} className='w-full border flex flex-col border-gray-50 hover:border-gray-100 hover:shadow-CMSHADOW duration-150 rounded-2xl p-4 lg:py-6 lg:px-8'>
                        <div className='flex flex-col gap-6 lg:flex-row items-start lg:items-center justify-between '>
                            <div className='flex flex-col gap-4'>
                                <div className='flex items-center gap-2'>
                                    <Calendar size="24" className='text-gray-500' />
                                    <p>{DaysOfWeekArray[item.dayOfWeek].name}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Clock size="24" className='text-gray-500' />
                                    <p>{DaysOfWeekArray[item.dayOfWeek].name}</p>
                                </div>
                            </div>
                            <div className='flex flex-1 w-full flex-col lg:flex-row items-start lg:items-center gap-4'>
                                <div className='w-full flex items-center justify-between lg:justify-end'>
                                    <p className='lg:hidden'>قیمت:</p>
                                    <p className='flex items-center gap-1'><NumericFormat
                                        value={item.price}
                                        displayType={"text"}
                                        thousandSeparator={","}
                                    />
                                        {" تومان "}</p>

                                </div>
                                <div className='w-full lg:max-w-[166px]'>
                                    <SuccessBtn onClick={() => CollapseHandler(index)}>رزور بلیت</SuccessBtn>
                                </div>
                            </div>
                        </div>
                        <Collapse
                            isOpened={index === expandedRow}
                            className="w-full ">
                            <div className='text-gray-500 flex items-center gap-4 px-6 pt-6'>
                                <Timer1 size="24" />
                                <p className='text-gray-400'>سانس مورد نظر را انتخاب کنید</p>
                            </div>
                            <div className='flex items-center flex-wrap gap-3 py-4 px-6'>
                                {item.details.map((item, index) => {
                                    return (
                                        <button key={index} className=' '>
                                            <div className=" relative overflow-hidden h-8 text-sm lg:text-base group lg:h-10 border flex items-center gap-3 border-third-400 hover:border-transparent rounded-lg   hover:shadow px-4 py-2  duration-200">
                                                <p className='text-third-400 group-hover:opacity-0  group-hover:-translate-y-full duration-200'>{(item.end) + "-" + (item.start)}</p>
                                                <div className='group-hover:opacity-100 h-8 w-full bg-success-600 text-center flex items-center justify-center lg:h-10 opacity-0 absolute top-full  group-hover:top-1/2 left-1/2 transform -translate-x-1/2 group-hover:-translate-y-1/2 duration-200 '>
                                                    <p className="text-white">خرید</p>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </Collapse>
                    </div>
                }) : null}

            </div>
        </div>
    )
}

export default SansService