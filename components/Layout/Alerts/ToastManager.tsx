import React from "react";
import Toast, { IToast } from "./Toast";

export interface ToastManagerProps {
    toasts: (IToast & { id: number })[];
    removeToast: (id: number) => void;
}

const ToastManager: React.FC<ToastManagerProps> = ({ toasts, removeToast }) => {
    return (
        <div className="fixed top-8 right-[2%] z-50 flex flex-col gap-4 w-full max-w-[370px]">
            {toasts.map((toast, index) => (
                <Toast
                    key={toast.id}
                    {...toast}
                    close={() => removeToast(toast.id)}
                />
            ))}
        </div>
    );
};

export default ToastManager;
