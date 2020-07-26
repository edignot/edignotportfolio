import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AboutContainer from "../components/aboutContainer"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "working2.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout title="I'm Edita." role="a software engineer." about="about">
      <SEO title="about" />
      <section className="about-intro">
        <div>
          <Img
            fluid={data.file.childImageSharp.fluid}
            className="about-working-img"
          />
        </div>

        <h2>When I'm not coding you'll find me hiking and taking pictures.</h2>
        <p>
          Here's a brief intro. You can find more about me on{" "}
          <a href="https://www.linkedin.com/feed/" target="_blank">
            LinkedIn
          </a>
        </p>
      </section>
      <AboutContainer />
    </Layout>
  )
}

export default About
