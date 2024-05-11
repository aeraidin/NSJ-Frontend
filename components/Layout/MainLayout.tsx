import React from 'react'
import Header from './Header/Header'
import Footer from './Footer'
import { useSestion } from '@/util/session';

function MainLayout({ children }: { children: React.ReactNode }) {
    const Session = useSestion();

    return (
        <React.Fragment>
            <Header />
            <main className="min-h-screen Container">{children}</main>
            <Footer />
        </React.Fragment>
    )
}

export default MainLayout
