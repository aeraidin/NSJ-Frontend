// import { useSestion } from "@/util/session";
import React from "react";
// import { redirect } from "next/navigation";
// import { cookies } from "next/headers";

function Layout({ children }: { children: React.ReactNode }) {
  // const Session = useSestion();
  // const cookieStore = cookies();
  // const isNew = cookieStore.get("isNew");
  // if (Session && isNew?.value !== "true") {
  //   redirect("/login");
  // }
  return <>{children}</>;
}

export default Layout;
