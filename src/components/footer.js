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
      <a href="https://github.com/edignot" target="_blank">
        <FaGithubSquare className="footer-icon" />
      </a>
      <a href="https://www.linkedin.com/feed/" target="_blank">
        <FaLinkedin className="footer-icon" />
      </a>
      <a href="https://twitter.com/EditaIgnot" target="_blank">
        <FaTwitterSquare className="footer-icon" />
      </a>
      <a href="mailto:edignot@gmail.com" target="_blank">
        <MdMail className="footer-icon" />
      </a>
      <a href="https://editaignot.com/" target="_blank">
        <FaCamera className="footer-icon" />
      </a>
    </section>
    <p>
      ©{" "}
      <Link to="/" className="footer-link">
        {siteTitle}
      </Link>{" "}
      {new Date().getFullYear()}
    </p>
  </footer>
)

export default Footer
