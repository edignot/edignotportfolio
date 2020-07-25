import React from "react"
import Img from "gatsby-image"

const Project = props => {
  const { deployed, github, img, title, tech, id, description } = props.project
  console.log(props.project)
  return (
    <article className="project" id={id}>
      <h2>{title}</h2>
      <p>{description.description}</p>
      <Img fluid={img.fluid} className="project-img" />
    </article>
  )
}

export default Project
