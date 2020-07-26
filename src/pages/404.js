import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="not found" />
    <section className="not-found-container">
      <p>page you're looking for does not exist...</p>
    </section>
  </Layout>
)

export default NotFoundPage
