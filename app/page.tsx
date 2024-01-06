import PrimaryBtn from "@/components/Layout/Buttons/PrimaryBtn";
import Otpcode from "@/components/Layout/Otpcode/Otpcode";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center uppercase text-4xl bg-white font-black text-black ">     
      <div className=" flex-col space-y-4 flex w-full max-w-[390px]"> 
      <Otpcode length={5} />
      <PrimaryBtn>
      <p>ادامه دهید</p>
     </PrimaryBtn>
      </div>
    </div>
  );
}
