"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Add } from "iconsax-react";
import useClickOutside from "@/util/hook/useClickOutside";
interface ModalProps {
    CloseModal: () => void;
    children: React.ReactNode;
    State: boolean;
}

function GalleryModalMain({
    CloseModal,
    children,
    State,
}: ModalProps) {
    const containerRef = useClickOutside(CloseModal);
    const variants = {
        visible: { opacity: 1, scale: 1, transition: { delay: 0.1 } },
        hidden: { opacity: 0, scale: 0.8 },
    };
    const Backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };
    return (
        <AnimatePresence>
            {State && (
                <motion.div
                    variants={Backdrop}
                    initial="hidden"
                    animate="visible"
                    exit={"hidden"}

                    className={`flex z-50 w-full h-screen bg-black/80  justify-center items-center   fixed left-0 top-0 duration-200`}
                >
                    <motion.div
                        ref={containerRef}
                        variants={variants}
                        className={` w-full h-[50%] lg:h-[75%]   flex items-center justify-center relative rounded-2xl md:rounded-2xl  `}
                    >
                        <button
                            className=" absolute -top-20 right-10 duration-150"
                            onClick={CloseModal}
                        >
                            <Add size="32" className="rotate-45 text-white" />
                        </button>
                        <div className="w-full h-full">{children}</div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default GalleryModalMain;
