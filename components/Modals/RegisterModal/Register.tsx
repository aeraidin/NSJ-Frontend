"use client"
import React, { useState } from 'react'

interface ModalProps {
    openModal : boolean
}

function Register({openModal}:ModalProps) {
    const [isOpen, SetIsOpen] = useState<Boolean>(openModal)
    console.log(isOpen);
    
  return (
    <div  className={` ${isOpen ? 'flex' : 'hidden'}  z-30 w-full min-h-screen bg-black/70  justify-center items-center  backdrop-blur-[1.5px] fixed left-0 top-0 right-0 bottom-0 `}>
        <div className=' h-[678px] w-full max-w-[532px] rounded-[30px] bg-white'>
            <label onClick={() => SetIsOpen(!isOpen)}>Close</label>
        </div>
    </div>
  )
}

export default Register