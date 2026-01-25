import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {} from '@mui/material'
const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <div>{children}</div>
        <Footer/>
    </>
  )
}

export default Layout