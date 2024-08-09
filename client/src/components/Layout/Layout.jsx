import React from 'react'
import './Layout.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <div className="layout">
        <Navbar/>
            <div className="content">
              <Outlet/>
            </div>
        <Footer/>
        </div>
    </div>
  )
}

export default Layout