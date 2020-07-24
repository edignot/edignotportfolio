import React from "react"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Image from "../components/image"
import "../css/index.css"

const Index = () => (
  <section className="home">
    <SEO title="home" />
    <Nav position="center-nav" />
    <Image />
  </section>
)

export default Index
