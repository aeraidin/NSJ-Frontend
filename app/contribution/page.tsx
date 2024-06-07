import MainLayout from '@/components/Layout/MainLayout'
import Benefits from '@/components/page/Contribution/Benefits'
import LoginGuide from '@/components/page/Contribution/LoginGuide'
import PreLogin from '@/components/page/Contribution/PreLogin'
import Questions from '@/components/page/Contribution/Questions'
import React from 'react'

function page() {
    return (
        <MainLayout>
            <div className='py-5 flex flex-col gap-32'>
                <div className='pb-[470px] md:pb-[520px] lg:pb-[240px]' >
                    <PreLogin />
                </div>
                <Benefits />
                <LoginGuide />
                <Questions />
            </div>
        </MainLayout>
    )
}

export default page