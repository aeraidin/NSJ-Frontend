"use client";
import PrimaryBtn from "@/components/Layout/Buttons/PrimaryBtn";
import FullLayout from "@/components/Layout/FullLayout";
import Modal from "@/components/Layout/Modals/Modal/Modal";
import LoginModal from "@/components/Layout/Modals/Modal/auth/LoginModal";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <FullLayout>
      <div className="w-full min-h-screen flex gap-y-4 flex-col items-center justify-center">
        <div className="w-full max-w-[150px] flex flex-col gap-5">
          <Link href={"/login"}>
            <PrimaryBtn>ورود</PrimaryBtn>
          </Link>
          <PrimaryBtn onClick={() => setOpenModal(!openModal)}>
            ورود از پاپ اپ
          </PrimaryBtn>
        </div>
      </div>
      <LoginModal State={openModal} CloseModal={() => setOpenModal(false)} />
    </FullLayout>
  );
}
