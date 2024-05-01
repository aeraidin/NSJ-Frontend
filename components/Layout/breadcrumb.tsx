import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowRight2 } from "iconsax-react";
import { motion } from "framer-motion"

export type BreadcrumbItemProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

const BreadcrumbItem = ({
  href = "#",
  className,
  children,
}: BreadcrumbItemProps) => (
  <Link
    href={href}
    role="button"
    className={`inline-flex items-center text-[#9B9B9B] gap-2 Bread ${className}`}
  >
    {children}
  </Link>
);
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  separator?: React.ReactNode;
  disableCurrent?: boolean;
  children: React.ReactNode;
  className?: string;
  separatorClassName?: string;
  separatorVariant?: "default" | "circle";
}
const Breadcrumb = ({
  disableCurrent = true,
  children,
  className,
}: BreadcrumbProps) => {
  const numOfItems = React.Children.count(children);
  const LastIndex = React.Children.map(children, (child: any,) => child.props.href)
  return (
    <div
      className={`inline-flex flex-wrap whitespace-nowrap items-center text-xs lg:text-sm gap-2 ${className}`}>
      <motion.button
        whileTap={{ scale: 0.8 }}>
        {/* <Link href={`${LastIndex![numOfItems - 2]}`}>
          <ArrowRight2 size={20} className="text-gray-400 hover:text-gray-600  dark:hover:text-white duration-150" />
        </Link> */}
      </motion.button>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement<BreadcrumbItemProps>(child)) return child;
        return (
          <>
            {React.cloneElement(child, {
              className: ` last:text-[#7E7E7E]   whitespace-nowrap Bread ${disableCurrent ? "last:pointer-events-none " : ""
                }`,
            })}
            {index < numOfItems - 1 && (
              <span className="text-gray-200 ">/</span>
            )}
          </>
        );
      })}
    </div>
  );
};
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.displayName = "Breadcrumb";
export default Breadcrumb;
