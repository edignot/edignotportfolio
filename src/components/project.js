import React from "react"
import Img from "gatsby-image"

const Project = props => {
  const { deployed, github, img, title, tech } = props.project
  return (
    <article className="project">
      <h2>{deployed}</h2>
      <Img fluid={img.fluid} />
    </article>
  )
}

export default Project
