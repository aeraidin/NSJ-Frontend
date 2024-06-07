import MainLayout from '@/components/Layout/MainLayout'
import PreLogin from '@/components/page/Contribution/PreLogin'
import React from 'react'

function page() {
    return (
        <MainLayout>
            <div className='py-5'>
                <PreLogin />
            </div>
        </MainLayout>
    )
}

export default page