import Image from "next/image";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen  bg-[#E0E0E0]  flex items-center justify-center lg:px-6">
      <div className=" w-full lg:aspect-video max-w-[1258px] flex flex-col items-center justify-center lg:grid h-full lg:h-fit bg-white  grid-cols-1 lg:grid-cols-2 lg:rounded-[30px]  shadow-CMSHADOW">

        <div className=" w-full h-fit lg:h-full py-4 px-6 md:p-10 xl:p-0 order-2 lg:order-1 ">{children}</div>
        <div className=" w-full  h-[180px]  lg:h-full block  lg:bg-[#EAEAEA] lg:rounded-l-[30px] relative order-1 lg:order-2 ">
          <div className="max-w-[430px] mx-auto relative h-full">
            <Image src={"/SignUp.png"} alt="image" className="object-contain" fill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default layout;
