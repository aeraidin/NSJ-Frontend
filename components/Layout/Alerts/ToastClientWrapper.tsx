"use client";

import React from "react";
import { ToastProvider } from "./ToastProvider";


const ToastClientWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <ToastProvider>
            {children}
        </ToastProvider>
    );
};

export default ToastClientWrapper;
