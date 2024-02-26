import React from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Root