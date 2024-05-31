import { useSestion } from "@/util/session";
import { redirect } from "next/navigation";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
    const Session = useSestion();
    if (!Session) {
        redirect("/");
    }
    return <>{children}</>;
}

export default Layout;
