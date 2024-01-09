"use client"
import PrimaryBtn from "@/components/Layout/Buttons/PrimaryBtn";
import Gender from "@/components/Layout/Forms/Gender";
import FullLayout from "@/components/Layout/FullLayout";
import Register from "@/components/Modals/RegisterModal/Register";
import Link from "next/link";

export default function Home() {
  
  return (
    <FullLayout>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="w-full max-w-[150px]">
          <Link href={"/login"}>
            <PrimaryBtn>ورود</PrimaryBtn>
          </Link>
        </div>
      </div>
    </FullLayout>
  );
}
