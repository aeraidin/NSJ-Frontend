/** @format */

import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import BottomNavigation from "./BottomNavigation";

interface MainLayoutProps {
  children: React.ReactNode;
  isProfile?: Boolean;
}

function MainLayout({ children, isProfile }: MainLayoutProps) {
  return (
    <React.Fragment>
      <Header />
      <BottomNavigation />
      <main className="min-h-screen Container overflow-x-hidden">
        {children}
      </main>
      {!isProfile ? <Footer /> : null}
    </React.Fragment>
  );
}

export default MainLayout;
