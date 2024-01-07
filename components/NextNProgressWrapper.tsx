"use client";
import React from "react";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
function NextNProgressWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ProgressBar
        height="3px"
        color="#FEB92E"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}

export default NextNProgressWrapper;
