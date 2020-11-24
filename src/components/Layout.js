import React from "react"

import Header from "./Header";
import Footer from "./Footer";

export default ({ children }) => {

  return (
    <div className="l-wrapper">
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer/>
    </div>
  )
}
