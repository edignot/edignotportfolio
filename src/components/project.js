import React from "react"
import Img from "gatsby-image"

const Project = props => {
  const { deployed, github, img, title, tech, project, order } = props.project

  const techs = tech.tech.map(t => <p key={t}>{t}</p>)

  return (
    <article className="project" id={order}>
      <div className="project-info-container">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{project.project}</p>
        <div className="project-techs-container">{techs}</div>
        <div className="project-links">
          <a href={github} target="_blank">
            code
          </a>
          <a href={deployed} target="_blank">
            visit
          </a>
        </div>
      </div>

      <Img fluid={img.fluid} className="project-img" />
    </article>
  )
}

export default Project
