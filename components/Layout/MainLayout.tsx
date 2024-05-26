import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import BottomNavigation from "./BottomNavigation";

function MainLayout({ children }: { children: React.ReactNode }) {

  return (
    <React.Fragment>
      <Header />
      <BottomNavigation />
      <main className="min-h-screen Container">{children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default MainLayout;
