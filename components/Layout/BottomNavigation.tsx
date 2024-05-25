import { Category, Heart, Home2, Profile } from 'iconsax-react'
import React from 'react'

function BottomNavigation() {
    return (
        <div className='fixed bottom-0 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20 w-full lg:hidden  '>
            <div className="w-full flex items-center gap-3 justify-between bg-white max-w-[380px] mx-auto px-6 py-2 rounded-t-2xl sm:rounded-b-2xl shadow-CMSHADOWHover">
                <div className='text-gray-300 flex items-center flex-col gap-2 py-2 px-2'>
                    <Home2 size="24" />
                    <p className='text-gray-300 text-xs'>خانه</p>
                </div>
                <div className='text-gray-300 flex items-center flex-col gap-2 py-2 px-2'>
                    <Category size="24" />
                    <p className='text-gray-300 text-xs'>دسته بندی</p>
                </div>
                <div className='text-gray-300 flex items-center flex-col gap-2 py-2 px-2'>
                    <Heart size="24" />
                    <p className='text-gray-300 text-xs'>علاقه مندی</p>
                </div>
                <div className='text-gray-300 flex items-center flex-col gap-2 py-2 px-2'>
                    <Profile size="24" />
                    <p className='text-gray-300 text-xs'>پروفایل</p>
                </div>
            </div>
        </div>
    )
}

export default BottomNavigation