import React from "react"
import Layout from "../components/layout"
import ProjectContainer from "../components/projectContainer"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "working.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout title="PROJECTS" projects="projects">
      <SEO title="projects" />
      <section className="projects-intro">
        <div>
          <Img
            fluid={data.file.childImageSharp.fluid}
            className="project-working-img"
          />
        </div>

        <h2>I enjoy turning problems into simple and intuitive designs.</h2>
        <p>
          Here's a selection of some recent projects. You can find more on{" "}
          <a href="https://github.com/edignot" target="_blank">
            GitHub
          </a>
        </p>
      </section>
      <ProjectContainer />
    </Layout>
  )
}

export default Projects
