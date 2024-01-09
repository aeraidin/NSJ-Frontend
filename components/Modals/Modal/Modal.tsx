"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'

interface ModalProps {
    openModal : boolean;
    children:React.ReactNode
}

function Modal({openModal, children}:ModalProps) {
    const [isOpen, SetIsOpen] = useState<Boolean>(openModal)
    
  return (
    <div

    className={` ${isOpen ? 'flex' : 'hidden'}  z-30 w-full min-h-screen bg-black/70  justify-center items-center  backdrop-blur-[1.5px] fixed left-0 top-0 right-0 bottom-0 `}>
        <motion.div 
        animate={{ y: 0 }}
        initial={{y: 30}}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className={` h-auto w-full max-w-[362px] md:max-w-[532px] px-[76px] py-[110px]   relative rounded-[30px] bg-white`}>

            <label  
            className=' w-full absolute left-0  top-0 cursor-pointer flex justify-end p-8 h-fit text-gray-500 hover:text-gray-600 duration-200' 
            onClick={() => SetIsOpen(!isOpen)}>بستن</label>

            <div className=' w-full h-full'>
              {children}
            </div>
        </motion.div>
    </div>
  )
}

export default Modal