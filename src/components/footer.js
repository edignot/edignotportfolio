import { Link } from "gatsby"
import React from "react"

import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaCamera,
} from "react-icons/fa"
import { MdMail } from "react-icons/md"

const Footer = ({ siteTitle }) => (
  <footer>
    <section className="footer-icons">
      <a href="https://github.com/edignot">
        <FaGithubSquare />
      </a>
      <a href="https://www.linkedin.com/feed/">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/EditaIgnot">
        <FaTwitterSquare />
      </a>
      <a href="mailto:edignot@gmail.com">
        <MdMail />
      </a>
      <a href="https://editaignot.com/">
        <FaCamera />
      </a>
    </section>
    <p>
      <Link to="/">{siteTitle}</Link>© {new Date().getFullYear()}
    </p>
  </footer>
)

export default Footer
