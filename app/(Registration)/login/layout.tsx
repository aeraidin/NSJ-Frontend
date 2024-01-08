import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen bg-[#E0E0E0] flex items-center justify-center lg:px-6">
      <div className=" w-full aspect-video max-w-[1157px] grid h-full lg:h-fit bg-white grid-cols-1 lg:grid-cols-2 lg:rounded-[30px] overflow-hidden shadow-xl">
        <div className="h-full"> {children}</div>
        <div className=" hidden lg:block bg-[#EAEAEA]"></div>
      </div>
    </div>
  );
}

export default layout;
