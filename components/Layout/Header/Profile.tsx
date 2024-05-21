/** @format */

"use client";
import React, { useState } from "react";
import LoginModal from "../Modals/auth/LoginModal";
import useGetUser from "@/util/hook/user/useGetUser";

function Profile() {
  const [LoginModalState, setLoginModal] = useState(false);
  const data = useGetUser();
  const Data = data?.data?.value as UserData | undefined;

  return (
    <>
      {Data ? (
        <div className="px-3 py-2 rounded-2xl border border-gray-50 hover:border-gray-200 duration-150 cursor-pointer">
          <p>{Data.firstName}</p>
        </div>
      ) : (
        <>
          <button
            onClick={() => setLoginModal(true)}
            className="bg-secondary-600  text-white px-6 py-4 rounded-xl shadow-xl text-sm shadow-secondary-600/60 hover:shadow-none duration-200"
          >
            ورود | عضویت
          </button>
          <LoginModal
            CloseModal={() => setLoginModal(false)}
            State={LoginModalState}
          />
        </>
      )}
    </>
  );
}

export default Profile;
