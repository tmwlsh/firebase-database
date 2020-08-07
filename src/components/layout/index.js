import React from "react"
import Header from "../header"
import Footer from "../footer"

import '../../sass/main.scss'

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )

}

export default Layout
