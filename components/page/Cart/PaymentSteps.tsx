import { BagHappy, Ticket, Wallet } from 'iconsax-react';
import React from 'react'
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

    const Step = ({ label, isActive, onClick, icon: Icon }: { label: string, isActive: boolean, onClick: () => void, icon: React.ElementType; }) => (
        <button onClick={onClick} className=" cursor-pointer  z-0 flex items-center flex-col gap-2">
            <div className={`p-2 rounded-full bg-${isActive ? "success-600" : "gray-25"}`}>
                <Icon className={`text-${isActive ? "white" : "gray-300"}`} size={24} variant={"Bold"} />

            </div>
            <p className={`text-base flex-nowrap text-${isActive ? "success-600" : "gray-400"}`}>{label}</p>

        </button>
    );
    return (
        <div className='w-full flex px-6  pb-4 justify-between items-center  z-20'>
            {steps.map(Step)}
        </div>
    )
}

export default PaymentSteps