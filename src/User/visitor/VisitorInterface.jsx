import React from 'react'
import Header from './Componenets/Header/Header'
import Footer from './Componenets/Footer/Footer'
import { Outlet } from 'react-router-dom'
export default function VisitorInterface() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
