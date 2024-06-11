import PrimaryBtn from '@/components/Layout/Buttons/PrimaryBtn'
import MainLayout from '@/components/Layout/MainLayout'
import { Home2 } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <MainLayout>
            <div className='w-full h-full flex items-center flex-col justify-center gap-4 py-10'>
                <div className='w-[300px] h-[300px] md:w-[400px] md:h-[400px]  lg:w-[500px] lg:h-[500px]  relative'>
                    <Image fill sizes='90wv' src={"/404Image.jpg"} alt='404' className='object-contain' />
                </div>
                <div className='flex flex-col gap-6'>
                    <h1>صفحه مورد نظر پیدا نشد!</h1>
                    <Link href={"/"}>
                        <PrimaryBtn> بازگشت به خانه </PrimaryBtn></Link>
                </div>
            </div>
        </MainLayout>
    )
}