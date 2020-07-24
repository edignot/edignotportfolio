import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "./project"

const ProjectContainer = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProject {
        nodes {
          deployed
          github
          id
          img {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          title
          tech {
            tech
          }
        }
      }
    }
  `)

  const {
    allContentfulProject: { nodes },
  } = data

  const projects = nodes.map(project => {
    return <Project project={project} />
  })

  return (
    <section className="project-container">
      <h1>PROJECTS CONTAINER</h1>
      {projects}
    </section>
  )
}

export default ProjectContainer
