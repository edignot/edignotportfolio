import { Link } from "gatsby"
import React from "react"

const Nav = ({position}) => (
  <nav className={position}>
    <Link to="/projects/">PROJECTS</Link>
    <Link to="/about/">ABOUT</Link>
  </nav>
)

export default Nav
