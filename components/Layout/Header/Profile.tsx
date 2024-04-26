"use client"
import React, { useState } from 'react'
import LoginModal from '../Modals/auth/LoginModal'

function Profile() {
    const [LoginModalState, setLoginModal] = useState(false)

    return (
        <div>
            <button onClick={() => setLoginModal(true)} className="bg-secondary-600  text-white px-6 py-4 rounded-xl shadow-xl text-sm shadow-secondary-600/60 hover:shadow-none duration-200">
                ورود/عضویت
            </button>
            <LoginModal CloseModal={() => setLoginModal(false)} State={LoginModalState} />
        </div>
    )
}

export default Profile