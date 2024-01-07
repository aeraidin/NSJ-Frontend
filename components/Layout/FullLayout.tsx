import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function FullLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default FullLayout;
