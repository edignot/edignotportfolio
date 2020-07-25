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
          description {
            description
          }
        }
      }
    }
  `)

  const {
    allContentfulProject: { nodes },
  } = data

  const projects = nodes.map(project => {
    return <Project project={project} key={project.id} />
  })

  return <section className="project-container">{projects}</section>
}

export default ProjectContainer
