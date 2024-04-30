import AboutService from '@/components/page/SingleService/AboutService'
import ConditionsService from '@/components/page/SingleService/ConditionsService'
import ContactService from '@/components/page/SingleService/ContactService'
import MainServiceInfo from '@/components/page/SingleService/MainServiceInfo'
import RelatedService from '@/components/page/SingleService/RelatedService'
import ReviewService from '@/components/page/SingleService/ReviewService'
import SansService from '@/components/page/SingleService/SansService'
import React from 'react'

function page() {
    return (
        <div className=' flex flex-col w-full'>
            <MainServiceInfo />
            <SansService />
            <AboutService />
            <ContactService />
            <ConditionsService />
            <ReviewService />
            <RelatedService />
        </div>
    )
}

export default page