import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ProjectContainer from "../components/projectContainer"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="projects" />
      <section className="projects-intro">
        <div>
          <Img fluid={data.file.childImageSharp.fluid} className="intro-img" />
        </div>

        <h2>I enjoy turning problems into simple and intuitive designs.</h2>
        <p>
          Here's a selection of some recent projects. You can find more on{" "}
          <a href="https://github.com/edignot">GitHub</a>
        </p>
      </section>
      <ProjectContainer />
    </Layout>
  )
}

export default Projects
