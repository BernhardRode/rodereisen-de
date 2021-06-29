import * as React from "react"
import HeaderImage from "../components/header-image"
import Layout from "../components/layout"
import SectionCorona from "../components/section-corona"
import SectionHeadline from "../components/section-headline"
import SEO from "../components/seo"
import Wall, { Walltile } from "../components/wall"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Wall />
      <SectionHeadline headline="wir sind" subheadline="für sie da" />
      <SectionCorona />
    </Layout>
  )
}

export default IndexPage
