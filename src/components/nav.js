import { Link } from "gatsby"
import React from "react"

const Nav = ({ position, about, projects }) => (
  <nav className={position}>
    <Link to="/projects/" className={`${position}-item ${projects}`}>
      PROJECTS
    </Link>
    <Link to="/about/" className={`${position}-item ${about}`}>
      ABOUT
    </Link>
  </nav>
)

export default Nav
