import React from 'react'
import Modal from '../Modal'
import PreRegisterOTP from '../../Forms/auth/PreRegisterOTP'


function OTPModal({ CloseModal, Phone, NationalCode, State }: { CloseModal: () => void, State: boolean, Phone: string, NationalCode: string }) {
  return (
    <Modal State={State} CloseModal={CloseModal}
      CloseIcon>
      <div className='max-w-[540px] mx-auto'>

        <div className="flex flex-col gap-4 pb-6">
          <h1 className="text-2xl md:text-3xl text-primary-600 font-bold">
            کد تایید را وارد کنید
          </h1>
          <p className="text-sm md:text-base text-gray-400">
            {
              `کد  به شماره ${Phone} ارسال شد`}
          </p>
        </div>
        <PreRegisterOTP CloseModal={CloseModal} phone={Phone} nationalCode={NationalCode} />
      </div>
    </Modal>
  )
}

export default OTPModal