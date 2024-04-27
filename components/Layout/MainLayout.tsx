import React from 'react'
import Header from './Header/Header'
import Footer from './Footer'

function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <React.Fragment>

            <Header />

            <main className="min-h-screen">{children}</main>
            <Footer />
        </React.Fragment>
    )
}

export default MainLayout