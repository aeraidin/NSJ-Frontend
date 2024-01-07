import PrimaryBtn from "@/components/Layout/Buttons/PrimaryBtn";
import Otpcode from "@/components/Layout/Otpcode/Otpcode";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[150px]">
        <PrimaryBtn>ورود</PrimaryBtn>
      </div>
    </div>
  );
}
