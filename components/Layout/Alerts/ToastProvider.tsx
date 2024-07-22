"use client"
import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import ToastManager from "./ToastManager";
import { IToast } from "./Toast";


interface Toast extends IToast {
    id: number;
}
interface ToastContextType {
    addToast: (toast: Omit<Toast, "id" | "close" | "Result">) => void;
    removeToast: (id: number) => void;
}
const ToastContext = createContext<ToastContextType | undefined>(undefined);
export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const toastId = React.useRef(0);
    const addToast = useCallback((toast: Omit<Toast, "id" | "close" | "Result">) => {
        const id = toastId.current++;
        setToasts((prevToasts) => [...prevToasts, { id, ...toast, Result: true, close: () => removeToast(id) }]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const removeToast = useCallback((id: number) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastManager toasts={toasts} removeToast={removeToast} />
        </ToastContext.Provider>
    );
};

export const useToast = (): ToastContextType => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};
