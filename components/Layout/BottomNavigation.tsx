"use client"
import { Category, Heart, Home2, Profile } from 'iconsax-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
interface NavItem {
    href: string;
    icon: React.ElementType;
    text: string;
}
function BottomNavigation() {
    const path = usePathname();

    const navItems: NavItem[] = [
        { icon: Home2, text: "خانه", href: "/" },
        { icon: Category, text: "دسته بندی", href: "/category/all" },
        { icon: Heart, text: "علاقه مندی", href: "/profile/favorite" },
        { icon: Profile, text: "پروفایل", href: "/profile" },
    ];

    const renderNavItem = ({ icon: Icon, text, href }: NavItem) => (
        <Link
            href={href}
            key={href}
            className={`flex flex-col items-center gap-1   `}
        >
            <Icon className={`text-${path === href ? "third-500" : "gray-300"}`} variant={path === href ? "Bold" : "Linear"} />
            <p className={`text-xs flex-nowrap text-${path === href ? "third-500" : "gray-400"}`}>{text}</p>
        </Link>
    );
    return (
        <div className='fixed bottom-0 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20 w-full lg:hidden  '>
            <div className="w-full flex items-center gap-3 justify-between bg-white max-w-[480px] mx-auto px-6 py-4 rounded-t-2xl sm:rounded-b-2xl shadow-CMSHADOWHover">
                {navItems.map(renderNavItem)}
            </div>
        </div>
    )
}

export default BottomNavigation