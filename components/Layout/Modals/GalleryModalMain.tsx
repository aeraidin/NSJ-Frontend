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
        visible: { opacity: 1, translateY: 0, transition: { delay: 0.3 } },
        hidden: { opacity: 0, translateY: 80 },
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
                    className={`flex z-50 w-full h-screen bg-black/70  justify-center items-end  md:items-center  backdrop-blur-[5px] fixed left-0 top-0 duration-200`}
                >
                    <motion.div
                        ref={containerRef}
                        variants={variants}
                        className={` w-[90%] md:w-[80%]  max-w-[1480px] h-fit   flex items-center justify-center relative rounded-2xl md:rounded-2xl  `}
                    >
                        <button
                            className=" absolute -top-10 right-0   duration-150"
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
