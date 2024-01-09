import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen bg-[#E0E0E0] flex items-center justify-center lg:px-6">
      <div className=" w-full lg:aspect-video max-w-[1258px] grid h-full lg:h-fit bg-white grid-cols-1 lg:grid-cols-2 lg:rounded-[30px]  shadow-xl">
        <div className="h-full p-6 md:p-10 xl:p-0 "> {children}</div>
        <div className=" hidden lg:block bg-[#EAEAEA] lg:rounded-l-[30px]"></div>
      </div>
    </div>
  );
}

export default layout;
