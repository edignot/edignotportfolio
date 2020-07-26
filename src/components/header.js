import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./nav"
import Img from "gatsby-image"
import ParticleContainer from "../components/particles"

const Header = ({ title, role }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "working.png" }) {
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
      <ParticleContainer size="small" />
      <div className="nav-bar">
        <Link to="/">
          <Img
            fluid={data.file.childImageSharp.fluid}
            className="working-img"
          />
        </Link>
        <Nav position="top-nav" />
      </div>
      <div className="page-title-container">
        <h1 className="page-title">{title}</h1>
        <p className="page-role">{role}</p>
      </div>
    </header>
  )
}

export default Header
