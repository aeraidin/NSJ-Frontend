/** @format */

"use client";
import React, { useState } from "react";
import LoginModal from "../Modals/auth/LoginModal";
import useGetUser from "@/util/hook/user/useGetUser";
import { ArrowDown2, ProfileCircle } from "iconsax-react";
import { AnimatePresence, motion } from "framer-motion";
import useClickOutside from "@/util/hook/useClickOutside";
import Links from "@/components/page/Profile/Links";

function Profile() {
  const [LoginModalState, setLoginModal] = useState(false);
  const [ProfileModalState, setProfileModalState] = useState(false);
  const data = useGetUser();
  const Data = data?.data?.value as UserData | undefined;
  const containerRef = useClickOutside(() => setProfileModalState(false));
  const variants = {
    visible: { opacity: 1, translateY: 0, },
    hidden: { opacity: 0, translateY: 50 },
  };
  const Backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  return (
    <>
      {Data ? (
        <div ref={containerRef} onClick={() => setProfileModalState(!ProfileModalState)} className="px-3 py-2 rounded-2xl border border-gray-50 text-gray-500 items-center gap-2 hover:border-gray-200 duration-150 cursor-pointer hidden lg:flex relative select-none">
          <ProfileCircle size="20" variant="Bold" />
          <p>{Data.firstName}</p>
          <ArrowDown2 size="24" />
          <AnimatePresence>
            {ProfileModalState && (
              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                exit={"hidden"}
                className={` bg-white shadow-CMSHADOWHover px-4 py-3 flex flex-col items-center justify-center absolute top-[120%] right-0 rounded-2xl md:rounded-2xl  `}
              >
                <Links inHeader />
              </motion.div>

            )}
          </AnimatePresence>
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
