import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ProjectContainer from "../components/projectContainer"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="projects" />
    <h1>PROJECTS</h1>
    <ProjectContainer />
  </Layout>
)

export default Projects
