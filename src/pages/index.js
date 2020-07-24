import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Index = () => (
  <Layout>
    <SEO title="about" />
      {/* <Image /> */}
    <Link to="/projects/">PROJECTS</Link>
  </Layout>
)

export default Index
