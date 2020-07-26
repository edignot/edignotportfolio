import { Link } from "gatsby"
import React from "react"

const Nav = ({ position }) => (
  <nav className={position}>
    <Link to="/projects/" className={`${position}-item`}>
      PROJECTS
    </Link>
    <Link to="/about/" className={`${position}-item`}>
      ABOUT
    </Link>
  </nav>
)

export default Nav
