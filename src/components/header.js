import { Link } from "gatsby"
import React from "react"
import Nav from "./nav"

const Header = () => (
  <header>
    <div className="nav-bar">
      <Link to="/">LOGO</Link>
      <Nav position="top-nav" />
    </div>
    <h1>PROJECTS</h1>
  </header>
)

export default Header
