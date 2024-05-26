"use client";
import {
  Heart,
  LogoutCurve,
  MessageText1,
  Profile,
  Receipt1,
  TableDocument,
  Wallet,
} from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface LinkItem {
  href: string;
  icon: React.ElementType;
  text: string;
}

interface LinksProps {
  inHeader?: boolean;
}

const Links: React.FC<LinksProps> = ({ inHeader }) => {
  const path = usePathname();

  const linkItems: LinkItem[] = [
    { href: "/profile/info", icon: Profile, text: "اطلاعات حساب کاربری" },
    { href: "/profile/wallet", icon: Wallet, text: "کیف پول" },
    { href: "/profile/reserves", icon: TableDocument, text: "رزرو های من" },
  ];

  if (!inHeader) {
    linkItems.push(
      { href: "/profile/favorite", icon: Heart, text: "علاقه مندی" },
      { href: "/profile/transactions", icon: Receipt1, text: "تراکنش ها" },
      { href: "/profile/comments", icon: MessageText1, text: "نظرات من" }
    );
  }

  const renderLink = ({ href, icon: Icon, text }: LinkItem) => (
    <Link
      href={href}
      key={href}
      className={`flex hover:bg-gray-25 duration-200 ${path === href ? "bg-gray-25 select-none" : ""} ${inHeader ? "pr-2 pl-6 gap-x-2 py-3" : "px-6 gap-x-4 py-4"} rounded-2xl`}
    >
      <Icon className={`text-${path === href ? "third-500" : "gray-300"}`} variant={path === href ? "Bold" : "Linear"} />
      <p className={`text-base flex-nowrap text-${path === href ? "third-500" : "gray-400"}`}>{text}</p>
    </Link>
  );

  return (
    <div className="w-full h-full">
      <div className="h-full justify-between flex flex-col">
        <div>
          <ul className="flex flex-col gap-1 whitespace-nowrap select-none">
            {linkItems.map(renderLink)}
          </ul>
        </div>
        <div>
          <ul>
            <Link
              href="/"
              className={`flex hover:bg-error-100 duration-200 rounded-2xl ${inHeader ? "pr-2 pl-6 gap-x-2 py-3" : "px-6 gap-x-4 py-4"}`}
            >
              <LogoutCurve className="text-error-500" />
              <p className="text-error-500 text-base flex-nowrap">خروج</p>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Links;
