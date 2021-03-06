import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const AboutContainer = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulAbout {
        aboutme {
          aboutme
        }
        skills {
          skills
        }
        resume {
          file {
            url
          }
        }
      }
    }
  `)

  const {
    contentfulAbout: {
      aboutme: { aboutme },
      skills: { skills },
    },
  } = data

  const techs = skills.map(s => <p key={s}>{s}</p>)

  return (
    <section className="about-container">
      <article className="about-me-container">
        <p className="about-me-description">{aboutme}</p>
      </article>
      <p className="skills-title">Technical skills:</p>
      <article className="skills">{techs}</article>
    </section>
  )
}

export default AboutContainer
