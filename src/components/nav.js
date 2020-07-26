import { Link } from "gatsby"
import React from "react"

const Nav = ({ position }) => (
  <nav className={position}>
    <Link to="/projects/" className="top-nav-item">
      PROJECTS
    </Link>
    <Link to="/about/" className="top-nav-item">
      ABOUT
    </Link>
  </nav>
)

export default Nav
