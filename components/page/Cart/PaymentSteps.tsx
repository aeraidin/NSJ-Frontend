import { BagHappy, Ticket, Wallet } from 'iconsax-react';
import React from 'react'
import { motion } from 'framer-motion';
interface StepItem {
    label: string, isActive: boolean, onClick: () => void, icon: React.ElementType;
}
function PaymentSteps({
    step,
    OnClick,
}: {
    step: number;
    OnClick: (e: number) => void;
}) {
    const steps: StepItem[] = [
        { label: 'سبد خرید', isActive: step >= 1, onClick: () => OnClick(1), icon: BagHappy },
        { label: 'پرداخت', isActive: step >= 2, onClick: () => OnClick(2), icon: Wallet },
        { label: 'دریافت بلیت', isActive: step >= 3, onClick: () => OnClick(3), icon: Ticket },
    ];
    const progressBarWidth = ((step - 1) / (steps.length - 1)) * 100;
    const Step = ({ label, isActive, onClick, icon: Icon }: { label: string, isActive: boolean, onClick: () => void, icon: React.ElementType; }) => (
        <button onClick={onClick} className=" cursor-pointer  z-0 flex items-center flex-col gap-2">
            <motion.div
                animate={isActive ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                transition={{ duration: 0.3 }} className={`p-2 rounded-full bg-${isActive ? "success-600" : "white"} duration-150`}>
                <Icon className={`text-${isActive ? "white" : "gray-300"}`} size={24} variant={"Bold"} />

            </motion.div>
            <p className={`text-base flex-nowrap text-${isActive ? "success-600" : "gray-400"}`}>{label}</p>

        </button>
    );
    return (
        <div className='w-full flex px-6  pb-4 justify-between items-center relative   z-20'>
            <div className='w-[80%]  h-1 absolute top-[20px] left-1/2 transform -translate-x-1/2  bg-gray-50 rounded-full '>
                <div
                    className='h-full bg-success-600 rounded-full transition-all duration-300'
                    style={{ width: `${progressBarWidth}%` }}
                ></div>
            </div>
            {steps.map(Step)}
        </div>
    )
}

export default PaymentSteps