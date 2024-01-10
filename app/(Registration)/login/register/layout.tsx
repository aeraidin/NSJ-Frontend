import { useSestion } from "@/util/session";
import React from "react";
import { redirect } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const Session = useSestion();
  if (Session) {
    redirect("/login");
  }
  return <>{children}</>;
}

export default Layout;
