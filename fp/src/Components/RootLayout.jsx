import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

function RootLayout() {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default RootLayout
