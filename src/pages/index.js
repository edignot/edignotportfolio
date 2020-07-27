import React from "react"
import SEO from "../components/seo"
import Nav from "../components/nav"
import ParticleContainer from "../components/particles"
import "../css/index.css"

const Index = () => {
  console.log(
    "I'm looking for my next software developer role! Please reach out edignot@gmail.com"
  )
  return (
    <section className="home">
      <SEO title="home" />
      <Nav position="center-nav" />
      <ParticleContainer size="big" />
    </section>
  )
}

export default Index
