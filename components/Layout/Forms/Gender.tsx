


"use client"
import React, { useEffect,useState } from 'react';
import RadioButton from '../Buttons/RadioButton';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import Register from '@/components/Modals/RegisterModal/Register';
import Birthdate from '../Calender/Birthdate';

interface GenderProps {
    selectedValue: (value: number) => void;
    onInternalSubmit: () => void;
    isError: boolean;  // Pass isError as a prop
}

function Gender({ selectedValue, onInternalSubmit, isError }: GenderProps) {
  
    const [selectedGender, setSelectedGender] = useState<number | null>(null);

    const selectionHandler = (value: number) => {
        selectedValue(value);
        setSelectedGender(value);

        if (isError) {
            onInternalSubmit();  
        }
    };

    const [isOpen, SetIsOpen] = useState(false)

    useEffect(() => {
        console.log(isOpen);
        
    },[isOpen])
    return (
        <div className='w-full gap-2 max-w-[312px] md:max-w-[312px] flex flex-col justify-start'>
            <label className='text-base'>جنسیت</label>

            <div className='flex justify-between w-full max-w-[186px]'>
                <label className='text-base'>زن</label>
                <RadioButton
                    disabled={false}
                    error={isError}
                    onChange={() => selectionHandler(1)}
                    checked={selectedGender === 1}

                />
                <label className='text-base'>مرد</label>
                <RadioButton
                    disabled={false}
                    error={isError}
                    onChange={() => selectionHandler(0)}
                    checked={selectedGender === 0}

                />
            </div>

        <PrimaryBtn onClick={() => SetIsOpen(!isOpen) } >OpenPopup</PrimaryBtn>
        {isOpen ? <Register openModal={isOpen} />:null}

        <Birthdate onDateSelect={(e) => console.log(e)} isValid={true} />
        </div>
    );
}

export default Gender;
