import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./nav"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header>
      <div className="nav-bar">
        <Link to="/">
          <Img fluid={data.file.childImageSharp.fluid} className="logo" />
        </Link>
        <Nav position="top-nav" />
      </div>
      <div className="page-title-container">
        <h1 className="page-title">PROJECTS</h1>
      </div>
    </header>
  )
}

export default Header
