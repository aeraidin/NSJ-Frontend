import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen bg-[#E0E0E0] flex items-center justify-center">
      <div className="w-full max-w-[1157px] grid bg-white lg:grid-cols-2 rounded-[30px] overflow-hidden shadow-xl">
        <div>{children}</div>
        <div className="min-h-[745px] bg-[#EAEAEA] rounded-[30px]"></div>
      </div>
    </div>
  );
}

export default layout;
