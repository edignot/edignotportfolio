import { Link } from "gatsby"
import React from "react"
import Nav from "./nav"

const Header = () => (
  <header>
    <h1>
      <Link to="/">LOGO</Link>
    </h1>
    <Nav position="top-nav" />
  </header>
)

export default Header
