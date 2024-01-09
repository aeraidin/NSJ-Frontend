import PrimaryBtn from "@/components/Layout/Buttons/PrimaryBtn";
import FullLayout from "@/components/Layout/FullLayout";
<<<<<<< Updated upstream
=======
import Modal from "@/components/Modals/Modal/Modal";
>>>>>>> Stashed changes
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
<<<<<<< Updated upstream
=======
  // const [openModal,setOpenModal] = useState(false)
  
  // useEffect(() => {
    // setOpenModal(openModal)
  // },[])
  
>>>>>>> Stashed changes
  return (
    <FullLayout>
      <div className="w-full min-h-screen flex gap-y-4 flex-col items-center justify-center">
        <div className="w-full max-w-[150px]">
          <Link href={"/login"}>
            <PrimaryBtn>ورود</PrimaryBtn>
          </Link>
        </div>
      {/* <button */}
      {/* onClick={() => setOpenModal(!openModal)} */}
       {/* className=" bg-black text-white rounded-lg py-2 px-3" */}
      {/* //  >OPEN</button> */}
      </div>
      {/* {openModal ? <Modal  openModal={openModal}><p>Hi</p></Modal>:null} */}
    </FullLayout>
  );
}
