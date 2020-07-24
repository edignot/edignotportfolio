import { Link } from "gatsby"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
      <p>
        <Link to="/">{siteTitle}</Link>
        © {new Date().getFullYear()}
      </p>
  </footer>
)

export default Footer